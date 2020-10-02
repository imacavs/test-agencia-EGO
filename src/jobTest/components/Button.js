import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function Boton({ nombre }) {
  const classes = useStyles();

  return (
    <Button
      size="small"
      className={classes.margin}
    >
      {nombre}
    </Button>
  );
}
