import "./newExtra.css"
import { useState } from "react";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import EuroIcon from '@mui/icons-material/Euro';
import PersonIcon from '@mui/icons-material/Person';


export default function New_Extra() {
    const [open, setOpen] = useState(false);
    const [erro, setErro] = useState(false);
    const [data, setData] = useState([]);
    const [nome_extras, setNome_extras] = useState("");
    const [preco_extras, setPreco_extras] = useState("");

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

      function criarExtra() {
        let data = {
            "nome_extras": nome_extras,
            "preco_extras": preco_extras,
           
        }
        fetch(`http://127.0.0.1:5000/extras/criar_extra`, {
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
                        <input type="text" className="userUpdateInp" placeholder="Nome do extra" onChange={(e) =>{setNome_extras(e.target.value)}}/>
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < EuroIcon color="success" className="userShowIcon"/>  
                            <label> Preço de Venda </label>
                        </div>
                        <input type="text" className="userUpdateInp" placeholder="Preço de venda" onChange={(e) =>{setPreco_extras(e.target.value)}} />
                    </div>
                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <input type="file" id="file" style={{display: "none"}}/>
                    </div>
                    <button className="userUpdateButton" onClick={criarExtra}>Criar Extra</button>
                </div>
            </form>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                     Extra adicionado com sucesso!
                 </Alert>
            </Snackbar>

            <Snackbar open={erro} autoHideDuration={6000} onClose={handleClose}anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}>
                <Alert onClose={handleCloseErro} severity="error" sx={{ width: '100%' }}>
                    Ocorreu algum erro ao adicionar o extra!
                </Alert>
            </Snackbar>
        </div>
    </div>
    )
}
