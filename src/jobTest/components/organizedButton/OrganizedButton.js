import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import makeStyles from './styles';

export default function SimpleMenu({ setSorter }) {
  const classes = makeStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.General}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Ordenar por
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => setSorter({})}>nada</MenuItem>
        <MenuItem onClick={() => setSorter({ key: 'price', from: 'low' })}>
          De menor a mayor precio
        </MenuItem>
        <MenuItem onClick={() => setSorter({ key: 'price', from: 'hight' })}>
          De mayor a menor precio
        </MenuItem>
        <MenuItem onClick={() => setSorter({ key: 'year', from: 'hight' })}>
          Más nuevos primero
        </MenuItem>
        <MenuItem onClick={() => setSorter({ key: 'year', from: 'low' })}>
          Más viejos primero
        </MenuItem>
      </Menu>
    </div>
  );
}
