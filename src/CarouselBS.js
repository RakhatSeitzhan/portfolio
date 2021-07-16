import React from 'react'
function Item(props){
    let classname = "carousel-item bg-secondary text-white p-5"
    if (props.id == 0)classname += " active"
    return (
        <div className= {classname}>
            <div className = "h1 font-weight-bold text-center">{props.title}</div>
            <img className = "d-block w-100" src={props.img}/>
            <div className = "h3 font-weight-light text-center">{props.info}</div>
        </div>
    )
}
function CarouselBS(props) {
    return (
        <div id="carouselExampleIndicators" className="carousel slide bg-dark" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                {props.items.map((item,index) => {
                    return <Item
                        title = {item.title}
                        img = {item.img}
                        info = {item.info}
                        key = {index}
                        id = {index}
                    />
                })}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default CarouselBS
