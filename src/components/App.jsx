import React, { Component } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'



const initialState = {
    auth: false,
    username: '',
    profileImg: '',

};

class App extends Component {
    constructor(){
        super();
        this.state = initialState;
    }

    render(){
        return (
            <div className="app-wrap">
                <header className="app-header">
                    <h1 className="app-tit">신기소</h1>
                    <Header />
                </header>
                <main className="app-main">
                    <h2 className="screen_out">Main</h2>
                    {this.props.children}
                </main>
                <footer className="app-footer">
                    <h2 className="screen_out">Footer</h2>
                    <Footer/>
                </footer>
            </div>
        );
    }
}

export default App