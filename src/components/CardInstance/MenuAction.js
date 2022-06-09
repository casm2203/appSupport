import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { blue } from '@mui/material/colors';

const ITEM_HEIGHT = 48;

const MenuAction = ({
  item,
  setDataToEdit,
  deleteData,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  let history = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleEdit = (el) => {
    setDataToEdit(el);
    history(`/agregar`);
  };
  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}

      >
        <MoreVertIcon sx={{ color: blue[900] }} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 2.2,
            width: '15ch',
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <Button
            onClick={() => handleEdit(item)}
            startIcon={<ModeEditIcon color="primary" />}
            size="small"
          >
            <Typography color="primary" component={'span'} sx={{ fontSize: "12px" }}>
              Editar
            </Typography>
          </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button
            onClick={() => deleteData(item.id)}
            aria-label="delete"
            startIcon={<DeleteIcon color="error" />}
          >
            <Typography color="error" component={'span'} sx={{ fontSize: "12px" }}>
              Eliminar
            </Typography>
          </Button>
        </MenuItem>
      </Menu>
    </>
  );
};



export default MenuAction;