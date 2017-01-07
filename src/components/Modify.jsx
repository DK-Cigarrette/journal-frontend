import React, { Component } from 'react'
import { render } from 'react-dom';

let {
    form,
    input,
    textarea
} = React.DOM;

class Modify extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        };
    }

    componentDidMount() {
        console.log("!!!!!!!!!!!!");
        fetch("http://localhost:5001/editJournal?id=587064712736323e86d0a423", {
            method: "post",
            headers: {'Access-Control-Allow-Origin':'*', 'Content-Type': 'multipart/form-data'}})
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({ data: JSON.stringify(json)});
            });
    }

    render(){
        console.log("????????????");
        console.log(this.state.data[0]);
        // let data = JSON.stringify(this.state.data).replace(/\\/gi, '');
        // console.log(data);
        // console.log(data.content);
        return(
            form({action:"http://localhost:5001/writePosts", method:"post", encType:"multipart/form-data"},
                input({type:"hidden", name:"pageType", value:"update"}),
                input({type:"hidden", name:"id", value:"587064712736323e86d0a423"}),
                input({type:"hidden", name:"weather", value:"흐림"}),
                input({type:"file", name:"imagePath"}),
                textarea({name:"content"}),
                input({type:"submit", value:"수정"}),
            )
        );
    }
}

export default Modify