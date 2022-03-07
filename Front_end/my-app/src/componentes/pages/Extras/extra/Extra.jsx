import "./extra.css"
import { useEffect, useState } from "react";
import EuroIcon from '@mui/icons-material/Euro';
import PersonIcon from '@mui/icons-material/Person';


export default function Extra() {
    //get the id from the extra we want to edit
    var urlElements = window.location.href.split('/')
    var id_extra_ver = urlElements.slice(-1)[0]
    var url = "http://127.0.0.1:5000/extras/ver_extras/" + id_extra_ver

    //grab the data from databse
    const [id_extras, setId_extras] = useState("");
    const [nome_extras, setNome_extras] = useState("");
    const [preco_extras, setPreco_extras] = useState("");
   

    useEffect(() => {
        fetch(url)
        .then(resp => resp.json())
        .then(resp =>{
            console.log(resp)
          setId_extras(resp["id_extras"])
          setNome_extras(resp["nome_extras"])
          setPreco_extras(resp["preco_extras"])
         
        })
      },[])

      function updateUser() {
        let data = {
            "id_extras": id_extras,
            "nome_extras": nome_extras,
            "preco_extras": preco_extras,
        }

        fetch(`http://127.0.0.1:5000/extras/update_extras/${id_extra_ver}`, {
            method : 'PUT',
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
                            <label> Extra </label>
                        </div>
                        <input type="text" className="userUpdateInp" value = {nome_extras} onChange={(e) =>{setNome_extras(e.target.value)}}/>
                    </div>
                    <div className="userUpdateItem">
                        <div className="userShowInfo">  
                            < EuroIcon color="success" className="userShowIcon"/>   
                            <label> Preco </label>
                        </div>
                        <input type="text" className="userUpdateInp" value = {preco_extras} onChange={(e) =>{setPreco_extras(e.target.value)}} />
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
