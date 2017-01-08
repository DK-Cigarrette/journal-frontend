import React, { Component } from 'react'
import ModifyForm from './ModifyForm.jsx'

class Modify extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:3000/editJournal?id=" + this.props.params.id, {method: "post"})
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({...this.state, data: json});
            });
    }

    //POST       http://localhost:5000/Modify/5870bc1af7dd410f9f038f08
    render(){
        if(this.state.data.length == 0){
            return(<div>
                <h1>data fetching..</h1>
            </div>);
        }
        return(
            <ModifyForm data={this.state.data[0]}/>
        );
    }
}

export default Modify