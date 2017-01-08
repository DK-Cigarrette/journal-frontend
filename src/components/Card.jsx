import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const cardStyle = {
    width: '90%',
    margin:'0 auto 50px'
};

class Cards extends Component {

    linkToModify(){
        console.log(this.props.router);
        this.props.router.push(`/modify/${this.props.doc._id}`);
    }

    showNoImage(e, src){
        http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-6.jpg
        e.target.src = "https://www.keil.com/Content/images/photo_default.png";
    }

    render(){
        let doc = this.props.doc;
        let noImage = {
            thumb: 'https://www.keil.com/Content/images/photo_default.png',
            avatar: 'http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-6.jpg'
        };

        return (
            <Card style={ cardStyle }>
                <CardHeader
                    title={doc.username}
                    subtitle={doc.username}
                    avatar={noImage.avatar}
                />
                <CardMedia
                    overlay={<CardTitle title={doc.content} />}
                >
                    <img src={doc.imagePath} onError={(e)=>this.showNoImage(e, noImage.thumb)}/>
                </CardMedia>
                <CardText>
                    {doc.weather}
                </CardText>
                <CardActions style={{textAlign:'right'}}>
                    <FlatButton label="수정" onClick={this.linkToModify.bind(this)}/>
                    <FlatButton label="삭제" />
                </CardActions>
            </Card>
        );
    }
}

export default Cards;