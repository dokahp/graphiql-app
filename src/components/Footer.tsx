import React from 'react';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';

export default function Footer() {
  return (
    <footer>
      <Link
        variant="body1"
        target="a_blank"
        href="https://github.com/dokahp/graphiql-app"
        underline="hover"
        color="--main-text-color"
      >
        GitHub
      </Link>
      <Link variant="body1" target="a_blank" href="https://rs.school/react/">
        <img src="..\src\assets\rss-logo.svg" width={80} alt="school logo" />
      </Link>
      <Typography variant="body1">© 2023 React</Typography>
    </footer>
  );
}
