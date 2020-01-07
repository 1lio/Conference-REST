import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import HeaderS from "../header/HeaderS";
import DrawerS from "../header/DrawerS";
import useStyles from './AppStyle';
import {useRoutes} from "../routes";
import {BrowserRouter as Router} from "react-router-dom"

export default function ClippedDrawer() {

    const routs = useRoutes();

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <HeaderS/>
            <DrawerS/>

            <main className={classes.content}>

                <div className={classes.toolbar}/>
                <Router>
                    <div className="container">
                        {routs}
                    </div>
                </Router>
            </main>

        </div>
    );
}