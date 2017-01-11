import React, { Component } from 'react'
import { render } from 'react-dom';
import {hostURL} from '../consts';

let {
    form,
    input,
    textarea,
    img
} = React.DOM;

export default class ModifyForm extends Component {
    render(){
        console.log(this.props.data);
        return (
                form({action:`${hostURL}/editJournal`, method:"post", encType:"multipart/form-data"},
                input({type:"hidden", name:"pageType", value:"update"}),
                input({type:"hidden", name:"id", value:this.props.data._id}),
                input({type:"text", name:"weather", value:this.props.data.weather}),
                input({type:"text", name:"username", value:this.props.data.username}),
                img({src:this.props.data.imagePath}),
                input({type:"file"}),
                textarea({name:"content", value:this.props.data.content}),
                input({type:"submit", value:"수정"}),
        ));
    }
}
