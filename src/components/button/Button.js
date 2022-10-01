export function Button(props) {
    const { text, onClick, className } = props;
    return (
        <button onClick={onClick} className={className}>{text}</button>
    )
}