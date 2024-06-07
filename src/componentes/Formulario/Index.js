import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo/Index"
import ListaOpciones from "../ListaOpciones/Index"
import Boton from "../Boton/Index"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const { registrarColaborador, equipos } = props


    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("manejar el envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo
                label="Nombre"
                placeholder="Ingresar nombre"
                required={true}
                valor={nombre}
                actualizarValor={actualizarNombre}
            />

            <Campo
                label="Puesto"
                placeholder="Ingresar puesto"
                required={true}
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />

            <Campo
                label="foto"
                placeholder="Ingresar enlace de foto"
                required={true}
                valor={foto}
                actualizarValor={actualizarFoto}
            />

            <ListaOpciones
                label="Equipo"
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={equipos}

            />
            <Boton> 
                Crear
            </Boton>
        </form>

        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo
                label="Titulo"
                placeholder="Ingresar titulo"
                required={true}
                valor={nombre}
                actualizarValor={actualizarNombre}
            />

            <Campo
                label="Color"
                placeholder="Ingresar color en Hex"
                required={true}
                valor={puesto}
                actualizarValor={actualizarPuesto}
                type="color"
            />
            <Boton>
                Registrar equipo
            </Boton>
        </form>

    </section>
}

export default Formulario