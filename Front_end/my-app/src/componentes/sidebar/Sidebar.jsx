import "./sidebar.css"
import logo from './imagens/logo.png'
import {Home, Timeline, PeopleAlt, PersonAddAlt1, Cake, Add, Email, Chat, Euro, AddShoppingCart, Inventory, AddCircle} from '@mui/icons-material'
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

const drawerWidth = 240;

export default function Sidebar() {
  return (
<Drawer
        sx={{
            width: drawerWidth,
            flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#e4dfe95b',
            border: 'none'
          },
          
        }}
        variant="permanent"
        anchor="left"
      >
        <img src={logo} alt="" className='logo_img'/>

        <h3 className="sidebarTitle">Dashboard</h3>
        <List sx={{height:'8%'}}>
          {['Home', 'Análise'].map((text, index) => (
            <ListItem button key={text} component={Link} to={"/" + text} sx={{height:'50%'}}>
              <ListItemIcon>
                {index % 2 === 0 ? <Home /> : <Timeline />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <h3 className="sidebarTitle">Produtos</h3>
        <List sx={{height:'10%'}}>
          {['Produtos', 'Adicionar Produto'].map((text, index) => (
            <ListItem button key={text} component={Link} to={"/" + text} sx={{height:'50%'}}>
              <ListItemIcon>
                {index % 2 === 0 ? <Cake /> : <AddCircle />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>


        <h3 className="sidebarTitle">Clientes</h3>
        <List sx={{height:'10%'}}>
          {['Ver Clientes', 'Novo Cliente'].map((text, index) => (
            <ListItem button key={text} component={Link} to={"/" + text} sx={{height:'50%'}}>
              <ListItemIcon>
                {index % 2 === 0 ? <PeopleAlt /> : <PersonAddAlt1 />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <h3 className="sidebarTitle">Encomendas</h3>
        <List sx={{height:'10%'}}>
          {['Ver Encomendas', 'Nova Encomenda'].map((text, index) => (
            <ListItem button key={text} component={Link} to={"/" + text} sx={{height:'50%'}}>
              <ListItemIcon>
                {index % 2 === 0 ? <Inventory /> : <Add />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <h3 className="sidebarTitle">Custos</h3>
        <List sx={{height:'10%'}}>
          {['Ver Custos', 'Adicionar Custo'].map((text, index) => (
            <ListItem button key={text} sx={{height:'50%'}}>
              <ListItemIcon>
                {index % 2 === 0 ? <Euro/> : <AddShoppingCart />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <h3 className="sidebarTitle">Notificações</h3>
        <List sx={{height:'10%'}}>
          {['Email', 'Mensagens'].map((text, index) => (
            <ListItem button key={text} sx={{height:'50%'}}>
              <ListItemIcon>
                {index % 2 === 0 ? <Email /> : <Chat />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

      </Drawer>
    )
}
