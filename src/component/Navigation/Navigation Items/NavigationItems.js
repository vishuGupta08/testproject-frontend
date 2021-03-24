import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.css'
import { connect } from 'react-redux'

const navigationItems = (props) => {
    return (

        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact active>Home </NavigationItem>
            <NavigationItem link="/state" >State </NavigationItem>
            <NavigationItem link="/district" > District </NavigationItem>
            <NavigationItem link="/children" > Child </NavigationItem>


            { !sessionStorage.getItem('token') ? <NavigationItem link="/auth" >Login </NavigationItem> : <NavigationItem link="/logout" >Logout </NavigationItem>}
        </ul >
    )
}

const mapStateToProps = state => {
    return { isLoggedIn: state.isLoggedIn };
};

export default connect(mapStateToProps)(navigationItems)