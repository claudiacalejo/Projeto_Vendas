import "./newEncomenda.css"
import { useState } from "react";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import HomeIcon from '@mui/icons-material/Home';
import RoomIcon from '@mui/icons-material/Room';
import { PhoneAndroid} from '@material-ui/icons';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';

export default function Nova_Encomenda() {
    const [open, setOpen] = useState(false);
    const [erro, setErro] = useState(false);
    const [data, setData] = useState([]);

    const [id_cliente, setId_cliente] = useState("");
    const [data_encomenda, setData_encomenda] = useState("");
    const [data_entrega, setData_entrega] = useState("");
    const [hora_entrega, setHora_entrega] = useState("");
    const [metodo_entrega, setMetodo_entrega] = useState("");
    const [estado, setEstado] = useState("");
    const [observacoes, setObservacoes] = useState("");

     //Automate the closing of delete confirmation popups
     const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }  
        window.location.reload();
        setOpen(false);
    };

  //Automate the closing of error popups
    const handleCloseErro = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        } 
        window.location.reload();
        setErro(false);
    };
      function criarEncomenda(event) {
        event.preventDefault()
        let data = {
            "id_cliente": id_cliente,
            "data_encomenda": data_encomenda,
            "data_entrega": data_entrega,
            "hora_entrega" : hora_entrega,
            "metodo_entrega": metodo_entrega,
            "estado" : estado,
            "observacoes": observacoes
        }
        fetch(`http://127.0.0.1:5000/encomendas/criar_encomenda`, {
            method : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(data)
        }) .then (res =>  setOpen(true))
        .catch(err => setErro(true));
      }

  return (
    <div className="user">
        <div className="userUpdate">
            <form action="" className="userUpdateForm">
                <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < PersonIcon className="userShowIcon"/>  
                            <label> Nome </label>
                        </div>
                        <input type="text" className="userUpdateInp" placeholder="Nome" onChange={(e) =>{setMetodo_entrega(e.target.value)}}/>
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < HomeIcon className="userShowIcon"/>  
                            <label> Morada </label>
                        </div>
                        <input type="text" className="userUpdateInp" placeholder="Morada" onChange={(e) =>{setData_encomenda(e.target.value)}} />
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < LocalPostOfficeIcon className="userShowIcon"/>  
                            <label> Código Postal </label>
                        </div>
                        <input type="text" className="userUpdateInp" placeholder="Código Postal" onChange={(e) =>{setEstado(e.target.value)}} />
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < RoomIcon className="userShowIcon"/>  
                            <label> Localidade </label>
                        </div>
                        <input type="text" className="userUpdateInp" placeholder="Localidade" onChange={(e) =>{setData_entrega(e.target.value)}} />
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < PhoneAndroid className="userShowIcon"/>  
                            <label> Telefone </label>
                        </div>
                        <input type="text" className="userUpdateInp" placeholder="Telefone" onChange={(e) =>{setHora_entrega(e.target.value)}} />
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < InstagramIcon className="userShowIcon"/>  
                            <label> Instagram </label>
                        </div>
                        <input type="text" className="userUpdateInp" placeholder="Instagram" onChange={(e) =>{setObservacoes(e.target.value)}} />
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < EmailIcon className="userShowIcon"/>  
                            <label> Email </label>
                        </div>
                        <input type="text" className="userUpdateInp" placeholder="Email" onChange={(e) =>{setObservacoes(e.target.value)}} />
                    </div>
                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <input type="file" id="file" style={{display: "none"}}/>
                    </div>
                    <button className="userUpdateButton" onClick={criarEncomenda}>Nova Encomenda</button>
                </div>
            </form>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                     Cliente adicionado com sucesso!
                 </Alert>
            </Snackbar>

            <Snackbar open={erro} autoHideDuration={6000} onClose={handleCloseErro}anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}>
                <Alert onClose={handleCloseErro} severity="error" sx={{ width: '100%' }}>
                    Ocorreu algum erro ao adicionar uma nova encomenda!
                </Alert>
            </Snackbar>
        </div>
    </div>
    )
}
