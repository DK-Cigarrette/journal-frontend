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
                input({type:"hidden", name:"id", defaultValue:this.props.data._id}),
                input({type:"text", name:"username", defaultValue:this.props.data.username}),
                    <select id="weather">
                        <option value="맑음">맑음</option>
                        <option value="비">비</option>
                        <option value="눈">눈</option>
                        <option value="흐림">흐림</option>
                    </select>,
                img({src:this.props.data.imagePath}),
                input({type:"file"}),
                textarea({name:"content", defaultValue:this.props.data.content}),
                input({type:"submit", defaultValue:"수정"}),
        ));
    }
}
