import Topbar from "./componentes/topbar/Topbar";
import Sidebar from "./componentes/sidebar/Sidebar"
import Home from "./componentes/pages/home/Home"
import "./app.css"
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import UserList from "./componentes/pages/userList/UserList";
import User from "./componentes/pages/user/User";
import NewUser from "./componentes/pages/newUser/NewUser";
import Produtos from "./componentes/pages/produtos/Produtos";


function App() {
  return (
    <Router>
      <div class="container">
        <Sidebar/>
        <div className="container_second_column"> 
          <Topbar/>
          <div className="container_home">
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/Home" element={<Home/>}/>
              <Route exact path="/Ver%20Clientes" element={<UserList/>}/>
              <Route exact path="/Ver%20Clientes/:userid" element={<User/>}/>
              <Route exact path="/Novo%20Cliente" element={<NewUser/>}/>
              <Route exact path="/Produtos" element={<Produtos/>}/>
            </Routes>
           
          </div>     
        </div>
      </div>
    </Router>
    );
}

export default App;
