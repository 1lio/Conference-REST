import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import InfoCard from "./card/InfoCard";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useStyles from "./app/AppStyle";

export const useRoutes = () => {

    const classes = useStyles();

    return (
        <Switch>
            <Route path="/:link" exact>
                <InfoCard/>

                <Card className={classes.card}>
                    <CardContent>

                        <Typography variant="h5" component="h2">
                            <b>Request Parameters</b>
                        </Typography>

                        <Typography className={classes.pos} color="textSecondary">
                            none
                        </Typography>

                    </CardContent>
                </Card>

                <Card className={classes.card} style={{marginTop: "8.px"}}>
                    <CardContent>

                        <Typography variant="h5" component="h2">
                            <b>Responses</b>
                        </Typography>

                        <Typography className={classes.pos} color="textSecondary">
                            200
                        </Typography>

                        <Typography className={classes.pos} color="textSecondary">
                            Schema
                        </Typography>

                    </CardContent>
                </Card>

                <Card className={classes.card} style={{marginTop: "8.px"}}>
                    <CardContent>

                        <Typography variant="h5" component="h2">
                            <b>Model</b>
                        </Typography>

                        <Typography className={classes.pos} color="textSecondary">
                            Event
                        </Typography>

                    </CardContent>
                </Card>
            </Route>

            <Route path="/model/:model">
                <div>
                    <Card className={classes.card} style={{marginTop: "8.px"}}>
                        <CardContent>

                            <Typography variant="h5" component="h2">
                                <b>Model</b>
                            </Typography>

                            <Typography className={classes.pos} color="textSecondary">
                                Event
                            </Typography>

                        </CardContent>
                    </Card>
                </div>
            </Route>

            <Redirect to="/info"/>

        </Switch>
    )
};