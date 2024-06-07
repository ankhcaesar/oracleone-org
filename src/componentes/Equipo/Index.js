import "./Equipo.css"
import Colaborador from "../Colaborador/Index.js"
import hexToRgba from "hex-to-rgba"
const Equipo = (props) => {
    //destructuracion
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, estrella } = props

    const obj = {
        backgroundColor: hexToRgba(colorSecundario, 0.6)
    }


    const estiloTitulo = { borderColor: colorSecundario }

    return <>
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input 
                className="inputColor"
                    type="color"
                    value={colorSecundario}
                    onChange={(evento)=>{
                        actualizarColor(evento.target.value, id)
                    }}
                />
                <h3 style={estiloTitulo} >{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) =>
                            <Colaborador
                                key={index}
                                datos={colaborador}
                                colorSecundario={colorSecundario}
                                eliminarColaborador={eliminarColaborador}
                                estrella={estrella}
                            />)
                    }
                </div>
            </section>
        }
    </>
}


export default Equipo