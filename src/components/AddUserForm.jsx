import React from "react";
import { useForm } from "react-hook-form";



const AddUserForm = (props) => {


    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data, e) => {
        props.agregarUsuario(data);
        e.target.reset();
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <label>Nombre</label>
            <input type="text" name="name" placeholder="Digite su nombre Compae" 
                {...register("name", { required: { value: true, message: 'Digite su nombre compae'},
                minLength: {value: 3, message: 'Mínimo 3 letras compae'},
                })}
            />
            {errors.name ? (
                <span className="text-danger text-small d-block mb-2">{errors.name.message}</span> 
            ):(null)}

            <label>Nombre de usuario</label>
            <input type="text" name="username" placeholder="benitocamelas123"
                {...register("username", { required: { value: true, message: 'Digite su nombre de usuario compae'},
                minLength: {value: 3, message: 'Mínimo 3 letras compae'},
                })}
            />
            {errors.username ? (
                <span className="text-danger text-small d-block mb-2">{errors.username.message}</span> 
            ):(null)}

            <button type="submit">¡Añadir nuevo usuario!</button>
        </form>

    );
}

export default AddUserForm;

