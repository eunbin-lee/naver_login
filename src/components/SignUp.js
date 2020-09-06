import React from "react";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <form
          id="textarea"
          action="/#/login"
          method="post"
          onSubmit={(e) => {
            // e.preventDefault();를 쓰면 action의 값은 받아오지만 페이지 이동이 안 됨
            const signUp = "signUp";
            const signUpList = [];
            const LS_item = JSON.parse(localStorage.getItem(signUp));
            if (LS_item !== null) {
              signUpList.push(...LS_item);
            }
            const signUpObject = {
              id: e.target.id.value,
              pw: e.target.pw.value,
            };
            console.dir(e.target);
            signUpList.push(signUpObject);
            localStorage.setItem(signUp, JSON.stringify(signUpList));
            // window.location.href = "http://localhost:3000/";
          }}
        >
          <input name="id" type="text" placeholder="아이디" className="input" />
          <input
            name="pw"
            type="password"
            placeholder="비밀번호"
            className="input"
          />
          <input type="submit" className="loginBtn" value="회원가입" />
          <div>
            <Link to="/login" className="backToHome">
              취소
            </Link>
          </div>
          <ul>{this.liList}</ul>
        </form>
      </div>
    );
  }
}

export default SignUp;
