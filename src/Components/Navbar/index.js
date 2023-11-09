import Button from "../Button"
import Searchbar from "../Searchbar"
import './Navbar.css'

export default () => {
    return <div className="navbar">
        <img src="logo.png " width={67} height={34}/>
        < Searchbar />
        < Button>Give Feedback</Button>
    </div>
    

}