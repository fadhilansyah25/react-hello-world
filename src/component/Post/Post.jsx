import React from 'react'

const Post = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://placeimg.com/640/480/tech" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.data.title}</h5>
                <p className="card-text">{props.data.body}</p>
            </div>
            <button onClick={() => props.remove(props.data.id)} className="btn btn-danger remove-btn">Remove</button>
        </div>
    )
}

export default Post