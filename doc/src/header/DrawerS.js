import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import Divider from "@material-ui/core/Divider";
import useStyles from "./DrawerStyle"
import ListItemS from "./ListItemS";

export default function DrawerS() {

    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            disableScrollLock={false}
            classes={{paper: classes.drawerPaper}}
        >
            <div className={classes.toolbar}/>

            <List component="nav" aria-labelledby="nested-list-subheader" key={"list1"}
                  subheader={<ListSubheader component="div" id="nested-list-subheader">API Reference:</ListSubheader>}
                  className={classes.list}>

                <ListItemS
                    name={"/events"}
                    map={["List", "List status", "List rating", "Create event", "Get event", "Update event", "Delete event"]}
                    kes={["GET", "GET", "GET", "POST", "GET", "PUT", "DELETE"]}
                />


                <ListItemS
                    name={"/members"}
                    map={["List", "Create member", "Get member", "Update member", "Delete member"]}
                    kes={["GET", "POST", "GET", "PUT", "DELETE"]}
                />

                <ListItemS
                    name={"/institutes"}
                    map={["List", "Create institute", "Get institute", "Update institute", "Delete institute"]}
                    kes={["GET", "POST", "GET", "PUT", "DELETE"]}
                />

                <ListItemS
                    name={"/statistics"}
                    map={["List", "Events", "Members", "Institutes", "Choice", "Clear statistics"]}
                    kes={["GET", "GET", "GET", "GET", "GET", "DELETE"]}
                />

                <ListItemS
                    name={"/uploads"}
                    map={["Upload File", "Download File"]}
                    kes={["POST", "GET"]}
                />

            </List>

            <Divider/>

            <List component="nav" aria-labelledby="nested-list-subheader"  key={"list2"}
                  subheader={<ListSubheader component="div" id="nested-list-subheader">API Models:</ListSubheader>}
                  className={classes.list}
            >
                <ListItemS
                    name={"Models"}
                    map={["Events", "Member", "Institute", "Statistics"]}
                    kes={["", "", "", ""]}
                />
            </List>

            <Divider/>

        </Drawer>
    );
}
