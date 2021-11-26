import React from "react";


const UserTable = (props) => {
    return ( 
        <table>
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Nombre de usuario</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
                {props.usuarios.length > 0 ?
                    (props.usuarios.map(usuario => {
                        return (
                            <tr key={usuario.id}>
                                <td>{usuario.name}</td>
                                <td>{usuario.username}</td>
                                <td>
                                    <button className="button muted-button" onClick={() => {props.editarUsuario(usuario)}}>Editar</button>
                                    <button className="button muted-button" onClick={() => {props.eliminarUsuario(usuario.id)}}>Eliminar</button>
                                </td>
                            </tr>
                        );
                    })) : (
                        <tr>
                            <td colSpan={3}>No hay usuarios registrados</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}

export default UserTable;

