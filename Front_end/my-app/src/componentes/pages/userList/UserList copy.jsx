import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userrows } from '../../../data';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"

const UserList = () => {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    setData(data.filter((item)=> item.id !== id));
  }

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
            <button className='userListEdit'>Edit</button> 
          </Link>
          <DeleteOutline className='userListDelete' onClick={()=>handleDelete(params.row.id)}/>
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

  console.log(data)
  
  return (
    <div style={{ height: 650, width: '100%' }} className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        getRowId={row => row.id_cliente}
        
        //checkboxSelection
      />
    </div>
  );
}

export default UserList