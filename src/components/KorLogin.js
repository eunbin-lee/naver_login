import React from 'react';
import {Link} from 'react-router-dom';

class KorLogin extends React.Component {
    render() {
        return(
            <>
                <form className="inputForm">
                    <input type="text" className="input" placeholder="아이디" />
                    <input type="text" className="input" placeholder="비밀번호" />
                    <input type="button" className="loginBtn" value="로그인" />
                    <label htmlFor="" className="loginState">
                        <input type="checkbox" name="로그인 상태 유지" id=""/>
                        로그인 상태 유지
                    </label>
                    <label htmlFor="" className="ipSecurity">
                        IP 보안
                        <input type="checkbox" name="IP보안" id=""/>
                    </label>
                </form>
                <hr className="line" />
                <h2 className="easyLogin">더욱 간편한 로그인</h2>
                <div className="easyWay">
                    <ul className="easyWayBtns">
                        <li className="qrCode"><Link to="/korqr">QR코드 로그인</Link></li>
                        <li className="disposable"><Link to="/disposable">일회용 번호 로그인</Link></li>
                    </ul>
                    <ul className="findAccount">
                        <li><a href="/">아이디 찾기</a></li>
                        <li><a href="/">비밀번호 찾기</a></li>
                        <li><a href="/">회원가입</a></li>
                    </ul>
                </div>
            </>
        );
    };
};

export default KorLogin;