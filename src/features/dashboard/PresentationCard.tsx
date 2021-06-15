import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@reach/router";
import { Presentation } from "./presentationsSlice";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 12,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});

export interface PresentationCardProps {
  presentation: Presentation;
}

export default function PresentationCard(props: PresentationCardProps) {
  const classes = useStyles();

  const pres = props.presentation;
  const edit_url = "/edit/" + pres.pres_id;
  const inpres_url = "/presentation/" + pres.pres_id;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {pres.pres_name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {pres.pres_id}
        </Typography>
        <Typography variant="body2" component="p">
          {pres.description}
        </Typography>
        <Typography variant="body2" component="p">
          Access Code: {pres.accode}
        </Typography>
      </CardContent>
      <CardActions>
        <Link className={classes.link} to={inpres_url}>
          <Button variant="outlined" color="primary" size="small">
            Join Presentation
          </Button>
        </Link>
        <Link className={classes.link} to={edit_url}>
          <Button size="small">Change Settings</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
