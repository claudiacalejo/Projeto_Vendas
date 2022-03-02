import "./newUser.css"
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

export default function New_User() {
    const [open, setOpen] = useState(false);
    const [erro, setErro] = useState(false);
    const [data, setData] = useState([]);
    const [nome_cliente, setNome_cliente] = useState("");
    const [morada_cliente, setMorada_cliente] = useState("");
    const [codigo_postal, setCodigo_postal] = useState("");
    const [localidade, setLocalidade] = useState("");
    const [telefone_cliente, setTelefone] = useState("");
    const [instagram_cliente, setInstagram] = useState("");
    const [email, setEmail] = useState("");

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

      function criarUser() {
        let data = {
            "nome_cliente": nome_cliente,
            "morada_cliente": morada_cliente,
            "codigo_postal": codigo_postal,
            "localidade" : localidade,
            "telefone_cliente": telefone_cliente,
            "instagram_cliente" : instagram_cliente,
            "email": email
        }
        fetch(`http://127.0.0.1:5000/clientes/criar_cliente`, {
            method : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(data)
        }) .then (res =>  setOpen(true), setOpen(false))
        .catch(err => setErro(true), setErro(false));
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
                        <input type="text" className="userUpdateInp" placeholder="Nome" onChange={(e) =>{setNome_cliente(e.target.value)}}/>
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < HomeIcon className="userShowIcon"/>  
                            <label> Morada </label>
                        </div>
                        <input type="text" className="userUpdateInp" placeholder="Morada" onChange={(e) =>{setMorada_cliente(e.target.value)}} />
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < LocalPostOfficeIcon className="userShowIcon"/>  
                            <label> Código Postal </label>
                        </div>
                        <input type="text" className="userUpdateInp" placeholder="Código Postal" onChange={(e) =>{setCodigo_postal(e.target.value)}} />
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < RoomIcon className="userShowIcon"/>  
                            <label> Localidade </label>
                        </div>
                        <input type="text" className="userUpdateInp" placeholder="Localidade" onChange={(e) =>{setLocalidade(e.target.value)}} />
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < PhoneAndroid className="userShowIcon"/>  
                            <label> Telefone </label>
                        </div>
                        <input type="text" className="userUpdateInp" placeholder="Telefone" onChange={(e) =>{setTelefone(e.target.value)}} />
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < InstagramIcon className="userShowIcon"/>  
                            <label> Instagram </label>
                        </div>
                        <input type="text" className="userUpdateInp" placeholder="Instagram" onChange={(e) =>{setInstagram(e.target.value)}} />
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < EmailIcon className="userShowIcon"/>  
                            <label> Email </label>
                        </div>
                        <input type="text" className="userUpdateInp" placeholder="Email" onChange={(e) =>{setEmail(e.target.value)}} />
                    </div>
                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <input type="file" id="file" style={{display: "none"}}/>
                    </div>
                    <button className="userUpdateButton" onClick={criarUser}>Novo Cliente</button>
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

            <Snackbar open={erro} autoHideDuration={6000} onClose={handleClose}anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}>
                <Alert onClose={handleCloseErro} severity="error" sx={{ width: '100%' }}>
                    Ocorreu algum erro ao adicionar o cliente!
                </Alert>
            </Snackbar>
        </div>
    </div>
    )
}
