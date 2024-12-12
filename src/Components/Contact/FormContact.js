import React, { useState } from "react";

function FormContact(){
    // SetState Name
    const [name, setName] = useState("");
    const changeName = (event)=>{
        setName(event.target.value)
    }

    // SetState Email
    const [email, setEmail] = useState("");
    const changeEmail = (event)=>{
        setEmail(event.target.value)
    }

    // SetState Phone
    const [phone, setPhone] = useState("");
    const changePhone = (event)=>{
        setPhone(event.target.value)
    }

    // SetState Message
    const [message, setMessage] = useState("");
    const changeMessage = (event)=>{
        setMessage(event.target.value)
    }

    const [show, setShow] = useState(true);

    const FormHandler =(event) => {
        event.preventDefault();

        // Validation here
        // Name Validation
        if(name.length == ""){
            setShow(false);
            return;
        }
        console.log(name);

        // Email Validation
        if(email.length == ""){
            setShow(false);
            return;
        }
        console.log(email);

        // Phone Validation
        if(phone.length == ""){
            setShow(false);
            return;
        }
        console.log(phone);

        // Message Validation
        if(message.length == ""){
            setShow(false);
            return;
        }
        console.log(message);

        setShow(true);
    }
    return(
        <form onSubmit={FormHandler}>
            <div className="form-control">
                <input type="text" onChange={changeName} placeholder="Write Your Name" />
                {!show && <div className="alert alert-danger">Name haven't be empty</div>}
            </div>
            <div className="form-control">
                <input type="email" onChange={changeEmail} placeholder="Write Your Email" />
                {!show && <div className="alert alert-danger">Email haven't be empty</div>}
            </div>
            <div className="form-control">
                <input type="number" onChange={changePhone} placeholder="Write Your Phone Number" />
                {!show && <div className="alert alert-danger">Phone haven't be empty</div>}
            </div>
            <div className="form-control">
                <select>
                    <option>Select Department</option>
                    <option>one</option>
                    <option>two</option>
                    <option>three</option>
                </select>
            </div>
            <div className="form-control">
                <textarea onChange={changeMessage} placeholder="Write Your Message" />
                {!show && <div className="alert alert-danger">Message haven't be empty</div>}
            </div>
            <div className="form-control">
                <button>Send Message</button>
            </div>
        </form>
    )
}

export default FormContact;