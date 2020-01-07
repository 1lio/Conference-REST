import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";

class MenuItemS extends React.Component {

    render() {

        let name = this.props.name;
        let type = this.props.type;

        let color;
        switch (type) {
            case "GET":
                color = "rgb(102,205,45)";
                break;
            case "POST":
                color = "rgb(94, 152, 205)";
                break;
            case "PUT":
                color = "rgb(255,165,0)";
                break;
            case "DELETE":
                color = "rgb(205,9,40)";
                break;
            default:
                color = "rgba(42,52,88,0.66)";
                break;
        }

        return (
                <ListItem button style={{paddingLeft: "32px"}}>
                    <Grid container spacing={2}>
                        <Grid item xs={9}>
                            <ListItemText col disableTypography={true}
                                          primary={name}
                                          style={{
                                              fontSize: "12.px",
                                          }}/>
                        </Grid>

                        <Grid item xs={1}>
                            <ListItemText col disableTypography={true}
                                          primary={type}
                                          style={{
                                              color: color,
                                              fontWeight: "bold",
                                              fontSize: "10.px",
                                              position: "absolute",
                                              right: "16px"
                                          }}/>
                        </Grid>
                    </Grid>
                </ListItem>
        );

    }

}

export default MenuItemS