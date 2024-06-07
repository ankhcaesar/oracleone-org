//import { useState } from "react";
import "./Miorg.css";
const Miorg = (props) => {

    // const [nobrevariable, funcioqueactualiza] = useState(valorinicial)
    
   // const [mostrar,actualizarMostrar] = useState(true)
   // console.log("Mostrar/Ocultar elemento",!mostrar);
   // const manejarClick = () => {  
   //     actualizarMostrar(!mostrar)
   // }



    return <section className="orgSeccion">
        <h3 className="titulo">Mi organización</h3>
        <img src="/img/botonadd.png" alt="Agregar" onClick={props.cambiarMostrar} />

    </section>
}

export default Miorg