import React, { Component } from 'react'
import Card from './Card.jsx'
import { hostURL } from '../consts'
class CardView extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }

    updateCardList(arr = []){
        this.setState({...this.state, data: arr});
    }

    fetchCardList(){
        return fetch(`${hostURL}/api/getCards`)
            .then((res) => res.json())
            .then((json) => {
                console.log('data fetched');
                console.log(json);
                this.updateCardList(json);
            })
            .catch((reason)=>console.log(reason));
    }

    componentDidMount(){
        this.fetchCardList();
    }

    renderCards(doc){
        return doc.map((each, idx) => {
           return(<Card key={idx} doc={each} router={this.props.router} _id={idx} fetchCardList={this.fetchCardList.bind(this)}/>);
        });
    }

    render(){
        if(this.state.data.length > 0){
            return (
                <div className="app-list-cards">
                    {this.renderCards(this.state.data)}
                </div>
            );
        }
        return (<div>loading cards..</div>);
    }
}

export default CardView;