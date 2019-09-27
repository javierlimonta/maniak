import React, { useState, useEffect } from 'react';
import { withStyles, Typography, Paper } from '@material-ui/core';
import { blue, grey } from '@material-ui/core/colors';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import PropTypes from 'prop-types';
const styles = (theme) => ({
    title: { width: '100%' },
    position: { color: grey[500] },
    pageInfo: {
        color: theme.palette.common.white,
        width: 50, padding: 10, marginTop: 5,
        backgroundColor: blue[500],
        textAlign: 'center',
        cursor: 'pointer'
    },

    fontSize20: { fontSize: 20 }
})
const Slider = props => {
    const { classes } = props;
    const [page, setPage] = useState(1);
    const [current, setCurrent] = useState(null);

    const onclickPageHandler = value => {
        setPage(value);
        setCurrent(props.list[value - 1]);
    }

    const prepareInfo = () => {
        if (props.list.length > 0) {
            setCurrent(props.list[0]);
        }
    }

    useEffect(prepareInfo, [props.list])
    return (
        <div className="container">
            {
                current && <div className="row justify-content-md-center" style={{ backgroundColor: 'white', padding: 20 }}>
                    <div className="col-md-5">
                        <Typography variant="h4" className={classes.title}>
                            <b>{current.name}</b>
                        </Typography>
                        <Typography variant="h6" className={classes.position}>
                            {current.position}
                        </Typography>
                    </div>
                    <div className="col-md-5">
                        <p style={{ textAlign: 'justify' }}>{current.comment}</p>
                    </div>
                </div>
            }
            <div className="row">
                {props.list.length > 0 && <div className=" offset-md-6 col-md-6">
                    <div style={{ display: 'inline-flex' }}>
                        <Paper className={classes.pageInfo}>
                            <span className={classes.fontSize20}>{page + '/' + props.list.length}</span>
                        </Paper>
                        {page > 1 && <Paper className={classes.pageInfo} style={{ marginLeft: 5 }}
                            onClick={() => onclickPageHandler(page - 1)}>
                            <ChevronLeft />
                        </Paper>}
                        {page < props.list.length && <Paper className={classes.pageInfo} style={{ marginLeft: 5 }}
                            onClick={() => onclickPageHandler(page + 1)}>
                            <ChevronRight />
                        </Paper>}
                    </div>
                </div>}
            </div>
        </div>
    )
}
Slider.propTypes = { list: PropTypes.array.isRequired }
export default withStyles(styles)(Slider);