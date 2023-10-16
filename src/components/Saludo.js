function Saludo(props){
    // POdemos declarar variables dentro de la funcion
    var dato = "La k t cuento express"
    
    // var nombre = props.nombre;
    // var edad = props.edad;

    const {nombre, edad}=props;

    return (
    <div>
        <h1>Mi primer componente de Miercoles!</h1>
        <h2>Dato objetivo: {nombre}, {edad}</h2>
        <p>{dato}</p>
    </div>
    )
}

export default Saludo;