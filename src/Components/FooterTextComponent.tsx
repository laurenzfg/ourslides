import { Link, Typography } from "@material-ui/core";
import React from "react";

export default function FooterTextComponent() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://laurenzgrote.de/">
          Laurenz Grote
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }