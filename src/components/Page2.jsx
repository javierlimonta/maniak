import React, { useState, useEffect } from 'react';
import { withStyles, Typography, Grid, Paper, Slider } from '@material-ui/core';
import { connect } from 'react-redux';
import { blue } from '@material-ui/core/colors';
import classnames from 'classnames';
import * as actionCreators from '../store/actions/index';

const styles = (theme) => ({
    title: {
        maxWidth: 300,
        color: theme.palette.common.white,
        backgroundColor: blue[500],
        textAlign: 'center',
        margin: 30
    },
    PaperText: {
        margin: 30,
        color: blue[500],
        padding: 15, fontSize: 30,
        textAlign: 'center',
        border: '2px solid' + blue[500]
    },
    PaperTextValues: {
        color: blue[800],
        textAlign: 'right',
         fontSize: '3rem'
    }
})
const PageII = props => {
    const { classes, calculator } = props;
    const [monthlyIngredient, setMonthlyIngredient] = useState(10);
    const [employees, setEmployees] = useState(1);
    const [estimatedFoodCostSaving, setEstimatedFoodCostSaving] = useState(0.0);
    const [estimatedAnnualSavings, setEstimatedAnnualSavings] = useState(0.0);

    useEffect(props.getCalculatorInfo, [])

    useEffect(() => {
        if (props.calculator) {
            const estimatedFoodCostSavingValue = monthlyIngredient * 0.3;
            const estimatedAnnualSavingsValue = (employees * 1337) + estimatedFoodCostSavingValue;
            setEstimatedFoodCostSaving(estimatedFoodCostSavingValue);
            setEstimatedAnnualSavings(estimatedAnnualSavingsValue);

        }
    }, [props.calculator,monthlyIngredient, employees])


    return (
        <Grid container justify="left" alignItems="center" spacing={10}>
            <Grid item xs={5}>
                {
                    calculator &&
                    <React.Fragment>
                        <Typography variant="h5" className={classes.title}>
                            {calculator.title}
                        </Typography>
                        <p style={{ textAlign: 'justify', marginLeft: 20 }}>{calculator.description}</p>
                    </React.Fragment>
                }
            </Grid>
            <Grid item xs={6}>
                <Grid container justify="left" alignItems="center" spacing={2}>
                    <Grid item sm={8}>
                        <Typography id="discrete-slider-always" gutterBottom>
                            <b>Monthly ingredient spending</b>
                        </Typography>
                        <Slider
                            defaultValue={10} min={10} max={100} marks={true}
                            aria-labelledby="discrete-slider-always" onChange={(e, value) => setMonthlyIngredient(value)}
                            valueLabelDisplay="auto" value={monthlyIngredient}
                        />
                    </Grid>
                    <Grid item sm={4}>
                        <Paper className={classes.PaperText}>{monthlyIngredient}</Paper>
                    </Grid>
                </Grid>
                <Grid container justify="left" alignItems="center" spacing={2}>
                    <Grid item sm={8}>
                        <Typography id="employees" gutterBottom>
                            <b>Full-Time Employees that process invoices</b>
                        </Typography>
                        <Slider
                            defaultValue={1} min={1} max={10} marks={true}
                            aria-labelledby="employees" onChange={(e, value) => setEmployees(value)}
                            valueLabelDisplay="auto" value={employees}
                        />
                    </Grid>
                    <Grid item sm={4}>
                        <Paper className={classes.PaperText}>{employees}</Paper>
                    </Grid>
                </Grid>
                <Grid container justify="left" alignItems="center" spacing={2}>
                    <Grid item sm={6}>
                        <label className={classnames(classes.PaperTextValues)}>
                            <label>$</label>  {estimatedFoodCostSaving.toFixed(3)}

                        </label>
                        <label><b>Estimated Food Cost Saving</b></label>
                    </Grid>
                    <Grid item sm={6}>
                        <label className={classnames(classes.PaperTextValues)}>
                            <label>$</label>  {estimatedAnnualSavings.toFixed(3)}

                        </label>
                        <label><b>Your estimated annual savings</b></label>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}

const mapStateToProps = state => {
    return {
        calculator: state.global.calculator
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getCalculatorInfo: () => dispatch(actionCreators.fetchCalculatorHandler()),
    }
};

const connectedSecondPage = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PageII));
export default connectedSecondPage;