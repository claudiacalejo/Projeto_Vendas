import './extrasList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import Alert from '@mui/material/Alert';
import React from 'react'
import Snackbar from '@mui/material/Snackbar';

const ExtrasList = () => {

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
      window.location.reaload()
      return;
    }  setErro(false);
  };

  // Function for the delete icon to delete the data in the database
  function handleDelete(id_extras){
    axios.delete(`http://127.0.0.1:5000/extras/delete_extras`, {data: {'id_extras' : id_extras}})
      .then (res =>  setOpen(true),setOpen(false))
      .catch(err => setErro(true),setErro(false));
  }

  //Columns
  const columns = [
    {field: 'nome_extras', headerName: 'Nome extras', width: 350 },
    {field: 'preco_extras', headerName: 'Preco Extra', width: 350,
    valueFormatter: (params) => {
      return `${params.value} €`;
    }},
    {field: 'action', headerName: 'Action', width: 250, renderCell:(params)=>{
      return(
        <>
          <Link to={"/Ver%20Extras/"+params.row.id_extras}>
            <button className='userListEdit'>Ver</button> 
          </Link>
          <DeleteOutline className='userListDelete' onClick={() => handleDelete(params.row.id_extras)}/>
        </>
      )
    }},
  ];

  useEffect(() => {
    fetch("http://127.0.0.1:5000/extras/ver_extras_todos")
    .then(resp => resp.json())
    .then(resp =>{
      setData(resp)})
  },[])

  return (
    <div style={{ height: 650, width: '97%' }} className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        getRowId={row => row.id_extras}
      />
 
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Extra apagado com sucesso!
        </Alert>
      </Snackbar>

      <Snackbar open={erro} autoHideDuration={6000} onClose={handleClose}anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}>
        <Alert onClose={handleCloseErro} severity="error" sx={{ width: '100%' }}>
          Existem encomendas ativas para este extra!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ExtrasList