import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import { hostURL } from '../consts'

const selectItems = ['맑음', '흐림', '미세먼지 극혐', '쌀쌀', '비'];
const fields = [
    {
        name: 'username',
        type: 'text',
        hintText: '작성자',
        defaultValue: 'zach.jung'
    },
    {
        name: 'createAt',
        type: 'text',
        hintText: '작성일',
        defaultValue: new Date(),
        disabled: true
    },
    {
        name: 'weather',
        type: 'select',
        hintText: '오늘의 날씨',
        item: selectItems
    },
    {
        name: 'content',
        type: 'textarea',
        hintText: '내용을 입력 고고고'
    },
    {
        name: 'imagePath',
        type: 'file',
        hintText: '이미지 업로드'
    }
];


export default class WriteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            createAt: fields[1].defaultValue,
            username: fields[0].defaultValue,
            weather: '맑음',
            content:''
        };
    }

    renderAllFields(){
        return fields.map( (each, idx) => {
            switch(each.type) {
                case 'select':
                    return this.renderSelectField(each, idx);
                case 'file':
                    return this.renderFileField(each, idx);
                default:
                    return this.renderTextFields(each, idx)
            }
        });
    }


    renderSelectField(each, idx){
        return(
            <SelectField value={selectItems.indexOf(this.state.weather)} key={idx} hintText={each.hintText} onChange={this.handleSelect.bind(this)}>
                {each.item.map((menu, idx)=> <MenuItem key={idx} value={idx} primaryText={menu}/>)}
            </SelectField>
        );
    }

    renderFileField(each, idx){
        return(
            <div key={idx}>
                <input ref="imageFile" type={each.type} name={each.name} placeholder={each.hintText} style={{margin:'15px 0'}}/>
            </div>
        );
    }

    renderTextFields(each, idx){
        return (
            <TextField name={each.name}
                       key={idx}
                       hintText={each.hintText}
                       multiLine={each.type ==='textarea'}
                       disabled={!!each.disabled}
                       onChange={this.handleChange.bind(this)}
                       defaultValue={each.defaultValue}
            />
        );
    }

    handleSelect(a, idx){
        this.setState({...this.state, weather: selectItems[idx]}, ()=>{console.log(this.state)});
    }

    handleChange(evt){
        let newState = {...this.state};
        newState[evt.target.name] = evt.target.value;
        this.setState(newState, ()=>{console.log(this.state)});
    }

    getFormData(){
        let data = new FormData();
        let state = this.state;
        for(let key in state){
            if(state.hasOwnProperty(key)){
                if(!state[key] || state[key].length == 0)return false;
                data.append(key, state[key]);
            }
        }
        data.append('imagePath', this.refs.imageFile.files[0]);
        return data;
    }

    submitFormData(){
        let data = this.getFormData();
        if(!data){
            alert('값을 모두 입력하시오!');
            return false;
        }

        let request = new Request(`${hostURL}/writePosts`, {
            method: 'POST',
            body: data
        });

        fetch(request).then((res)=>{
            if(res.ok){
                this.props.router.push('/');
            }else{
                throw new Error(res.statusText);
            }
        }).catch(err => console.log('Failed to write a post', err));
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.submitFormData();
    }

    render(){
        return (
            <form className="app-form-write" onSubmit={this.handleSubmit} encType="multipart/form-data">
                <h3 className="title-form">글 입력</h3>
                {this.renderAllFields()}
                <RaisedButton label="글쓰기" style={{width:'80%', margin:'0 auto'}} onClick={this.handleSubmit.bind(this)}/>
            </form>
        );
    }
}