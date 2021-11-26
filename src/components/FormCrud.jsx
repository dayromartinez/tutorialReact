import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormCrud = () => {

    const {register, handleSubmit, formState: { errors }} = useForm();
    const [entradas, setEntradas] = useState([]);

    const onSubmit = (data, e) => {
        console.log(data);
        setEntradas([...entradas, data]);
        console.log(entradas);
        e.target.reset();
    }

    return ( 
        <>
            <h1>Ejemplo 1</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input name="titulo" placeholder="Ingrese un título" className="form-control my-2"
                    {...register("titulo", { required: { value: true, message: 'Digite un título compae'},
                        minLength: {value: 3, message: 'Mínimo 3 letras compae'},

                    })}
                />

                <span className="text-danger text-small d-block mb-2">
                    {errors.titulo &&  errors.titulo.message}
                </span>

                <input name="descripcion" placeholder="Ingrese una descripción" className="form-control my-2"
                    {...register("descripcion", { required:{ value: true, message: 'Digite una descripción compae'},
                        minLength: {value: 3, message: 'Mínimo 3 letras compae'},
                    })}
                />

                <span className="text-danger text-small d-block mb-2">
                    {errors.descripcion &&  errors.descripcion.message}
                </span>

                <button className="btn btn-primary">Agregar</button>
            </form>

            <ul>
                {entradas.map(entrada => {
                    return <li>{entrada.titulo}: {entrada.descripcion}</li>
                })}
            </ul>
            
        </>
    );
}

export default FormCrud;