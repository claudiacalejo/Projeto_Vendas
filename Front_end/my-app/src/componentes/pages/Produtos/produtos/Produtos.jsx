import "./produtos.css"
import { useEffect, useState } from "react";
import CakeIcon from '@mui/icons-material/Cake';
import DiningIcon from '@mui/icons-material/Dining';
import IcecreamIcon from '@mui/icons-material/Icecream';
import HeightIcon from '@mui/icons-material/Height';
import EuroIcon from '@mui/icons-material/Euro';


export default function User() {
    //get the id from the client we want to edit
    var urlElements = window.location.href.split('/')
    var id_produtos_ver = urlElements.slice(-1)[0]
    var url = "http://127.0.0.1:5000/produtos/ver_produto/" + id_produtos_ver

    //grab the data from databse
    const [data, setData] = useState([]);
    const [id_produtos, setId_produtos] = useState("");
    const [nome_produto, setNome_produto] = useState("");
    const [massa, setMassa] = useState("");
    const [recheio, setRecheio] = useState("");
    const [tamanho, setTamanho] = useState("");
    const [preco_custo, setPreco_custo] = useState("");
    const [preco_venda, setPreco_venda] = useState("");

    useEffect(() => {
        fetch(url)
        .then(resp => resp.json())
        .then(resp =>{
          setData(resp)
          setId_produtos(resp[0])
          setNome_produto(resp[1])
          setMassa(resp[2])
          setRecheio(resp[3])
          setTamanho(resp[4])
          setPreco_custo(resp[5])
          setPreco_venda(resp[6])
        })
      },[])

      function updateProdutos() {
        let data = {
            "id_produtos": id_produtos,
            "nome_produto": nome_produto,
            "massa": massa,
            "recheio": recheio,
            "tamanho" : tamanho,
            "preco_custo": preco_custo,
            "preco_venda" : preco_venda,
        }
        fetch(`http://127.0.0.1:5000/produtos/update_produtos/${id_produtos_ver}`, {
            method : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(data)
        })
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
                        <input type="text" className="userUpdateInp" value = {nome_produto} onChange={(e) =>{setNome_produto(e.target.value)}}/>
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < CakeIcon className="userShowIcon"/>  
                            <label> Massa </label>
                        </div>
                        <input type="text" className="userUpdateInp" value = {massa} onChange={(e) =>{setMassa(e.target.value)}} />
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < IcecreamIcon className="userShowIcon"/>  
                            <label> Recheio </label>
                        </div>
                        <input type="text" className="userUpdateInp" value = {recheio} onChange={(e) =>{setRecheio(e.target.value)}} />
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < HeightIcon className="userShowIcon"/>  
                            <label> Tamanho </label>
                        </div>
                        <input type="text" className="userUpdateInp" value = {tamanho} onChange={(e) =>{setTamanho(e.target.value)}} />
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < EuroIcon color="error" className="userShowIcon"/>  
                            <label> Preço de Custo </label>
                        </div>
                        <input type="text" className="userUpdateInp" value = {preco_custo} onChange={(e) =>{setPreco_custo(e.target.value)}} />
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < EuroIcon color="success" className="userShowIcon"/>  
                            <label> Preço de Venda </label>
                        </div>
                        <input type="text" className="userUpdateInp" value = {preco_venda} onChange={(e) =>{setPreco_venda(e.target.value)}} />
                    </div>
                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <input type="file" id="file" style={{display: "none"}}/>
                    </div>
                    <button className="userUpdateButton" onClick={updateProdutos}>Update</button>

                </div>
            </form>
        </div>
    </div>
    )
}
