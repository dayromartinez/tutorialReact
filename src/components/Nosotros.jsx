import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


export const Nosotros = () => {

    const [equipo, setEquipo] = useState([]);

    useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {

        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        const users = await data.json();
        setEquipo(users.civilizations);
    }


    return (
        <div>
            <h1>Nosotros</h1>
            <ul>
                { equipo.length > 0 ? (
                    equipo.map((civilizacion) => {
                        return (
                            <li key={civilizacion.id}>
                                <NavLink to = {`/nosotros/${civilizacion.id}`}>
                                    {civilizacion.name} - {civilizacion.expansion}
                                </NavLink>
                            </li>
                        )
                    })
                ) : (<li>No hay equipo de trabajo</li>)
                    
                }
            </ul>
        </div>
    )
}
