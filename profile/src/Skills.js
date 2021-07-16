import React from 'react'
import './css/Skills.css'
function Skills() {
    return (
        <div id = "Skills" className = "container-fluid w-75 bg-white shadow">
            <div className = "row text-center">
                <div className = "col b-r px-3">
                <br/><br/>
                    <div className = "h2 my-5">Front-end developer</div>
                    <div className = "text-main my-5">Framworks and libraries I use:</div>
                    <div className = "mb-5">
                        <div>REACT</div>
                        <div>Bootstrap</div>
                        <div>CSS</div>
                        <div>JQuery</div>
                        <div>D3JS</div>
                        <br/><br/>
                    </div>
                </div>

                <div className = "col b-r b-l px-3">
                    <br/><br/>
                    <div className = "h2 my-5">Back-end developer</div>
                    <div className = "text-main my-5">Like to work with:</div>
                    <div className = "mb-5">
                        <div>Git</div>
                        <div>NodeJS</div>
                        <div>Express</div>
                        <div>MongoDB</div>
                        <div>Firebase</div>
                        <div >Javascript</div>
                        <br/><br/>
                    </div>
                </div>
                    
                <div className = "col b-l px-3">
                    <br/><br/>
                    <div className = "h2 my-5">Designer</div>
                    <div className = "text-main my-5">Tools I prefer:</div>
                    <div className = "mb-5">
                        <div>Figma</div>
                        <div className = "mb-5">Adobe photoshop</div>
                        <br/><br/>
                    </div>
                </div>
            </div>
            {/* <div className = "row text-center">
                <div className = "Skills-i1 col-4 border-right b-g-r px-3">
                    
                </div>
                <div className = "Skills-i2 col-4 border-right border-left b-g-r b-g-l">
                    
                </div>
                <div className = "Skills-i3 col-4 border-left b-g-l">
                    
                </div>
            </div> */}
        </div>
    )
}

export default Skills
