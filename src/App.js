import React from 'react';
import './App.css';
import Logo from './components/Logo';
import Login from './components/Login';
import Footer from './components/Footer';
import Simplelogin from './components/Simplelogin';
import Advertise from './components/Advertise';

class App extends React.Component {
  state={
    mode: 'kor'
  }
  render(){
    return (
      <div className="loginWrap">
        <header className="selectLanguage">
          <select 
            name="Language" 
            id=""  
            onClick={(e) => {
              console.log(e.target.value);
              if(e.target.value === 'English') {
                this.props.onChange({
                  
                });
            }
          }}>
            <option value="한국어">한국어</option>
            <option value="English">English</option>
            <option value="한국어">한국어</option>
            <option value="한국어">한국어</option>
          </select>
        </header>

        <div className="App">
          <Logo />{/*네이버 로고*/}
          <Login />
          <hr className="line" />
          <Simplelogin />
          <Advertise />
          <Footer />        
        </div>
      </div>
    );
  }
}

export default App;