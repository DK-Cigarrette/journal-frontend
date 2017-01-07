import React, { Component } from 'react'
import ModifyForm from './ModifyForm.jsx'

let {
    form,
    input,
    textarea
} = React.DOM;

class Modify extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        console.log("!!!!!!!!!!!!");
        fetch("http://localhost:3000/editJournal?id=587064712736323e86d0a423", {method: "post"})
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