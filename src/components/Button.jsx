import './button.css';

export default function Button(props) {
    return(
        <button className='button' onClick={props.onClick}><label className='button-label'>{props.label}</label></button>
    )
}