import React, { useState } from "react";

//con el comando sfc puedo crear un componente funcional por defecto, a través de una arrow function
const Contador = () => {

    const [contador, setContador] = useState(0);
    const [numeros, setNumeros] = useState([1,2,3,4,5,6]);

    const aumentarValor = (e) => {
        e.preventDefault();
        console.log("Hiciste click");
        setContador(contador+1);
        setNumeros([...numeros, numeros[numeros.length - 1] + 1]);
    }

    return (  
        <div>
            <h3>Mi primer componenteichon, con un contador con valor {contador}</h3>
            <ul>
                {numeros.map((numero, indice) => {
                    return <li>{numero} - {indice}</li>
                } )}
            </ul>
            <button onClick={aumentarValor}>¡Haz click aquí!</button>
            <h2>Holass</h2>
        </div>
    );
}

export default Contador;