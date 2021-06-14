import { Typography, Box, Paper, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1,0,1,0),
  }
}));

export default function NotFoundPage() {
  const classes = useStyles();

  return (
    <Box mt="3vh">
      <Paper>
        <Typography variant="h3" gutterBottom>
          404: There's nothing here!
        </Typography>
      <Button href="/" variant="contained" color="primary" className={classes.button}>Return Home</Button>
      </Paper>
    </Box>
  );
}
