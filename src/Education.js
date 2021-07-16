
import React from 'react'
import "./css/Education.css"

function Education() {
    return (
        <div id = "Education" className = "bg-light">
            <div className = "bg-main text-light p-5">
                <br/><br/><br/><br/><br/><br/><br/><br/>
                <div className = "h1 font-weight-bold text-center my-5">Education</div>
                <div className = "h5 font-weight-light text-center mb-5">If you are interested in where I graduated and currently study...</div>
                <br/><br/><br/><br/><br/><br/><br/>
            </div>
            <div className = "row w-75 shift-up mx-auto">
                <div className = "Education-item shadow col-md m-3 d-flex flex-column align-items-center justify-content-center text-center p-0 b-rounded bg-dark text-light" style = {{overflow: "hidden"}}>
                    <img className = "position-absolute Education-image" src = "GRADUATION1.jpg"/>
                    <img src = "NSPM-LOGO.png" className = "Education-logo position-absolute my-5" width ="50%"/>
                    <div className = "Education-blank"></div>
                    <br/><br/><br/><br/>
                    <div className = "h4 mx-5">National School of Physics and Mathematics</div>
                    <div className = "font-weight-light my-5">Almaty, Kazakhstan</div>
                    <a href="https://almaty.fizmat.kz/" className = "Education-button font-weight-light my-5 b-rounded p-3">Visit the website</a>
                </div>

                <div className = "Education-item shadow col-md m-3 d-flex flex-column align-items-center justify-content-center text-center p-0 b-rounded bg-dark text-light" style = {{overflow: "hidden"}}>
                    <img className = "position-absolute Education-image" src = "PNU.jpeg"/>
                    <img img src = "PNU-LOGO.png" className = "Education-logo position-absolute my-5" width = "50%"/>
                    <div className = "Education-blank"></div>
                    <br/><br/><br/><br/>
                    <div className = "h4 mx-5">Pusan National University</div>
                    <div className = "font-weight-light my-5">Busan, South Korea</div>
                    <a href="https://www.pusan.ac.kr/eng/Main.do" className = "Education-button font-weight-light my-5 b-rounded p-3">Visit the website</a>
                </div>
            </div>
            <div className = "row ml-5 align-items-center">
                
            </div>
            
        </div>
    )
}

export default Education
