import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import Logo from './images/logo.svg';

export default function MenuDeNavegacion() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 35,
        paddingTop: 8,
      }}
    >
      <Avatar alt="Remy Sharp" src={Logo} style={{ marginRight: 77 }} />
      <Tabs
        value={value}
        style={{ color: 'red' }}
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab component={Link} to="/" label="Modelos" />
        <Tab component={Link} to="/ficha" label="Ficha de modelo" />
      </Tabs>
    </AppBar>
  );
}
