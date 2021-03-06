import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button type="submit" variant="outlined" color="primary">
        Pesquisar
      </Button>
      <Button type="reset"variant="outlined" color="secondary">
        Cancelar
      </Button>
    </div>
  );
}
