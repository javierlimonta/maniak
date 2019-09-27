import React from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index';
const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
})
class Header extends React.Component {
    state = { menuItems: [] }

    setMenuItems = () => {
        if (this.props.global.menu.items)
            this.setState({ menuItems: this.props.global.menu.items });
    }

    openPage = route => this.props.history.push(route);

    componentDidMount() {
        this.props.getMenu();
    }

    componentDidUpdate(nextProps) {
        if (this.props.global.menu !== nextProps.global.menu) {
            this.setMenuItems();
        }
    }

    render() {
        const { classes } = this.props;
        const { menuItems } = this.state;
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Bellotero.io
                    </Typography>
                    {
                        menuItems.map((item, key) => {
                            return (
                                <Button color="inherit" key={key} disabled={item.route === "#"}
                                    style={{ border: '/' + item.route === this.props.location.pathname ? '1px solid white' : "" }}
                                    onClick={() => this.openPage(item.route)}>
                                    {item.text}
                                </Button>
                            )
                        })
                    }

                </Toolbar>
            </AppBar>
        )
    }
}

const mapStateToProps = state => {
    return {
        global: state.global
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getMenu: () => dispatch(actionCreators.fetchMenuHandler()),
    }
};
const connectedHeaderApp = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(Header)));
export default connectedHeaderApp;