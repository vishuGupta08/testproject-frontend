import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.css'


const navigationItems = (props) => {
    return (

        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact active>Home </NavigationItem>
            <NavigationItem link="/state" >State </NavigationItem>
            <NavigationItem link="/district" > District </NavigationItem>
            <NavigationItem link="/children" > Child </NavigationItem>
            <NavigationItem link="/auth" >Login </NavigationItem>
        </ul >
    )
}

export default navigationItems