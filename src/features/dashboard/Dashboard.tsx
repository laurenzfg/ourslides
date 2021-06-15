import { Button, Typography, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { Auth } from "aws-amplify";
import React from "react";
import { useAppSelector } from "../../app/hooks";
import PresentationCard from "./PresentationCard";
import {
  getAllPresentationsSelector,
  Presentation,
} from "./presentationsSlice";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: 12,
    marginBottom: 12,
    color: theme.palette.grey[800],
  },
  signOutButton: {
    marginTop: 6,
  },
  newPresButton: {
    marginTop: 6,
    marginRight: 8,
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  const givenName = useAppSelector((state) => state.user.given_name);
  const presentations = useAppSelector(getAllPresentationsSelector);

  return (
    <>
      <Typography variant="h4" component="h2" className={classes.title}>
        Let's present, {givenName}!
      </Typography>

      {Object.values(presentations).map((pres: Presentation) => {
        return (<PresentationCard presentation={pres} key={pres.pres_id} />);
      })}

      <Button
        variant="contained"
        color="primary"
        className={classes.newPresButton}
      >
        New Presentation
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => Auth.signOut()}
        className={classes.signOutButton}
      >
        Sign Out
      </Button>
    </>
  );
}
