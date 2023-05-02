import { Routes, Route, Link } from "react-router-dom";
import CreateContact from "./CreateContact";
import ViewAllContacts from "./ViewAllContacts";
import EditContact from "./EditContact";

const BottomMenu = () => {
    return <>

        <ul className="menu bottom-menu bg-secondary d-flex">
            <li><Link title="Create Contact" className="bg-primary bg-gradient text-white" to="/create-contact"><i className="fas fa-plus"></i></Link></li>
            <li><Link title="View Contacts" className="bg-primary bg-gradient text-white" to="/view-contacts"><i className="fas fa-list"></i></Link></li>
        </ul>
        <Routes>
            <Route path="/" element={<ViewAllContacts />}>View Contacts</Route>
            <Route path="/create-contact" element={<CreateContact />} >Create Contact</Route>
            <Route path="/view-contacts" element={<ViewAllContacts />}>View Contacts</Route>
            
            
            // To Edit or update contact, this Route is not a part of BottomMenu
            <Route path="/edit-contact" element={<EditContact name={""}/>}>View Contacts</Route>
        </Routes>
    </>
}

export default BottomMenu;