import "./user.css"

import { Link } from "react-router-dom"
import {CalendarToday, PermIdentity, PhoneAndroid, Publish} from '@material-ui/icons'

export default function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/Novo%20Cliente">
                <button className="userAddButton">Create</button>            
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://images.pexels.com/photos/5446316/pexels-photo-5446316.jpeg?cs=srgb&dl=pexels-cottonbro-5446316.jpg&fm=jpg" alt="" className="userShowImg" />
                    <div className="userShowTobTitle">
                        <span className="userShowUsername">Bicicleta</span>
                        <span className="userShowUserTitle">Queimar calorias</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">bbicleta</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoTitle">10 Jan 1900</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon"/>
                        <span className="userShowInfoTitle">910000000</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form action="" className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label> Username </label>
                            <input type="text" className="userUpdateInp" placeholder="Username" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Full name </label>
                            <input type="text" className="userUpdateInp" placeholder="full name" />
                        </div>
                        <div className="userUpdateItem">
                            <label> Email </label>
                            <input type="text" className="userUpdateInp" placeholder="Email" />
                        </div>
                        <div className="userUpdateItem">
                            <label> Phone </label>
                            <input type="text" className="userUpdateInp" placeholder="phone" />
                        </div>
                        <div className="userUpdateItem">
                            <label> Adress </label>
                            <input type="text" className="userUpdateInp" placeholder="Adress" />
                        </div>

                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://images.pexels.com/photos/5446316/pexels-photo-5446316.jpeg?cs=srgb&dl=pexels-cottonbro-5446316.jpg&fm=jpg" alt="" className="userUpdateImg" />
                            <label htmlFor="file"><Publish className="userUpdateIcon"/> </label>
                            <input type="file" id="file" style={{display: "none"}}/>
                        </div>
                        <button className="userUpdateButton">Update</button>

                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
