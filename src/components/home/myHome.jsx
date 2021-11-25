import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
      <section className="home"></section>
      </Container>
    </React.Fragment>
  );
}