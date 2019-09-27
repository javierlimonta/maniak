import React from 'react';
import { connect } from 'react-redux';
import { withStyles, Grid, Typography } from '@material-ui/core';
import {blue} from '@material-ui/core/colors';
import * as actionCreators from '../store/actions/index';
const styles = (theme) => ({
    
    title: {
        maxWidth: 300,
        color: theme.palette.common.white,
        backgroundColor:blue[500],
        textAlign:'center',
        margin:30
    },
})
class PageI extends React.Component {
    state = { title: "", reviews: [] }
    setSliderInfo = () => {
        if (this.props.slider) {
            this.setState({ title: this.props.slider.title, reviews: this.props.slider.reviews })
        }
    }
    componentDidMount() {
        this.props.getSliderInfo();
    }

    componentDidUpdate(nextProps) {
        if (this.props.slider !== nextProps.slider) {
            this.setSliderInfo();
        }
    }
    render() {
        const { title } = this.state;
        const { classes } = this.props;
        return (
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12}>

                    <Typography variant="h5" className={classes.title}>
                        {title}
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}


const mapStateToProps = state => {
    return {
        slider: state.global.slider
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getSliderInfo: () => dispatch(actionCreators.fetchSliderHandler()),
    }
};

const connectedPage = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PageI));
export default connectedPage;