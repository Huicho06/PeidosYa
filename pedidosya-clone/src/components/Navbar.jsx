import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Menu, MenuItem, Select } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo from '../assets/logo.png'; // Ruta del logotipo

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} style={{ padding: '10px 0', borderBottom: '1px solid #e0e0e0' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Sección del logotipo y Enviar a */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="PedidosYa Logo" style={{ height: '40px', marginRight: '10px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '10px' }}>
            <Typography variant="body2" style={{ color: '#333', fontSize: '12px' }}>Enviar a</Typography>
            <Select
              defaultValue="Santa Cruz De La Sierra"
              style={{ fontSize: '14px', fontWeight: 'bold', color: '#333', padding: '0' }}
              IconComponent={ExpandMoreIcon}
              disableUnderline
              variant="standard"
            >
              <MenuItem value="Santa Cruz De La Sierra">Santa Cruz De La Sierra</MenuItem>
              {/* Agrega más opciones de ubicación si es necesario */}
            </Select>
          </div>
        </div>

        {/* Barra de búsqueda centrada */}
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f1f1f1', borderRadius: '4px', padding: '5px', width: '40%' }}>
          <InputBase placeholder="Buscar locales" inputProps={{ 'aria-label': 'search' }} style={{ flexGrow: 1, padding: '5px' }} />
          <IconButton>
            <SearchIcon style={{ color: '#e00047' }} />
          </IconButton>
        </div>

        {/* Sección de perfil con menú desplegable */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={handleMenuOpen}>
            <PersonIcon />
          </IconButton>
          <Typography variant="body1" style={{ marginLeft: '5px', cursor: 'pointer' }} onClick={handleMenuOpen}>
            Mi Perfil
          </Typography>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Ayuda en línea</MenuItem>
            <MenuItem onClick={handleMenuClose}>Iniciar sesión</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
