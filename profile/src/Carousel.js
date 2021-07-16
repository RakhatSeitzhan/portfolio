import React, { useState } from 'react'
import "./css/Carousel.css"
const widthChange = 3 // persents 
const offsetChange = 4 // pixels
const i_offset = 30 // pixels
const i_width = 100 // percent
function Item(props) {
    const z = 30 - Math.abs(props.current - props.id)
    const width = i_width - Math.abs(props.current - props.id) * widthChange
    const offset = (props.id - props.current)*(i_offset - Math.abs(props.id - props.current)*offsetChange)
    const style = {
        transform: `translateY(${offset}px)`,
        zIndex: `${z}`,
        width: `${width}%`,
        transition: 'all 0.7s'
    }
    const opacity = props.id == props.current ? 1 : 0
    const contentStyle = {
        opacity: `${opacity}`,
        transition: 'all 0.2s'
    }
    return (
        <div className = "carousel_item bg-white shadow position-absolute" style = {style} onClick ={props.next}>
            <div className = "carousel_row row px-5">
                <div className = "col-md-5 pb-5">
                    <div className = "h2 my-5 text-main text-center" style = {contentStyle}>{props.title}</div>
                    <div className = "h5 ml-5" style = {contentStyle}>{props.info}</div>
                </div>
                <div className = "col-md-7 p-0 d-flex align-items-center justify-content-center">
                    <img className = "carousel_image" style = {contentStyle} src = {props.img}/>
                </div>
                
            </div>
        </div>
    )
}

function Carousel(props) {
    const [currentItem, setCurrentItem] = useState(0)
    const nextPage = () => {
        if (currentItem == props.items.length-1) setCurrentItem(0)
        else setCurrentItem(currentItem+1)
    }
    return (
        <div className = "carousel_container container d-flex flex-column align-items-center">
            {props.items.map((item, index) =>
                <Item 
                    title = {item.title}
                    img = {item.img}
                    info = {item.info}
                    key = {index}
                    id = {index}
                    current = {currentItem}
                    next = {nextPage}
                />
            )}
        </div>
    )
}

export default Carousel
