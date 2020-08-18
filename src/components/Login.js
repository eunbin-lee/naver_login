import React from 'react';

class Login extends React.Component {
    render() {
        return(
            <form className="inputForm">
                <input type="text" className="input" placeholder="아이디" />
                <input type="text" className="input" placeholder="비밀번호" />
                <input type="button" className="loginBtn" value="로그인"/>
                <label htmlFor="" className="loginState">
                <input type="checkbox" name="로그인 상태 유지" id=""/>로그인 상태 유지
                </label>
                <label htmlFor="" className="ipSecurity">
                IP보안<input type="checkbox" name="IP보안" id=""/>
                </label>
            </form>
        );
    };
};

export default Login;