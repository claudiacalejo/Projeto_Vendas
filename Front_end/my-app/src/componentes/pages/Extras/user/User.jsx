import "./user.css"
import { useEffect, useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import RoomIcon from '@mui/icons-material/Room';
import { PhoneAndroid} from '@material-ui/icons';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';

export default function User() {
    //get the id from the client we want to edit
    var urlElements = window.location.href.split('/')
    var id_cliente_ver = urlElements.slice(-1)[0]
    var url = "http://127.0.0.1:5000/clientes/ver_cliente/" + id_cliente_ver

    //grab the data from databse
    const [data, setData] = useState([]);
    const [id_cliente, setId_cliente] = useState("");
    const [nome_cliente, setNome_cliente] = useState("");
    const [morada_cliente, setMorada_cliente] = useState("");
    const [codigo_postal, setCodigo_postal] = useState("");
    const [localidade, setLocalidade] = useState("");
    const [telefone_cliente, setTelefone] = useState("");
    const [instagram_cliente, setInstagram] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        fetch(url)
        .then(resp => resp.json())
        .then(resp =>{
          setData(resp)
          setId_cliente(resp[0])
          setNome_cliente(resp[1])
          setMorada_cliente(resp[2])
          setCodigo_postal(resp[3])
          setLocalidade(resp[4])
          setTelefone(resp[5])
          setInstagram(resp[6])
          setEmail(resp[7])
        })
      },[])

      function updateUser() {
        let data = {
            "id_cliente": id_cliente,
            "nome_cliente": nome_cliente,
            "morada_cliente": morada_cliente,
            "codigo_postal": codigo_postal,
            "localidade" : localidade,
            "telefone_cliente": telefone_cliente,
            "instagram_cliente" : instagram_cliente,
            "email": email
        }
        fetch(`http://127.0.0.1:5000/clientes/update_cliente/${id_cliente_ver}`, {
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
                            < PersonIcon className="userShowIcon"/>  
                            <label> Nome </label>
                        </div>
                        <input type="text" className="userUpdateInp" value = {nome_cliente} onChange={(e) =>{setNome_cliente(e.target.value)}}/>
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < HomeIcon className="userShowIcon"/>  
                            <label> Morada </label>
                        </div>
                        <input type="text" className="userUpdateInp" value = {morada_cliente} onChange={(e) =>{setMorada_cliente(e.target.value)}} />
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < LocalPostOfficeIcon className="userShowIcon"/>  
                            <label> Código Postal </label>
                        </div>
                        <input type="text" className="userUpdateInp" value = {codigo_postal} onChange={(e) =>{setCodigo_postal(e.target.value)}} />
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < RoomIcon className="userShowIcon"/>  
                            <label> Localidade </label>
                        </div>
                        <input type="text" className="userUpdateInp" value = {localidade} onChange={(e) =>{setLocalidade(e.target.value)}} />
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < PhoneAndroid className="userShowIcon"/>  
                            <label> Telefone </label>
                        </div>
                        <input type="text" className="userUpdateInp" value = {telefone_cliente} onChange={(e) =>{setTelefone(e.target.value)}} />
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < InstagramIcon className="userShowIcon"/>  
                            <label> Instagram </label>
                        </div>
                        <input type="text" className="userUpdateInp" value = {instagram_cliente} onChange={(e) =>{setInstagram(e.target.value)}} />
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < EmailIcon className="userShowIcon"/>  
                            <label> Email </label>
                        </div>
                        <input type="text" className="userUpdateInp" value = {email} onChange={(e) =>{setEmail(e.target.value)}} />
                    </div>
                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <input type="file" id="file" style={{display: "none"}}/>
                    </div>
                    <button className="userUpdateButton" onClick={updateUser}>Update</button>

                </div>
            </form>
        </div>
    </div>
    )
}
