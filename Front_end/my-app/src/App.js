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
//Extras
import New_Extra from "./componentes/pages/Extras/newExtra/NewExtra";
import Extra from "./componentes/pages/Extras/extra/Extra";
import ExtrasList from "./componentes/pages/Extras/ExtrasList/ExtrasList";
//Encomendas
import EncomendaList from "./componentes/pages/Encomendas/encomendaList/EncomendaList";

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

              {/* Extras */}
              <Route exact path="/Extras" element={<ExtrasList/>}/>
              <Route exact path="/Ver%20Extras/:extrasid" element={<Extra/>}/>
              <Route exact path="/Adicionar%20Extra" element={<New_Extra/>}/>

              {/* Encomendas */}
              <Route exact path="/Ver%20Encomendas" element={<EncomendaList/>}/>
              {/* <Route exact path="/Ver%20Encomendas/:extrasid" element={<Extra/>}/> */}
              {/* <Route exact path="/Adicionar%20Extra" element={<New_Extra/>}/> */}

            </Routes>
          </div>
        </div>
      </div>
    </Router>
    );
}
export default App;
