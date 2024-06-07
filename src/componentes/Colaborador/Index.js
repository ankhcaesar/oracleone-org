import "./Colaborador.css"
import { RiDeleteBack2Fill, RiStarFill, RiStarLine } from "react-icons/ri";


const Colaborador = (props) => {
    const { nombre, puesto, foto, id, fav } = props.datos
    const { colorSecundario, eliminarColaborador, estrella } = props
    return <div className="colaborador">
        <RiDeleteBack2Fill className="botonEliminar" onClick={() => eliminarColaborador(id)} />

        <div className="encabezado" style={{ backgroundColor: colorSecundario }}>


            <img className="fotoColaborador" src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav? <RiStarFill className="estrella" color="red" onClick={()=>estrella(id)} /> : <RiStarLine onClick={()=>estrella(id)} className="estrella"/>}
            
            

        </div>
    </div>
}


export default Colaborador