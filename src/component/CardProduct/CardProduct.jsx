import React, { Component, Fragment } from 'react';
import Counter from './Counter';

export class CardProduct extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="img-thumb-prod">
                            <img src="https://img-global.cpcdn.com/recipes/43d48b1f68f8a009/751x532cq70/pempek-palembang-foto-resep-utama.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Pempek Palembang</h5>
                            <p className="card-text">Rp. 34.000</p>
                            <Counter></Counter>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default CardProduct
