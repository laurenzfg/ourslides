import { Button, Card, CardContent, CardActions, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@reach/router'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 12,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  }
});


export default function PresentationCard () {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Example Presentation
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          laurenz@laurenzgrote.de
        </Typography>
        <Typography variant="body2" component="p">
          Some crazy good presentation since it uses ourslides!
        </Typography>
        <Typography variant="body2" component="p">
          Presentation ID: 123456
        </Typography>
        <Typography variant="body2" component="p">
          Access Code: wagahagakaka
        </Typography>
      </CardContent>
      <CardActions>
        <Link className={classes.link} to="/presentation/123456">
          <Button variant="outlined" color="primary" size="small">Join Presentation</Button>
        </Link>
        <Link className={classes.link} to="/edit/123456">
          <Button size="small">Change Settings</Button>
        </Link>
      </CardActions>
    </Card>
  );

}