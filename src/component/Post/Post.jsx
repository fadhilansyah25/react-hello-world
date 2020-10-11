import React from 'react'

const Post = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://placeimg.com/640/480/tech" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title" onClick={() => props.goDetails(props.data.id)}>{props.data.title}</h5>
                <p className="card-text">{props.data.body}</p>
            </div>
            <div className="d-flex">
                <button onClick={() => props.update(props.data)} className="btn btn-primary update-btn">Update</button>
                <button onClick={() => props.remove(props.data.id)} className="btn btn-danger remove-btn">Remove</button>
            </div>
        </div>
    )
}

export default Post