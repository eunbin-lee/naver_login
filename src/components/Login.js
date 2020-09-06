import React from "react";
import { Route } from "react-router-dom";
import KorLogin from "./KorLogin";
import EngLogin from "./EngLogin";
import KorQr from "./KorQr";
import EngQr from "./EngQr";
import KorDisposable from "./KorDisposable";
import EngDisposable from "./EngDisposable";
import SignUp from "./SignUp";
import Logo from "./Logo";
import Footer from "./Footer";
import Advertise from "./Advertise";

class Login extends React.Component {
  state = {
    mode: "Kor",
  };
  article = null;
  //희진: Naver, Netflix.js 따로  App 두개의 라우터를 만든다 path로 옮기고 movie, login
  modeControl() {
    if (this.state.mode === "Kor") {
      this.article = <Route path="/login" exact component={KorLogin} />;
    } else if (this.state.mode === "Eng") {
      this.article = <Route path="/login" exact component={EngLogin} />;
    }
  }

  render() {
    this.modeControl();

    return (
      <div className="loginWrap">
        <header className="selectLanguage">
          <select
            name="Language"
            id=""
            onChange={function (e) {
              e.preventDefault();
              this.setState({ mode: e.target.value });
            }.bind(this)}
          >
            <option value="Kor">한국어</option>
            <option value="Eng">English</option>
            <option value="한국어">한국어</option>
            <option value="한국어">한국어</option>
          </select>
        </header>

        <div className="App">
          <Logo /> {/*네이버 로고*/}
          {this.article}
          <Route path="/login/korqr" exact={true} component={KorQr} />
          <Route path="/login/engqr" exact={true} component={EngQr} />
          <Route
            path="/login/kordisposable"
            exact={true}
            component={KorDisposable}
          />
          <Route
            path="/login/engdisposable"
            exact={true}
            component={EngDisposable}
          />
          <Route path="/login/signup" exact={true} component={SignUp} />
          <Advertise />
          <Footer />
        </div>
      </div>
    );
  }
}
export default Login;
