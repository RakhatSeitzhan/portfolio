import React from 'react'
import './css/Awards.css'
function Item(props) {
    const award = props.award == "Gold medal" ? 'gold' : 'silver'
    return (
        <div className = "Awards-item col-md b-rounded shadow bg-white m-2 d-flex flex-column align-items-center text-center">
            <img className = "Awards-medal position-absolute" src={props.medal} width="20%"/> 
            <br/><br/><br/>
            <img className = "mt-4 mb-5" src = {props.img} width = '40%'/>
            <div className = "h4">{props.title}</div>
            <div className = {`Awards-${award} h3 mt-5 mb-5 font-weight-bold`}>{props.award}</div>
            <div className = "font-weight-light mt-auto">{props.place}</div>
            <div className = "font-weight-light">{props.date}</div>
            <br/><br/><br/>
        </div>
    )
}

function Awards() {
    return (
        <div id = "Awards" className = "bg-light">
            <div className = "bg-main text-light p-5">
                <div className = "h1 font-weight-bold text-center mb-5 mt-5">Awards and Honors</div>
                <div className = "h5 text-center">I am pretty enthusiastic about competetiveness, so here are some of my achievements :)</div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
            <div className = "container-fluid shift-up w-75">
                <div className = "row justify-content-center">
                    <Item 
                        title = "Asia International Mathematics Olympiad"
                        award = "Gold medal"
                        place = "Taipei, Taiwan" 
                        date = "August 2019"
                        id = "0"
                        img = "AIMO LOGO.png"
                        medal = "GOLD MEDAL.png"
                    />
                    <Item 
                        title = "World Mathematical Games"
                        award = "Silver medal"
                        place = "Taipei, Taiwan" 
                        date = "August 2019"
                        id = "1"
                        img = "AIMO LOGO.png"
                        medal = "SILVER MEDAL.png"
                    />
                </div>
                <div className = "row justify-content-center">
                    <Item 
                        title = "Mathematics Without Borders"
                        place = "Nesebar, Bulgaria" 
                        award = "Silver medal"
                        date = "June 2019"
                        id = "2"
                        img = "MWB.png"
                        medal = "SILVER MEDAL.png"
                    />
                    <Item 
                        title = 'Autumn Round of Mathematics Without Borders'
                        award = "Silver medal"
                        place = "Almaty, Kazakhstan" 
                        date = "October 2018"
                        id = "3"
                        img = "MWB.png"
                        medal = "SILVER MEDAL.png"
                    />
                </div>
            </div>
        </div>
    )
}



export default Awards
