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
        fetch("http://localhost:5001/editJournal?id=" + this.props.params.id, {method: "post"})
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({...this.state, data: json});
            });
    }

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