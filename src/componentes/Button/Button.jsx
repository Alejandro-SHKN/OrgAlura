import './Button.css'
function Button (props){
    return <div className="divPadreButton"><div className="div__ContainerButton"><button className='ButtonCrear' id='ID-ButtonCrear'>{props.children}</button></div></div>
}

export default Button