//import Contador from "./components/Contador";
//import Formulario from "./components/Formulario";
//import FormHook from "./components/FormHook";
//import FormCrud from "./components/FormCrud";
//import Saludo from "./components/Saludo";
//import Comentario from "./components/Comentario";
//import UserTable from "./components/UserTable";
//import React, { useState } from "react";
//import { v4 as uuidv4 } from "uuid";
//import AddUserForm from "./components/AddUserForm";
//import EditUserForm from "./components/EditUserForm";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Inicio } from "./components/Inicio";
import { Contacto } from "./components/Contacto";
import { Nosotros } from "./components/Nosotros";
import { User } from "./components/User";

function App() {

  /*const persona = {
    nombre: "Alma Marcela Gozo",
    url: "https://via.placeholder.com/64",
    texto: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  }*/

  /*const usersData = [
    { id: uuidv4(), name: 'Benito', username: 'beniytocámelas' },
    { id: uuidv4(), name: 'Rósame', username: 'rósamelanuss' },
    { id: uuidv4(), name: 'Alma', username: 'alma_marcela_gozoooo' },
  ]

  const [users, setUsers] = useState(usersData);
  const [usuarioActual, setUsuarioActual] = useState({
    id: null,
    name: "",
    username: ""
  })
  
  const [formEditar, setFormEditar] = useState(false);

  const agregarUsuario = (nuevoUsuario) => {
    nuevoUsuario.id = uuidv4();
    setUsers([...users, nuevoUsuario]);
    alert("¡Usuario creado con éxito!")
  }

  const editarUsuario = (usuario) => {
    setFormEditar(true);
    setUsuarioActual({
      id: usuario.id,
      name: usuario.name,
      username: usuario.username
    })
  }

  const actualizarUsuario = (id, usuarioModificado) => {
    setFormEditar(false);
    setUsers(users.map((usuario) => {
      if(usuario.id === id){
        return ({
          id,
          ...usuarioModificado
        })
      }
      return usuario;
    }))
    
  }

  const eliminarUsuario = (id) => {
    setUsers(users.filter(user => user.id !== id))
    alert("¡Usuario eliminado satisfactoriamente!")
  }*/


  return (
    <Router>
      <div className = "container">

        {/*<h1>Hola Guapuritas Reactianas</h1>
        <Contador />
        <Formulario />
        <FormHook />
        <FormCrud />
        <Saludo persona="Rosame Elano" edad = {22}/>
        <Saludo persona="Alma Marcela Gozo" edad = {34}/>
        <Comentario individuo = {persona}/>*/}

        {/*<h1>CRUD (Crear, leer, actualizar, eliminar) App con Hooks</h1>
        <div className="flex-row">

          <div className="flex-large">
            {formEditar ? (
              <div>
                <h2>Editar Usuario</h2>
                <EditUserForm usuarioActual = {usuarioActual} actualizarUsuario = {actualizarUsuario}/>
              </div>
            ) : (
              <div>
                <h2>Añadir Usuario</h2>
                <AddUserForm agregarUsuario = {agregarUsuario}/>
              </div>
            )}
          </div>

          <div className="flex-large">
            <h2>Ver Usuarios</h2>
            <UserTable usuarios = {users} eliminarUsuario = {eliminarUsuario} editarUsuario = {editarUsuario} setFormEditar = {setFormEditar}/>
          </div>

            </div>*/}

        <div className="btn-group mt-5">
          <NavLink to = "/" className="btn btn-dark" activeClassName = "active" >Inicio</NavLink>
          <NavLink to = "/nosotros" className="btn btn-danger" activeClassName = "active" >Nosotros</NavLink>
          <NavLink to = "/contacto" className="btn btn-primary" activeClassName = "active" >Contacto</NavLink>
        </div>
        <hr />
        <Routes>
          <Route exact path ="/" element = {<Inicio />} />
          <Route path="/contacto" element = {<Contacto />} />
          <Route path="/nosotros" element = {<Nosotros />} />
          <Route exact path="/nosotros/:id" element = {<User />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
