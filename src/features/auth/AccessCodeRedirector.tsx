import { RouteComponentProps, useNavigate } from '@reach/router'
import { useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import Spinner from '../components/Spinner'
import { signInAccesscode } from './userSlice';

interface InPresentationProps extends RouteComponentProps {
  accessCode? : string
}

export default function InPresentation (props: InPresentationProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Sign user in with Access Code and forward them to the appropiate presentation
  useEffect(() => {
    const accode = props.accessCode || ""; // we'll catch later if code is invalid
    dispatch(signInAccesscode(accode));
    navigate("/"); // toss them into the home redirector
  }, []);

  return (
    <Spinner />
  );
}
