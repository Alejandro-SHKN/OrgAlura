import PropTypes from 'prop-types';
import './InputTexto.css'


const InputTexto = (props)=> {
    console.log(props.titulo);
    return (
        <>
    <div className='div__containerInputsAndLabel'>
        <label className='labelInput' htmlFor="inputTexto">{props.titulo}</label>
        <input className='inputTexto' type="text" placeholder= {`${props.placeholder}`}/>
    </div>
    </>
    )
}
InputTexto.propTypes = {
    titulo: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
  };
export default InputTexto
