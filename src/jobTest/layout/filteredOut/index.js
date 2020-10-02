import React from 'react';
import { Button } from '@material-ui/core';
import useStyles from './styles';

const Filtrado = ({ setFilter }) => {

  const classes = useStyles();

  return (
    <div className={classes.general}>
      <p className={classes.textFilter}>Filtrar por</p>
      <div>
        <Button onClick={() => setFilter(null)}>Todos</Button>
        <Button onClick={() => setFilter('Autos')}>Autos</Button>
        <Button onClick={() => setFilter('Pickups y Comerciales')}>
          Pickups y Comerciales
        </Button>
        <Button onClick={() => setFilter('SUVs y Crossovers')}>
          SUVs y Crossovers
        </Button>
      </div>
    </div>
  );
};

export default Filtrado;