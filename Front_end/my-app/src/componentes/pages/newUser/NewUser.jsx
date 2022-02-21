import './newUser.css'
import React from 'react'


class NewUser extends React.Component{
    
    render() {
        return (
            <div className='newUser'>
                <h1 className="newUserTitle"> Novo Cliente </h1>
                <form className="newUserForm">
                    <div className="newUserItem">
                        <label>Nome</label>
                        <input type="text" placeholder='Nome cliente' />
                    </div>
                    <div className="newUserItem">
                        <label>Contacto telefónico</label>
                        <input type="text" placeholder='Telemóvel' />
                    </div>
                    <div className="newUserItem">
                        <label>Email</label>
                        <input type="email" placeholder='Email' />
                    </div>
                    <div className="newUserItem">
                        <label>Morada</label>
                        <input type="text" placeholder='Morada' />
                    </div>
                    <div className="newUserItem">
                        <label>Código Postal</label>
                        <input type="text" placeholder='0000-000' />
                    </div>
                    <div className="newUserItem">
                        <label>Localidade</label>
                        <input type="text" placeholder='Localidade' />
                    </div>
                    <div className="newUserItem">
                        <label>Instagram</label>
                        <input type="text" placeholder='@instagram (se aplicável)' />
                    </div>
                    <div className='newUserButtons'>
                      <button className="newUserButtonadd">Adicionar</button>
                      <button className="newUserButtonclear" onclick="document.getElementById('myInput').value = ''" >Limpar</button>
                    </div>
        
                </form>
            </div>
          )
    }
}

export default NewUser;
