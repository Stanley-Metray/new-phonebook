import { Link } from "react-router-dom";

const Contact = (props) => {

    const saveNameToCookie = () => {
        localStorage.setItem("editable-contact", JSON.stringify(props.contact));
    }

    const deleteContact = () => {
        let contacts = JSON.parse(localStorage.getItem("contacts"));
        let i = 0;

        for (i in contacts) {
            if (contacts[i].firstName === props.contact.firstName && contacts[i].mobile === props.contact.mobile)
                break;
        }

        contacts.splice(i, 1);
        localStorage.setItem("contacts", JSON.stringify(contacts));
        setTimeout(() => {
            window.location.href="/";
        }, 300);
    }

    return <>
        <div className="accordion-item" style={{ zIndex: "0" }}>
            <h2 className="accordion-header" id="headingThree" style={{ zIndex: "0" }}>
                <button className="accordion-button collapsed" style={{ zIndex: "0" }} type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + "" + props.index} aria-expanded="false" aria-controls="collapseThree">
                    <h6><i className="far fa-user-circle fa-lg"></i> {props.contact.firstName} {props.contact.lastName}</h6>
                </button>
            </h2>
            <div id={"collapse" + "" + props.index} style={{ zIndex: "0" }} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <div className="card w-100">
                        <div className="card-body bg-dark">
                            <h5 className="card-title text-light"><i className="fas me-2 fa-phone fa-sm"></i> {props.contact.mobile}</h5>
                            <p className="card-text text-light"> <i className="far me-2 fa-envelope"></i> {props.contact.email}</p>
                            <p className="card-text text-light"> <i className="fas me-2 fa-venus-mars"></i> {props.contact.gender}</p>
                            <p className="card-text text-light"> <i className="far fa-calendar-alt"></i> &nbsp; {props.contact.birthday}</p>
                            <p className="card-text text-light"> <i className="fas me-2 fa-map-marker-alt"></i> {props.contact.address}</p>
                            <p className="card-text text-light"> <i className="fas me-2 fa-industry"></i> {props.contact.company}</p>
                            <p className="card-text text-light"> <i className="fas fa-external-link-alt"></i> &nbsp; {props.contact.website}</p>
                            <p className="card-text text-light"> <i className="fas me-2 fa-users"></i> {props.contact.relationship}</p>
                            <div className="d-flex gap-2">
                                <Link to="/edit-contact" onClick={saveNameToCookie} className="btn btn-primary"><i className="far fa-edit"></i></Link>
                                <button onClick={deleteContact} className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}


export default Contact;