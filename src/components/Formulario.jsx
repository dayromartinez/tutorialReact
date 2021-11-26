import React, { useState } from "react";

const Formulario = () => {
    
    const [datos, setDatos] = useState({
        nombre: "",
        apellido: ""
    });
    
    const handleInputChange = (evento) => {
        setDatos({
            ...datos,
            [evento.target.name] : evento.target.value
        })
        console.log(datos);
    } 

    const enviarDatos = (evento) => {
        
        evento.preventDefault();
        alert("Nombre: "+ datos.nombre +" Apellido: "+ datos.apellido);
    }   

    //SE RECOMIENDA EL USO DE LA LIBRERÍA FORMMIK O LA LIBRERÍA REACT HOOK FORM PARA LA CREACIÓN, IMPLEMENTACIÓN Y VALIDACIÓN DE FORMULARIOS
    return (  
        <>
            <h3>Formulario</h3>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input type="text" name="nombre" placeholder="Ingrese su nombre" className="form-control"
                    onChange={handleInputChange}/>
                </div>
                <div className="col-md-3">
                    <input type="text" name="apellido" placeholder="Ingrese su apellido" className="form-control"
                    onChange={handleInputChange}/>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
            </form>
            <h5>{datos.nombre} - {datos.apellido}</h5>
        </>
    );
}

export default Formulario;