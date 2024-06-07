import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Index';
import Formulario from './componentes/Formulario/Index';
import Miorg from './componentes/Miorg/Index';
import Equipo from './componentes/Equipo/Index';
import Footer from './componentes/Footer/Index';
import { v4 as uuid } from "uuid"


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Innovación y  Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false

  }]);

  const [equipos, actualizarEquipos] = useState([
    {
      titulo: "Programación",
      colorPrimario: "#D9F7E9",
      colorSecundario: "#57C278"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#E8F8FF",
      colorSecundario: "#82CFFA"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#F0F8E2",
      colorSecundario: "#A6D157"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#FDE7E8",
      colorSecundario: "#E06B69"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#FAE9F5",
      colorSecundario: "#DB6EBF"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFF5D9",
      colorSecundario: "#FFBA05"
    },
    {
      id: uuid(),
      titulo: "Innovación y  Gestión",
      colorPrimario: "#FFEEDF",
      colorSecundario: "#FF8A29"
    }

  ])


  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador ", colaborador);
    //spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }



  // Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id != id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Acualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar color: ", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorSecundario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  const estrella = (id) => {
    const colaboradorConEstrella = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradorConEstrella)
  }



  //lista equipos
  return (
    <div>
      <Header />
      {/*ternado = condicion ? seMuestraa : noSeMuestra
      //es igual a: condicion && seMuestra */};
      {/*mostrarFormulario ? <Formulario /> : <></>*/};
      {mostrarFormulario && <Formulario
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
      />
      }

      <Miorg cambiarMostrar={cambiarMostrar} />

      {equipos.map((equipo) => <Equipo
        datos={equipo}
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        estrella={estrella}
      />)

        // ambas formas son lo mismo, lo que sigue al map es un return
        //          equipos.map((equipo)=>{
        //           return <Equipo datos={equipo} key={equipo.titulo} />
        //          })
      }

      <Footer />

    </div>
  );
}
export default App;
