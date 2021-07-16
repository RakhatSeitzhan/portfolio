import React, {useEffect, useState} from 'react'

function Feedbacks() {
    const [feedbacks, setFeedbacks] = useState([])
    
    useEffect(()=>{
        fetch('http://localhost:3001/api/get', {
            method: 'GET',
            headers: { "Content-Type": "application/json" },
        }).then(raw => {
            raw.json().then(data => {
                setFeedbacks(data)
            })
        })
    },[])
    
    return (
        <div id = "Feedback" className = "container-fluid d-flex flex-column align-items-center">
            <div className = "h1 font-weight-bold text-center m-4">Feedbacks</div>
            <div className = "container-fluid d-flex flex-column w-75 mb-4">
                {   feedbacks.length > 0 ? 
                    feedbacks.map((item, index) =>  <Card key = {index} name = {item.name} email = {item.email} text = {item.text}/>) 
                    : <div className = "h4 text-muted font-weight-light text-center mb-4">Seems that there are no feedbacks currently :(</div>}
            </div>
        </div>
    )
}

function Card(props){
    return (
        <div className = "card p-3 m-1">
            <div className = "h4 font-weight-light ml-2">{props.name}</div>
            <div className = "font-weight-light ml-2 mb-3">{props.text}</div>
        </div>
    )
}

export default Feedbacks
