import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Auth } from 'aws-amplify';
import React from 'react';
import { useAppSelector } from '../../app/hooks';
import PresentationCard from './PresentationCard';

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

export default function Dashboard () {
  const classes = useStyles();

  const givenName = useAppSelector((state) => state.user.given_name);

  return (
    <>
      <Typography variant="h4" component="h2" className={classes.title}>
      Let's present, {givenName}!
      </Typography>

      <PresentationCard />
      <PresentationCard />
      <PresentationCard />

      <Button variant="contained" color="secondary" onClick={() => Auth.signOut()} className={classes.signOutButton}>Sign Out</Button>
    </>
  );
}
