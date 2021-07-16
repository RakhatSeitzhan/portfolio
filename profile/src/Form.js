import React,{ useState, useRef } from 'react'
import './css/Form.css'

function Form() {
    const [message, setMessage] = useState("")
    const [show, setShow] = useState(false)
    const containerRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        if (name == "") {
            setMessage("Please write down you name")
            return
        } 
        const email = e.target.email.value
        const text = e.target.text.value
        if (text == "") {
            setMessage("Please write down you Feedback")
            return
        } 
        fetch('https://rseitzhan.me/api/post', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({name: name, email: email, text: text}),
        }).then(data => {
            if (data.status == 200){
                setMessage("Succesfully uploaded!")
            }
        }).catch(err => {
            console.error(err)
        })
    }
    const handleClick = () => {
        setShow(!show)
        if (show){
            containerRef.current.classList.add('new-height')
        } else containerRef.current.classList.remove('new-height')
    }
    const events = show ? 'all' : 'none'
    const height = show ? `85vh` : `25vh`
    const opacity = show ? '1' : '0'
    return (
        <div id = "Form" className = "d-flex justify-content-center">
            <div className = "Form-container position-absolute container w-75 py-3 px-5 shadow bg-dark text-white b-rounded" style = {{height: height}} ref ={containerRef}>
                <div className = "row p-5 d-flex justify-content-around align-items-center " onClick ={handleClick}>
                    <div className = "col-md-8 h5 b-rounded text-center">If you have any offers or inquiries</div>
                    <div className = "Form-button col-md-2 h5 px-4 py-3 bg-main b-rounded text-center font-weight-bold shadow">Text it!</div>
                </div>
                <div className = "Form-body container px-2" style = {{opacity: opacity, pointerEvents: events}}>
                    <form onSubmit = {handleSubmit} className = "d-flex flex-column">
                        {message.length > 0 && <Message text = {message}/> }
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input className="form-control" name = "name" type = "text" placeholder = "Your name"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input className="form-control" name = "email" type = "email" placeholder = "example.@mail.com"></input>
                        </div> 
                        <div className="form-group">
                            <label htmlFor="text">Feedback</label>
                            <textarea className="form-control" name = "text"></textarea>
                        </div> 
                        <button type = "submit" className="Form-submit h5 py-3 px-5 b-rounded mx-auto">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

function Message(props){
    return (
        <div className = "">
            <div className = "text-center font-weight-light ml-2 mb-3 text-white bg-main p-3 b-rounded">{props.text}</div>
        </div>
    )
}

export default Form
