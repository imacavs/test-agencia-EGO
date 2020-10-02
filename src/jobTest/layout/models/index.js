import React, { useState, useEffect } from 'react';
import axios from 'axios';

import useStyles from './styles';
import Filtrado from '../filteredOut';
import SimpleMenu from '../../components/organizedButton/OrganizedButton';

const Models = () => {
  const [models, setModels] = useState([]);
  const [filter, setFilter] = useState(null);
  const [sorter, setSorter] = useState({});
  const classes = useStyles();

  useEffect(() => {
    axios
      //pedido a una api
      .get('https://challenge.agenciaego.tech/models')
      //me trae como respuesta
      .then((respuesta) => {
        // console.log('respuesta', respuesta.data);
        setModels(respuesta.data);
        console.log(respuesta.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!models.length) return <div style={{ height: '100%' }}>Cargando...</div>;

  const test = () => {
    let modelsWithFilters = filter ? models.filter((model) => model.segment === filter) : models;

    if (sorter.key) {
      if (sorter.from === 'low') modelsWithFilters = modelsWithFilters.sort((a, b) => a[sorter.key] < b[sorter.key] ? -1 : 1);
      else modelsWithFilters = modelsWithFilters.sort((a, b) => a[sorter.key] > b[sorter.key] ? -1 : 1);
    }

    return modelsWithFilters;
  };

  return (
    <div className={classes.containerGeneral}>
      <h1 className={classes.title}>Descubrí Todos Los Modelos</h1>
      <div className={classes.containerFiltrado}>
        <Filtrado setFilter={setFilter} />
        <SimpleMenu setSorter={setSorter} />
      </div>
      <hr className={classes.hr} />
      <div className={classes.container2}>
        {models.length
          && test().map((vehiculo) => (
            <div
              key={vehiculo.id}
              onClick={() => {
                console.log(vehiculo);
              }}
              className={classes.container}
            >
              <h1 className={classes.texto}>{vehiculo.name}</h1>
              <p className={classes.p}>
                {vehiculo.year} | $ {vehiculo.price}
              </p>
              <img
                alt={vehiculo.name}
                src={`https://challenge.agenciaego.tech${vehiculo.photo}`}
                className={classes.img}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Models;