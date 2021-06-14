import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { RouteComponentProps } from '@reach/router'
import { Auth } from 'aws-amplify';
import React from 'react';

// TODO Not Found

interface InPresentationProps extends RouteComponentProps {
  presentationId? : string
}

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: 12,
    marginBottom: 12,
    color: theme.palette.grey[800],
  },
  signOutButton: {
    marginTop: 6,
  }
}));

export default function PresentationEditor (props: InPresentationProps) {
  const classes = useStyles();
  return (
    <>
    <p>Editing Presentation {props.presentationId || 'O'}</p>
    <Button variant="contained" color="secondary" onClick={() => Auth.signOut()} className={classes.signOutButton}>Sign Out</Button>
    </>
  );
}
