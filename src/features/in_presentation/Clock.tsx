import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
}));

export default function Clock() {
  const classes = useStyles();

  return (
    <>
      <Paper>
        <Typography variant="h4">
          Clock
        </Typography>
      </Paper>
    </>
  );
}
