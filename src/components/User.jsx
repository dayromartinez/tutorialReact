import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const User = () => {

    const { id } = useParams();

    const [civilizacion, setCivilizacion] = useState({})
    useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {

        const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
        const pueblo = await data.json();
        setCivilizacion(pueblo);
    }

    return (
        <div>
            <h2>{civilizacion.name}</h2>
            <h3>{civilizacion.expansion}</h3>
            <h4>{civilizacion.team_bonus}</h4>
            <p>{civilizacion.civilization_bonus}</p>
        </div>
    )
}
