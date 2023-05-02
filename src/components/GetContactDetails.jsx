import { useState } from "react";

const GetContactDetails = () => {

    const [details, setDetails] = useState({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        gender: "",
        company: "",
        address: "",
        website: "",
        birthday: "",
        relationship: "",
        website: "",
    });

    const changeHandler = (e) => {
        let name = e.target.id;
        let value = e.target.value;

        if (name === "male" || name === "female" || name === "other") {
            if (e.target.checked)
                value = e.target.value;

            name = "gender";
        }

        setDetails({ ...details, [name]: value });
    }

    const submitHandler = (e) => {
        let arr = localStorage.getItem("contacts");
        if (arr === null) {
            arr = new Array();
            arr.push(details);
            localStorage.setItem("contacts", JSON.stringify(arr));
        }
        else {
            arr = JSON.parse(arr);
            arr.push(details);
            localStorage.setItem("contacts", JSON.stringify(arr));
        }

        setTimeout(() => {
            e.target.value = "Saved";
            e.target.disabled = true;
        }, 500);
    }

    return <>
        <label htmlFor="#" className="display-6 mb-4 text-center">Create Contact</label>
        <div className="mb-3">
            <label htmlFor="firstname" className="form-label">First Name</label>
            <input onChange={changeHandler} type="text" className="form-control" id="firstName" />
        </div>
        <div className="mb-3">
            <label htmlFor="lastname" className="form-label">Last Name</label>
            <input onChange={changeHandler} type="text" className="form-control" id="lastName" />
        </div>
        <div className="mb-3">
            <label htmlFor="mobile" className="form-label">Mobile</label>
            <input onChange={changeHandler} type="text" className="form-control" id="mobile" />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input onChange={changeHandler} type="email" className="form-control" id="email" />
        </div>
        <div className="d-flex flex-row mb-3 mt-3">
            <label htmlFor="#" className="me-3">Gender</label>
            <div className="form-check me-3">
                <input onChange={changeHandler} className="form-check-input" type="radio" name="gender" id="male" value="male" />
                <label className="form-check-label" htmlFor="male">
                    Male
                </label>
            </div>
            <div className="form-check me-3">
                <input onChange={changeHandler} className="form-check-input" type="radio" name="gender" id="female" value="female" />
                <label className="form-check-label" htmlFor="female">
                    Female
                </label>
            </div>
            <div className="form-check">
                <input onChange={changeHandler} className="form-check-input" type="radio" name="gender" id="other" value="other" />
                <label className="form-check-label" htmlFor="other">
                    Other
                </label>
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor="company" className="form-label">Company</label>
            <input onChange={changeHandler} type="text" className="form-control" id="company" />
        </div>
        <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <textarea onChange={changeHandler} type="text" className="form-control" id="address"></textarea>
        </div>
        <div className="mb-3">
            <label htmlFor="website" className="form-label">Website</label>
            <input onChange={changeHandler} type="text" className="form-control" id="website" />
        </div>
        <div className="mb-3">
            <label htmlFor="birthday" className="form-label">Birthday</label>
            <input onChange={changeHandler} type="date" className="form-control" id="birthday" />
        </div>
        <div className="mb-3">
            <label htmlFor="relationship" className="form-label">Relationship</label>
            <input onChange={changeHandler} type="text" list="relation" className="form-control" id="relationship" />
        </div>
        <datalist id="relation">
            <option value="Assistant"></option>
            <option value="Brother"></option>
            <option value="Child"></option>
            <option value="Domestic Partner"></option>
            <option value="Father"></option>
            <option value="Friend"></option>
            <option value="Manager"></option>
            <option value="Mother"></option>
            <option value="Parent"></option>
            <option value="Reffered By"></option>
            <option value="Relative"></option>
            <option value="Sister"></option>
            <option value="Spouse"></option>
            <option value="None"></option>
        </datalist>
        <div className="mt-5 mb-5">
            <input onClick={submitHandler} type="button" className="btn btn-success btn-large" id="btn-submit" value="Save" />
        </div>
    </>
}


export default GetContactDetails;