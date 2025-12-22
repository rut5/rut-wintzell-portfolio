
function Popup (props) {

    return (
        <div className="popup-window">
            <img src={props.image} alt={props.title} className="pw-image" />
            <h1 className="pw-title">{props.title}</h1>
            <p className="pw-info">{props.info}</p>
            <p className="pw-description">{props.description}</p>
            <button className="pw-close-btn" onClick={props.onClick}>
                Close project
            </button>
        </div>

    )
}

export default Popup;