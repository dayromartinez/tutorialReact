

const Comentario = (props) => {
    return ( 
        <>
            <h1>Comentarios</h1>
            <hr />
            <div className="media">
                <img src={props.individuo.url} alt="imagen película" className="mr-3"/>
                <div className="media-body">
                    <h5 className="mt-0">{props.individuo.nombre}</h5>
                    <p>{props.individuo.texto}</p>
                </div>
            </div>

        </>
    );
}

export default Comentario;