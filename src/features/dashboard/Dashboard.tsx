import { makeStyles } from '@material-ui/core/styles';
import { Auth } from 'aws-amplify';
import { useAppSelector } from '../../app/hooks';

const useStyles = makeStyles((theme) => ({

}));

export default function Dashboard () {
  const classes = useStyles();

  const givenName = useAppSelector((state) => state.user.given_name);

  return (
    <>
      <p>Hello {givenName}</p>

      <button onClick={() => Auth.signOut()}>Sign Out</button>
    </>
  );
}
