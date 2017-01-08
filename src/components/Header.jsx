import React, { Component } from 'react'
import ActionHome from 'material-ui/svg-icons/action/home';
import { Link } from 'react-router'

let homeBtnStyle = {

};

class Header extends Component {
    render(){
        const writeStyle= {
            float : 'right'
    };
        return (
            <header className="app-header">
                <h1 className="app-tit">
                    <Link to="/" className="link-home">
                        <ActionHome color="#fff" hoverColor="#AD1457" style={{
                            float:'left',
                            width:'25px',
                            height:'25px'
                        }}/>
                        <span className="tit-text">신기소</span>
                    </Link>
                </h1>
                <h1>
                    <Link to="/writeForm" className="link-write" style={writeStyle}>글쓰기
                    </Link>
                </h1>
            </header>
        );
    }
}

export default Header