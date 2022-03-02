import './encomendaList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import Alert from '@mui/material/Alert';
import React from 'react'
import Snackbar from '@mui/material/Snackbar';

const EncomendaList = () => {

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
  function handleDelete(id_encomendas){
    axios.delete(`http://127.0.0.1:5000/encomendas/delete_encomenda`, {data: {'id_encomendas' : id_encomendas}})
      .then (res =>  setOpen(true), setOpen(false))
      .catch(err => setErro(true), setErro(false));
  }

  //Columns
  const columns = [
    {field: 'id_encomendas', headerName: 'Número Encomenda', width: 120 },
    {field: 'nome_cliente', headerName: 'Nome Cliente', width: 250},
    {field: 'produtos', headerName: 'Produtos', width: 250},
    {field: 'data_entrega', headerName: 'Data entrega', width: 150 },
    {field: 'preco', headerName: 'Preço', width: 110},
    {field: 'observacoes', headerName: 'Observações', width: 110},
    {field: 'status', headerName: 'Status', width: 90},
    {field: 'action', headerName: 'Action', width: 100, renderCell:(params)=>{
      return(
        <>
          <Link to={"/Ver%20Encomenda/"+params.row.id_encomenda}>
            <button className='userListEdit'>Ver</button> 
          </Link>
          <DeleteOutline className='userListDelete' onClick={() => handleDelete(params.row.id_encomendas)}/>
        </>
      )
    }},
  ];

  useEffect(() => {
    fetch("http://127.0.0.1:5000/encomendas/ver_encomendas_todas")
    .then(resp => resp.json())
    .then(resp =>{
      setData(resp)})
  },[])

  return (
    <div style={{height: 650, width: '98%' }} className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        getRowId={row => row.id_encomendas}
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

export default EncomendaList