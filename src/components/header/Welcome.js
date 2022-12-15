import './header.css'
const Welcome = (props) => {
    return (
        <div>
            <h2 class='title'>Welcome,{props.user}</h2>
        </div>
    )
}
export default Welcome;