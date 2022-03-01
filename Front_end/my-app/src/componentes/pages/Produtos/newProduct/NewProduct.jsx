import "./newProduct.css"
import { useState } from "react";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import CakeIcon from '@mui/icons-material/Cake';
import DiningIcon from '@mui/icons-material/Dining';
import IcecreamIcon from '@mui/icons-material/Icecream';
import HeightIcon from '@mui/icons-material/Height';
import EuroIcon from '@mui/icons-material/Euro';

export default function New_Product() {
    const [open, setOpen] = useState(false);
    const [erro, setErro] = useState(false);
    const [data, setData] = useState([]);
    const [nome_produto, setNome_produto] = useState("");
    const [massa, setMassa] = useState("");
    const [recheio, setRecheio] = useState("");
    const [tamanho, setTamanho] = useState("");
    const [preco_custo, setPreco_custo] = useState("");
    const [preco_venda, setPreco_venda] = useState("");

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

      function criarProduto() {
        let data = {
            "nome_produto": nome_produto,
            "massa": massa,
            "recheio": recheio,
            "tamanho" : tamanho,
            "preco_custo": preco_custo,
            "preco_venda" : preco_venda,
        }
        fetch(`http://127.0.0.1:5000/produtos/criar_produto`, {
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
                            < DiningIcon  className="userShowIcon"/>  
                            <label> Nome do Produto </label>
                        </div>
                        <input type="text" className="userUpdateInp" placeholder="Nome" onChange={(e) =>{setNome_produto(e.target.value)}}/>
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < CakeIcon className="userShowIcon"/>  
                            <label> Massa </label>
                        </div>
                        <input type="text" className="userUpdateInp" placeholder="Morada" onChange={(e) =>{setMassa(e.target.value)}} />
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < IcecreamIcon className="userShowIcon"/>  
                            <label> Recheio </label>
                        </div>
                        <input type="text" className="userUpdateInp" placeholder="Código Postal" onChange={(e) =>{setRecheio(e.target.value)}} />
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < HeightIcon className="userShowIcon"/>  
                            <label> Tamanho </label>
                        </div>
                        <input type="text" className="userUpdateInp" placeholder="Localidade" onChange={(e) =>{setTamanho(e.target.value)}} />
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < EuroIcon color="error" className="userShowIcon"/>  
                            <label> Preço de Custo </label>
                        </div>
                        <input type="text" className="userUpdateInp" placeholder="Telefone" onChange={(e) =>{setPreco_custo(e.target.value)}} />
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < EuroIcon color="success" className="userShowIcon"/>  
                            <label> Preço de Venda </label>
                        </div>
                        <input type="text" className="userUpdateInp" placeholder="Instagram" onChange={(e) =>{setPreco_venda(e.target.value)}} />
                    </div>
                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <input type="file" id="file" style={{display: "none"}}/>
                    </div>
                    <button className="userUpdateButton" onClick={criarProduto}>Adicionar Produto</button>
                </div>
            </form>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                     Produto adicionado com sucesso!
                 </Alert>
            </Snackbar>

            <Snackbar open={erro} autoHideDuration={6000} onClose={handleClose}anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}>
                <Alert onClose={handleCloseErro} severity="error" sx={{ width: '100%' }}>
                    Ocorreu algum erro ao adicionar o produto!
                </Alert>
            </Snackbar>
        </div>
    </div>
    )
}
