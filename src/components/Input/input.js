import '../../App.css'
export function Input(props) {
    return (
        <input type={props.type} className="imputStyle" onChange={props.onChange} />
    )
}