import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  TextField,
  Box,
  FormHelperText,
} from "@material-ui/core";
import LoopIcon from '@material-ui/icons/Loop';
import { RouteComponentProps, useNavigate } from "@reach/router";
import { Auth } from "aws-amplify";
import React from "react";

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
  formfield: {
    margin: theme.spacing(1),
  },
  signOutButton: {
    marginTop: theme.spacing(1),
    minWidth: "6.5rem",
  },
  formControl: {
    margin: theme.spacing(3),
  },
  saveButton: {
    marginRight: theme.spacing(3),
    minWidth: "6.5rem",
    marginBottom: theme.spacing(1),
  },
  form: {
    marginTop: theme.spacing(3),
  }
}));

export default function PresentationEditor(props: InPresentationProps) {
  const classes = useStyles();
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    shclock: true,
    emojicomms: true,
    shpres: true,
    refaccess: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <form noValidate className={classes.form}>
        <TextField
          id="id"
          label="ID"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
          className={classes.formfield}
          fullWidth
        />
        <TextField
          id="actoken"
          label="Access Token"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
          className={classes.formfield}
          fullWidth
        />
        <TextField
          id="pres"
          label="Presentation Name"
          variant="outlined"
          className={classes.formfield}
          fullWidth
        />
        <TextField
          id="desc"
          label="Description"
          variant="outlined"
          multiline
          className={classes.formfield}
          fullWidth
        />
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" focused={false}>
            {" "}
            Choose Functionalities
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.shclock}
                  onChange={handleChange}
                  name="shclock"
                  color="primary"
                />
              }
              label="Shared Clock"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.emojicomms}
                  onChange={handleChange}
                  name="emojicomms"
                  color="primary"
                />
              }
              label="Communicate By Emoji"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.shpres}
                  onChange={handleChange}
                  name="shpres"
                  color="primary"
                />
              }
              label="Shared Presentation Control"
            />
          </FormGroup>
        </FormControl>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" focused={false}>
            Maintenance
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.refaccess}
                  onChange={handleChange}
                  name="refaccess"
                  color="primary"
                />
              } 
              label="Generate a new Access Token"
            />
          </FormGroup>
          <FormHelperText>
            This invalidates the current token.
          </FormHelperText>
        </FormControl>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/");
          }}
          className={classes.saveButton}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.saveButton}
        >
          Save
        </Button>
      </form>
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
