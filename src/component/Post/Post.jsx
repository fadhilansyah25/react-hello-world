import React from 'react'

const Post = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://placeimg.com/640/480/tech" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
            </div>
        </div>
    )
}

export default Post