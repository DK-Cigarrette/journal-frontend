import React, { Component } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

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
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div className="app-wrap">
                    <Header />
                    <main className="app-main">
                        <h2 className="screen_out">Main</h2>
                        {this.props.children}
                    </main>
                    <footer className="app-footer">
                        <h2 className="screen_out">Footer</h2>
                        <Footer/>
                    </footer>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App