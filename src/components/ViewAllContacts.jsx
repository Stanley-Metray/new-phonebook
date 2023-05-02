import Contact from "./Contact";
import { useState } from "react";
const ViewAllContacts = () => {

    let contacts = JSON.parse(localStorage.getItem("contacts"));
    if (contacts != null) {
        if (contacts.length === 0)
            contacts = null;
        else {
            contacts.sort(function (a, b) {
                var x = a.firstName.toLowerCase();
                var y = b.firstName.toLowerCase();
                return x < y ? -1 : x > y ? 1 : 0;
            });
        }
    }


    const [searchResult, setSearchResult] = useState(new Array());
    const search = (e) => {
        let value = e.target.value;
        let arr = new Array();
        for (let i in contacts) {
            if (contacts[i].firstName.toLowerCase().includes(value.toLowerCase()) || contacts[i].lastName.toLowerCase().includes(value.toLowerCase()) || contacts[i].mobile.includes(value)) {
                arr.push(contacts[i]);
                setSearchResult(arr);
            }

        }
    }

    return <>
        <h1>g</h1>
        <div className="search-nav d-flex flex-row align-items-center p-2 bg-dark">
            <h5 htmlFor="#" style={{ zIndex: "0" }} className="title text-white">All Contacts</h5>
            <div className="input-group">
                <input onChange={search} type="text" className="form-control" placeholder="Search Name or Number" aria-label="Recipient's username" aria-describedby="button-addon2" />
            </div>
        </div>
        {
            searchResult.length === 0 ? (
                <div className="accordion mb-5" id="accordionExample" style={{ zIndex: "1" }}>
                    {
                        contacts != null ? contacts.map((contact, index) => {
                            {/* return console.log(index); */ }
                            return <Contact contact={contact} key={index + " " + contact.name} index={index} />
                        }) : <h6 className="alert alert-info">No Contacts View</h6>
                    }
                </div>
            ) : (
                <div className="accordion mb-5" id="accordionExample" style={{ zIndex: "1" }}>
                    {

                        searchResult.map((contact, index) => {
                            {/* return console.log(index); */ }
                            return <Contact contact={contact} key={index + " " + contact.name} index={index} />
                        })
                    }
                </div>
            )

        }
    </>
}


export default ViewAllContacts;