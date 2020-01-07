import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },

    toolbar: theme.mixins.toolbar
}));


export default function HeaderS() {

    const s = useStyles();

    return (
        <AppBar position="fixed" className={s.appBar}>
            <Toolbar>
                <Typography variant="h6" noWrap>
                    API: Conference
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
