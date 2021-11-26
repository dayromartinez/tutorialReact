import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormHook = () => {

    const {register,handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data, e) => {
        console.log(data);
        e.target.reset();
    }

    return (  
        <>
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control my-2" name="name"
                    {...register("name", { required:{ value: true, message: 'Campo requerido compae'}})}   
                />
                <span className="text-danger text-small d-block mb-2">
                    {errors.name &&  errors.name.message}
                </span>
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </>
    );
}


export default FormHook;