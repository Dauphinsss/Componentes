function Boton () {

    const cerrar = () => {
        window.close();
    }

    return (
            <button onClick={cerrar}>Aceptar</button>
    )
}

export default Boton;