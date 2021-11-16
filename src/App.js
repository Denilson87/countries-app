import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextField from './components/TextField';
import Button from './components/Button';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" > 
      <h1>Pesquise pelo pais!</h1>    
      <TextField/>
      <Button></Button>     
      </Container>
      <Container maxWidth="lg" > 
      <h1>Pesquise pelo pais!</h1>    
      <TextField/>
      <Button></Button>     
      </Container> <Container maxWidth="lg" > 
      <h1>Pesquise pelo pais!</h1>    
      <TextField/>
      <Button></Button>     
      </Container>
    </React.Fragment>
  );
}
