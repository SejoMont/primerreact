function Metodos(){
// Los metodos igual que las variables se declaran fuera del return
    const mostrarMensaje = () => {
        console.log("Boton pulsado...")
    }
    return (<div>
        <h1>Ejemplo métodos react</h1>
        <button onClick={() => mostrarMensaje()}>Mostrar mensaje </button>
    </div>)
}

export default Metodos;