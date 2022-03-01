import "./app.css";
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Topbar from "./componentes/topbar/Topbar";
import Home from "./componentes/pages/home/Home";
import Sidebar from "./componentes/sidebar/Sidebar";
// Clientes
import User from "./componentes/pages/Clientes/user/User";
import NewUser from "./componentes/pages/Clientes/newUser/NewUser";
import UserList from "./componentes/pages/Clientes/userList/UserList";
//Produtos
import Produtos from "./componentes/pages/Produtos/produtos/Produtos";
import New_Product from "./componentes/pages/Produtos/newProduct/NewProduct";
import Lista_Produtos from "./componentes/pages/Produtos/produtosList/ProdutosList";

function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar/>
        <div className="container_second_column"> 
        <Topbar/>
          <div className="container_home">
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/Home" element={<Home/>}/>
              {/* Clientes */}
              <Route exact path="/Ver%20Clientes" element={<UserList/>}/>
              <Route exact path="/Ver%20Clientes/:userid" element={<User/>}/>
              <Route exact path="/Novo%20Cliente" element={<NewUser/>}/>
              {/* Produtos */}
              <Route exact path="/Produtos" element={<Lista_Produtos/>}/>
              <Route exact path="/Ver%20Produtos/:produtosid" element={<Produtos/>}/>
              <Route exact path="/Adicionar%20Produto" element={<New_Product/>}/>
            </Routes>
          </div>     
        </div>
      </div>
    </Router>
    );
}
export default App;
