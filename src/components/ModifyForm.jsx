import React, { Component } from 'react'
import { render } from 'react-dom';

let {
    form,
    input,
    textarea
} = React.DOM;

export default class ModifyForm extends Component {
    render(){
        console.log(this.props.data);
        return (
                form({action:"http://localhost:5001/writePosts", method:"post", encType:"multipart/form-data"},
                input({type:"hidden", name:"pageType", value:"update"}),
                input({type:"hidden", name:"id", value:"587064712736323e86d0a423"}),
                input({type:"hidden", name:"weather", value:"흐림"}),
                input({type:"file", name:"imagePath"}),
                textarea({name:"content"}),
                input({type:"submit", value:"수정"}),
        ));
    }
}
