import React, { Component } from 'react'
import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';

export class Home extends Component {
    render() {
        return (
            <div>
                <h1>Youtube Component</h1>
                <hr/>
                <YoutubeComp time="7.12"  title="Lorem Ipsum1" desc="Lorem ipsum skalalalalala1" image="https://images.unsplash.com/photo-1564817177974-9b947bb4b463?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                <YoutubeComp time="13.78" title="Lorem Ipsum2" desc="Lorem ipsum skalalalalala2" image="https://images.unsplash.com/photo-1519073147904-23e655032ea3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                <YoutubeComp time="20.89" title="Lorem Ipsum3" desc="Lorem ipsum skalalalalala3" image="https://images.unsplash.com/photo-1528008906971-5a6c444a9a4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                <YoutubeComp time="45.32" title="Lorem Ipsum4" desc="Lorem ipsum skalalalalala4" image="https://images.unsplash.com/photo-1508530786855-dfea35260b8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <YoutubeComp time="56.89" title="Lorem Ipsum5" desc="Lorem ipsum skalalalalala5" image="https://images.unsplash.com/photo-1551669850-26e6f40757e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                <YoutubeComp/>
            </div>
        )
    }
}

export default Home
