import React, { Component } from 'react'
import Card from './Card.jsx'

class CardView extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount(){
        console.log(this.props);
        fetch('http://localhost:3000/api/getCards')
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                console.log(json);
                this.setState({...this.state, data:json});
            })
            .catch((reason)=>console.log(reason));
    }

    renderCards(doc){
        return doc.map((each, idx) => {
           return(<Card key={idx} doc={each} router={this.props.router}/>);
        });
    }

    render(){
        if(this.state.data.length > 0){
            return (
                <div>
                    {this.renderCards(this.state.data)}
                </div>
            );
        }
        return (<div>loading cards..</div>);
    }
}

export default CardView;