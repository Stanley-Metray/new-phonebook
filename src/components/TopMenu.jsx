import { Link } from "react-router-dom";

const TopMenu = ()=>{
    return <>
        <ul className="menu top-menu">
            <li><Link to="/"><h3 className="text-danger">Phonebook</h3></Link></li>
        </ul>
    </>
}


export default TopMenu;