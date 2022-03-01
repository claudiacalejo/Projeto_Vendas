import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import Alert from '@mui/material/Alert';
import React from 'react'
import Snackbar from '@mui/material/Snackbar';

const UserList = () => {

 //Creating the state
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [erro, setErro] = useState(false);

  //Automate the closing of delete confirmation popups
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      window.location.reaload()
      return;
    }  setOpen(false);
  };

  //Automate the closing of error popups
  const handleCloseErro = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }  setErro(false);
  };

  // Function for the delete icon to delete the data in the database
  function handleDelete(id_cliente){
    axios.delete(`http://127.0.0.1:5000/clientes/delete_cliente`, {data: {'id_cliente' : id_cliente}})
      .then (res =>  setOpen(true))
      .catch(err => setErro(true));
  }

  //Columns
  const columns = [
    {field: 'id_cliente', headerName: 'Número Cliente', width: 120 },
    {field: 'nome_cliente', headerName: 'Nome', width: 250},
    {field: 'morada_cliente', headerName: 'Morada', width: 150 },
    {field: 'codigo_postal', headerName: 'Código Postal', width: 110},
    {field: 'localidade', headerName: 'Localidade', width: 110},
    {field: 'telefone_cliente', headerName: 'Telefone', width: 90},
    {field: 'instagram_cliente', headerName: 'Instagram', width: 120},
    {field: 'email', headerName: 'Email', width: 100},
    {field: 'action', headerName: 'Action', width: 100, renderCell:(params)=>{
      return(
        <>
          <Link to={"/Ver%20Clientes/"+params.row.id_cliente}>
            <button className='userListEdit'>Editar</button> 
          </Link>
          <DeleteOutline className='userListDelete' onClick={() => handleDelete(params.row.id_cliente)}/>
        </>
      )
    }},
  ];

  useEffect(() => {
    fetch("http://127.0.0.1:5000/clientes/ver_clientes_todos")
    .then(resp => resp.json())
    .then(resp =>{
      setData(resp)})
  },[])

  return (
    <div style={{ height: 650, width: '100%' }} className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        getRowId={row => row.id_cliente}
      />
 
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Cliente apagado com sucesso!
        </Alert>
      </Snackbar>

      <Snackbar open={erro} autoHideDuration={6000} onClose={handleClose}anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}>
        <Alert onClose={handleCloseErro} severity="error" sx={{ width: '100%' }}>
          Existem encomendas ativas para este cliente!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default UserList