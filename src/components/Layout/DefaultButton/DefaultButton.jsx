import './DefaultButton.css';

function DefaultButton(props) {
    return (
        <button className={"defaultButton " + props.className} onClick={props.onClick ? props.onClick : null}>{props.children}</button>
    );
}

export default DefaultButton;
