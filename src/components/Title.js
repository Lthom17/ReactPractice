import '../styles/title.css'
import '../styles/modal.css'

function Title(props) {


    return (
        <>
            <h1 className="title">{props.title}</h1>
            <br />
            <h2 className="subtitle">{props.subtitle}</h2>
        </>
    )
}
export default Title;