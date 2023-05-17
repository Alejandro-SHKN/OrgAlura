import "./EquipoSelect.css";

function EquipoSelect() {
    //Método map arreglo.map( (nombreEquipo,i)=> <option> </option>)
    let nombreEquipo = [
      "Programación",
      "Front End",
      "Data Science",
      "Devops",
      "UX y Diseño",
      "Móvil",
      "Inovación y Gestión",
    ]
    return (
        <>
      <div className="div__containerSelect">
        <label className="label__EquipoSelect" htmlFor="EquipoSelect">
          Equipo
        </label>
        <select className="select__EquipoSelect" name="EquipoSelect" id="ID-EquipoSelect" placeholder="Hola"> 
        {nombreEquipo.map( (equipo,index) => <option key={index} value={`${equipo}`}>{equipo}</option> )}

        </select>
      </div>
    </>
  );
}

export default EquipoSelect;
