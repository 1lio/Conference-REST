import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import MenuItemS from "../menu/MenuItemS";
import {NavLink} from "react-router-dom";

export default function ListItemS(props) {

    let name = props.name;
    let map = props.map;
    let kes = props.kes;

    const [open, setOpen] = React.useState(true);
    const handleClick = () => setOpen(!open);

    return (
        <div>
            <ListItem button onClick={handleClick}>
                <ListItemText primary={name} disableTypography={true} style={{fontWeight: "bold"}}/>
                {open ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>

            <Collapse in={!open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        map.map((currentValue, index) => (<MenuItemS name={currentValue} type={kes[index]}/>))
                    }
                </List>
            </Collapse>
        </div>
    );

}