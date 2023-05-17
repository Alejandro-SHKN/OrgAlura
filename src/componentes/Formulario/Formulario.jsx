import '../Button/Button.css'
import Button from "../Button/Button";
import EquipoSelect from "../EquipoSelect/EquipoSelect";
import '../EquipoSelect/EquipoSelect.css'
import InputTexto from "../InputTexto/InputTexto";
import "../InputTexto/InputTexto.css";
import "./Formulario.css";
function Formulario() {
  let manejarEnvio= (e)=>{
    e .preventDefault();
    console.log('Manejar el envío', e);
  }
  return (
    <>
      <div className="div__PadreFormulario">
              crear2
        <form onSubmit={manejarEnvio}>
          <div className="divContainerH3">
            <h3 className="h3__Titulo">Rellena el formulario para crear el colaborador.</h3>
            <div className="div__containerInputs">
              <InputTexto titulo="Nombre" placeholder="Ingresar su nombre"/>
              <InputTexto titulo="Puesto" placeholder="Ingresar su puesto"/>
              <InputTexto titulo="Foto" placeholder="Ingresar enlace de foto"/>
              <EquipoSelect/>
              <Button>
                Crear
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Formulario;
