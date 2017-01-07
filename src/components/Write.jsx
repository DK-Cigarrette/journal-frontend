import React, { Component } from 'react'

class Write extends Component {
    render() {

        function getZeroText(num) {
            if(num<10) {
                return "0"+num;
            } else {
                return num;
            }
        }

        function getTime() {

            let dateObj=new Date();
            let year=dateObj.getFullYear();
            let month=getZeroText(dateObj.getMonth() + 1);
            let day=getZeroText(dateObj.getDate());
            let hour=dateObj.getHours();
            let minute=getZeroText(dateObj.getMinutes());
            let am_pm="";

            if(hour===0){
                am_pm="오후";
            } else if(hour < 13) {
                am_pm="오전";
            } else {
                hour-=12;
                am_pm="오후";
            }
            hour=(hour===0)?12:hour;
            hour=getZeroText(hour);
            return year+"년 "+ month +"월 "+ day +"일 "+am_pm+" "+ hour + "시 "+ minute +"분";
        }

        const createAt=getTime();

        return(
            <div>
                <img className="preview"/>
                <form action="/writePosts" method="POST" encType="multipart/form-data" id="writeForm">
                    <input type="hidden" defaultValue={createAt} name="createAt" id="createAtText" />
                    <h1>{createAt}</h1>
                    <select id="weather">
                        <option value="맑음">맑음</option>
                        <option value="비">비</option>
                        <option value="눈">눈</option>
                        <option value="흐림">흐림</option>
                    </select> <br/>
                    <input type="hidden" defaultValue="scarlett.kim" name="username" />
                    <textarea name="content"/> <br/>
                    <input type="file" name="imagePath" /><br/>
                    <input type="submit" defaultValue="등록"/>
                </form>
            </div>
        );
    }
}
export default Write