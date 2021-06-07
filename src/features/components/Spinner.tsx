import { CircularProgress, Box } from '@material-ui/core';

export default function Spinner () {
  return (
    <Box justifyContent="center" alignItems="center" display="flex" mt="40vh">
      <CircularProgress />
    </Box>
  );
}