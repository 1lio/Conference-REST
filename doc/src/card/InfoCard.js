import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useStyles from "./CardStyle"
import Grid from "@material-ui/core/Grid";

export default function DrawerS() {

    const classes = useStyles();

    return (
        <Card className={classes.card} style={{marginBottom: "8.px"}}>
            <CardContent>

                <Grid container spacing={2}>

                    <Grid item xs={0}>

                        <Typography variant="h5" component="h2" style={{
                            color: "green",
                            fontWeight: "bold",
                            fontSize: "26.px",
                        }}>
                            <b>GET</b>
                        </Typography>

                    </Grid>

                    <Grid item xs={9}>
                        <Typography variant="h5" component="h2">
                            /events/list
                        </Typography>
                    </Grid>

                </Grid>

                <Typography className={classes.pos} color="textSecondary">
                    Description
                </Typography>

            </CardContent>
        </Card>
    );
}
