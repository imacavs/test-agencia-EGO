import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useStyles from './styles';

const FichaDelVehiculo = () => {
  const [fichaVehiculo, setFichaVehiculo] = useState({});
  const classes = useStyles();

  useEffect(() => {
    axios
      //pedido a una api
      .get('https://challenge.agenciaego.tech/models/6')
      //me trae como respuesta
      .then((respuesta) => {
        // console.log('respuesta', respuesta.data);
        setFichaVehiculo(respuesta.data);
        console.log(respuesta.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={classes.containerGeneral}>
      <div
        style={{
          display: 'flex',
          height: 300,
          alignItems: 'center',
        }}
      >
        <div style={{ flex: 1, height: 40 }}>
          <img
            src={`https://challenge.agenciaego.tech${fichaVehiculo.photo}`}
            alt="Paris"
            className={classes.img}
          />
        </div>
        <div
          style={{
            flex: 1,
            height: 40,
            width: '10px',
            textAlign: 'left',
          }}
        >
          <h1>{fichaVehiculo.name}</h1>
          <h1>Preparada Para Cualquier Desafio</h1>
          <p>{fichaVehiculo.description}</p>
        </div>
      </div>
      <div style={{ padding: '0px 150px' }}>
        <div
          style={{
            display: 'flex',
            height: 250,
            alignItems: 'center',
          }}
        >
          <div style={{ flex: 1, height: 40 }}>
            <h1>{fichaVehiculo.title}</h1>
            <p>{fichaVehiculo.description}</p>
          </div>
          <div style={{ flex: 1, height: 40 }}>
            <img
              src={`https://challenge.agenciaego.tech${fichaVehiculo.photo}`}
              alt="Paris"
              className={classes.img}
            />
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            height: 300,
            alignItems: 'center',
          }}
        >
          <div style={{ flex: 1, height: 40 }}>
            <img
              src={`https://challenge.agenciaego.tech${fichaVehiculo.photo}`}
              alt="Paris"
              className={classes.img}
            />
          </div>
          <div
            style={{
              flex: 1,
              width: '10px',
              textAlign: 'left',
            }}
          >
            <h1>{fichaVehiculo.name}</h1>
            <h1>Preparada Para Cualquier Desafio</h1>
            <p>{fichaVehiculo.description}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FichaDelVehiculo;