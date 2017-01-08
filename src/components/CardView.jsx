import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const userInfo = {
    username: 'zach.jung',
    userEmail: 'doublejnu@gmail.com',
    userAvatar: 'http://pixel.nymag.com/imgs/daily/vulture/2016/01/22/22-avatar.w529.h529.jpg',
};

const mockDoc = {
    title: '알밥정식 vs 돈까스정식',
    subtitle: '신기소 메뉴 결정전',
    content: '뭘먹든 내일도 신기소 고고',
    imageSrc: 'http://mblogthumb4.phinf.naver.net/20141105_191/kini55_1415149249704gnXrm_JPEG/2.jpg?type=w2'
};

const cardStyle = {
    width: '90%',
    margin:'0 auto 50px'
};

class CardView extends Component {

    linkToModify(){
        this.props.router.push('/modify/adasdsad');
    }

    render(){
        let doc = this.props.doc || mockDoc;

        return (
            <Card style={ cardStyle }>
                <CardHeader
                    title={userInfo.username}
                    subtitle={userInfo.userEmail}
                    avatar={userInfo.userAvatar}
                />
                <CardMedia
                    overlay={<CardTitle title={doc.title} subtitle={doc.subtitle} />}
                >
                    <img src={doc.imageSrc} />
                </CardMedia>
                <CardText>
                    {doc.content}
                </CardText>
                <CardActions style={{textAlign:'right'}}>
                    <FlatButton label="수정" onClick={this.linkToModify.bind(this)}/>
                    <FlatButton label="삭제" />
                </CardActions>
            </Card>
        );
    }
}

export default CardView;