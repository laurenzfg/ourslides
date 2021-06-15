import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
}));

export default function SharedPres() {
  const classes = useStyles();

  return (
    <>
      <Paper>
        <Typography variant="h4">
          SharedPres
        </Typography>
      </Paper>
    </>
  );
}
