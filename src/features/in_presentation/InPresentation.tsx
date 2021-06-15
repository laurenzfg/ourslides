import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import { RouteComponentProps, useNavigate } from "@reach/router";
import { Auth } from "aws-amplify";
import Clock from "./Clock";
import React from "react";
import SharedPres from "./SharedPres";
import Emojicomms from "./Emojicomms";
import { useAppSelector } from "../../app/hooks";
import { AuthStates } from "../auth/userSlice";

// TODO Not Found

interface InPresentationProps extends RouteComponentProps {
  presentationId?: string;
}

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: 12,
    marginBottom: 12,
    color: theme.palette.grey[800],
  },
  signOutButton: {
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
  subTool: {
    marginBottom: theme.spacing(2),
  },
}));

// TODO handler for bullshit presnetation id

export default function InPresentation(props: InPresentationProps) {
  const classes = useStyles();
  const navigate = useNavigate();
  const authState = useAppSelector((state) => state.user.state);
  const pres_id = props.presentationId || "O";

  return (
    <>
      <Typography variant="h3" component="h2" className={classes.title}>
        Presentation {pres_id}!
      </Typography>
      <div className={classes.subTool}>
        <Clock />
      </div>
      <div className={classes.subTool}>
        <SharedPres />
      </div>
      <div className={classes.subTool}>
        <Emojicomms />
      </div>
      {authState == AuthStates.USER && (
        <Button
          variant="contained"
          onClick={() => {
            navigate("/");
          }}
          className={classes.signOutButton}
        >
          Back To Dashboard
        </Button>
      )}
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
