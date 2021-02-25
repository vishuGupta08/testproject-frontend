import React from 'react'
import classes from './Toolbar.css'

import NavigationItems from '../Navigation Items/NavigationItems'

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
}
export default toolbar