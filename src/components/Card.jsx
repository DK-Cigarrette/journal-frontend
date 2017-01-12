import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {hostURL} from '../consts'
const animationDuration = 100;
const cardStyle = {
    width: '90%',
    position:'relative',
    left:0,
    margin:'0 auto 50px',
    transition: `all ${animationDuration}ms ease-out`
};

const noImage = {
    thumb: `${hostURL}/images/noImage_cards.png`,
    avatar: 'http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-6.jpg'
};


class Cards extends Component {
    linkToModify(){
        this.props.router.push(`/modify/${this.props.doc._id}`);
    }

    animateBeforeDelete(){
        let card  = document.querySelectorAll('.app-list-cards .cards')[this.props._id];
        card.style.transform = `translateX(${window.innerWidth}px)`;
        card.style.opacity = '0';
    }

    showNoImage(e){
        let target = e.target;
        target.src = noImage.thumb;
        target.dispatchEvent(new CustomEvent('loaded:noImage'));
    }

    deleteCard(){
        let _id = this.props.doc._id;
        let shouldDeleteCard = window.confirm(`이 글을 지우겠습니까?`);
        if(shouldDeleteCard){
            let request = new Request(`${hostURL}/api?_id=${_id}`, {
                method: 'DELETE',
                headers: new Headers({'Content-type': 'text/plain'})
            });

            fetch(request).then((res)=>{
                console.log('Card has been deleted');
                this.props.fetchCardList();
            }).catch(err => console.log('Failed to delete a card', err));
        }
    }

    //TODO: 업데이트 되었을 때 카드 스타일 초기화 시키기

    componentDidMount(){
        let images = [...document.querySelectorAll('.thumb-main')];
        images.forEach((img) => {
            let handler =  this.showNoImage;
            img.addEventListener('error', handler);
            img.addEventListener('loaded:noImage', () => {
                img.removeEventListener('error', handler);
            });
        });
    }

    render() {
        let doc = this.props.doc;
        return (
            <Card style={ cardStyle } className="cards" ref="card">
                <CardHeader title={doc.username} subtitle={doc.username} avatar={noImage.avatar}/>
                <CardMedia overlay={<CardTitle title={doc.createAt} subtitle={doc.weather} titleStyle={{fontSize:'14px'}}/>}>
                    <img src={doc.imagePath} className="thumb-main"/>
                </CardMedia>
                <CardText>{doc.content}</CardText>
                <CardActions style={{textAlign:'right'}}>
                    {/*<FlatButton label="수정" onClick={this.linkToModify.bind(this)}/>*/}
                    <FlatButton label="삭제" onClick={this.deleteCard.bind(this)}/>
                </CardActions>
            </Card>
        );
    }
}

export default Cards;