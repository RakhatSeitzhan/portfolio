import React from 'react'
import Carousel from './Carousel.js'
import './css/Exp.css'
function Exp() {
    const items = [
        {title: "Satypall", img: "MAC FRAME.png", info: "E-commerce shop prototype", used: "REACT, Firebase, NodeJS, Express, RestAPI, MongoDB, CSS, JS"},
        {title: "Spotipage", img: "SPOTIPAGE.png", info: "Spotify data visualizations and musics suggestions based on the data", used: "NodeJS, Express, D3JS, Spotify API, CSS, Bootstrap, JS"},
        {title: "Pathfinder", img: "PATHFINDER.png", info: "Pathfinding and maze generating algorithms visualizer", used: "HTML, CSS, JS"},
        {title: "RSeitzhan", img: "PORTFOLIO.png", info: "My page where I gather my best projects and information about me", used: "REACT, NodeJS, Express, MongoDB, Bootstrap, JS"}
    ]
    return (
        <div id = "Exp" className = "d-flex flex-column align-items-center">
            <div className = "container-fluid bg-main p-5">
                <div className = "h1 font-weight-bold text-white text-center mt-5 mb-5">Experience</div>
                <div className = "h5 font-weight-light text-white text-center mb-5">These are my recent projects</div>
                <br/><br/><br/><br/><br/><br/>
            </div>
            <Carousel items = {items}/>
            <div className = "d-flex mb-5">
                <div className = "h4">See more on my</div>
                <a href = "https://github.com/RakhatSeitzhan" className = "Exp-link h4 ml-2">GitHub</a>
            </div>
            <Collaborate/>
        </div>
    )
}
function Collaborate(){
    return(
        <div className = "Collaborate row w-75 align-items-center justify-content-around text-center p-5 b-rounded shadow bg-dark text-white">
            <div className = "h5 col-md-6">Interested in collaborating with me?</div>
            <a href="mailto:r.seitzhan.r@gmail.com" className = "Exp-button col-md-3 m-3 py-3 h5 b-rounded ">Email me!</a>
        </div>
    )

}

export default Exp
