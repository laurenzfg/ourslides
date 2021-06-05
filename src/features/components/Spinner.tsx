import { CircularProgress, Box } from '@material-ui/core';

export default function Spinner () {
  return (
    <Box justifyContent="center" alignItems="center" display="flex" minHeight="75vh">
      <CircularProgress />
    </Box>
  );
}