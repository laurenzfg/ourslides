import { Typography, Box, Paper, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1,0,1,0),
  }
}));

export default function LegalPage() {
  const classes = useStyles();

  return (
    <Box mt="3vh">
      <Paper>
        <Typography variant="h3" gutterBottom>
          Privacy Policy, Imprint and Terms of Service
        </Typography>
        <Typography variant="body1" gutterBottom>
          This webpage is a toy project of <a href="https://laurenzgrote.de">Laurenz Grote</a>.
          Please do not use this web page for anything serious.
          I offer you this service free of charge, but without any guarantee for future availability
          or confidentiality of your data.
          If you choose use this service, you agree that you must not hold me liable if your presentation
          data is leaked to any third party.
          In the privacy policy, I give you an overview of how I intend to process your data.

          First things first: If you have any questions regarding data processing or wish
          for data deletion, please reach out to me via email: laurenzfg@laurenzgrote.de.
          If you wish to get in touch with me by phone: +49 15678 746826.
        </Typography>
        <Typography variant="h3" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body1" gutterBottom>
          This web app is offered by Laurenz Grote, who is solely responsible for any data processing.
          You can contact me by mail and phone as listed above.

          Whenever you use this website, some data is processed and stored eternally.
          Most importantly, I save a detailed log of any usage of this web page. This log includes the time and the precise usage patterns (Which buttons were focused at which time etc.).
          This data is saved and processed as a means of feedback and to improve the web app.
          If you choose to log in to the web app, this log is connected to your name.
          The logs are processed and saved by my partner LogRocket.

          If you choose to log in to the app via Facebook or Google, data is shared between me and Facebook or, respectively, Google. I am provided with your name and your email address. I provide to Facebook or, respectively, Google, the fact that you signed up for my service. Facebook or, respectively, Google is aware of any time you press the Log in With [Facebook / Google] and might process this data in accordance with their Terms of Service you agreed to when you signed up for an account with them.
          A database of your user details is stored with Amazon Web Services.

          The data generated while you use your app, presentation details and the communications between you and your co-presenters, is stored and processed by my servers and servers managed by Amazon Web Services. The data is immediately deleted whenever you delete the presentation in the web app. Nonetheless, I might still hold some data about your presentation as part of my logs (see second paragraph). If you wish to exercise your right for a complete deletion of your record, please drop me an email.

      </Typography>
      <Button href="/" variant="contained" color="primary" className={classes.button}>Return Home</Button>
      </Paper>
    </Box>
  );
}
