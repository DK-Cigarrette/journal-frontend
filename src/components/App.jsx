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

    updateState(newState){
        let prevState = this.state;
        this.setState({...prevState, ...newState}); // 중요!! state 업데이트를 위해서 이렇게 씀
    }

    render(){
        // 자식 컴포넌트에 App을 가리키는 업데이트 함수 전달하기 위해 오브젝트 복사
        let children = React.cloneElement(this.props.children, {
            mainState: this.state,
            updateState: this.updateState.bind(this)
        });

        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div className="app-wrap">
                    <Header />
                    <main className="app-main">
                        <h2 className="screen_out">Main</h2>
                        {children}
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