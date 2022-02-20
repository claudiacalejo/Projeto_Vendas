import './produtos.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../../data';
import { Link } from "react-router-dom";
import { useState} from "react"


export default function Produtos() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item)=> item.id !== id));
  }
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130, renderCell:(params)=>{
      return(
        <div className="userListUser">
          <img src={params.row.avatar} alt="" className='userListImg'/>
          {params.row.firstName}
        </div>
      )
    } },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {field: 'age', headerName: 'Age', type: 'number', width: 90},
    {field: 'action', headerName: 'Action', width: 160, renderCell:(params)=>{
      return(
        <>
          <Link to={"/Ver%20Clientes/"+params.row.id}>
            <button className='userListEdit'>Edit</button> 
          </Link>
          <DeleteOutline className='userListDelete' onClick={()=>handleDelete(params.row.id)}/>
        </>
      )
    }},
  ];
    return (
      <div style={{ height: 650, width: '100%' }} className="userList">
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={9}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    );
  }