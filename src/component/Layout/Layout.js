import React, { Component } from 'react';
import Aux from '../../hoc/auxi'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import classes from './Layout.css'


class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }
    sideDrawerOpenedHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }

        })
    }
    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer

                    open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <footer className={classes.Footer}>Made by Vishu Gupta</footer>
            </Aux>

        )
    }
}



export default Layout;