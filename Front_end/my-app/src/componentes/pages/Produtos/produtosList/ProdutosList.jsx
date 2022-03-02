import './produtosList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import Alert from '@mui/material/Alert';
import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import EuroIcon from '@mui/icons-material/Euro';

const Lista_Produtos = () => {

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
  function handleDelete(id_produtos){
    axios.delete(`http://127.0.0.1:5000/produtos/delete_produto`, {data: {'id_produtos' : id_produtos}})
      .then (res =>  setOpen(true))
      .catch(err => setErro(true));
  }

  //Columns
  const columns = [
    {field: 'id_produtos', headerName: 'Nº Produto', width: 120 },
    {field: 'nome_produto', headerName: 'Nome', width: 200},
    {field: 'massa', headerName: 'Massa', width: 150 },
    {field: 'recheio', headerName: 'Recheio', width: 150},
    {field: 'tamanho', headerName: 'Tamanho', width: 110},
    {field: 'preco_custo', headerName: 'Preço de custo', width: 120,
      valueFormatter: (params) => {
        return `${params.value} €`;
      }},
    {field: 'preco_venda', headerName: 'Preço de venda', width: 120,
      valueFormatter: (params) => {
        return `${params.value} €`;
      }},
    {field: 'action', headerName: 'Action', width: 100, renderCell:(params)=>{
      return(
        <>
          <Link to={"/Ver%20Produtos/"+params.row.id_produtos}>
            <button className='produtosListEdit'>Ver</button> 
          </Link>
          <DeleteOutline className='produtosListDelete' onClick={() => handleDelete(params.row.id_produtos)}/>
        </>
      )
    }},
  ];

  useEffect(() => {
    fetch("http://127.0.0.1:5000/produtos/ver_produtos_todos")
    .then(resp => resp.json())
    .then(resp =>{
      setData(resp)})
  },[])

  return (
    <div style={{ height: 650, width: '98%' }} className="produtosList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        getRowId={row => row.id_produtos}
      />
 
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Produto apagado com sucesso!
        </Alert>
      </Snackbar>

      <Snackbar open={erro} autoHideDuration={6000} onClose={handleClose}anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}>
        <Alert onClose={handleCloseErro} severity="error" sx={{ width: '100%' }}>
          Existem encomendas ativas para este produto!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Lista_Produtos