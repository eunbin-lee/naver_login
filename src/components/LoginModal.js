import React from 'react';
import { Link } from 'react-router-dom';

function LoginModal({ id }) {
    return (
        <div className="modal-wrapper">
            <div className="modal">
                <div className="modal-title"></div>
                <p>환영합니다 {id}님!</p>
                <div className="close-wrapper">
                    <Link id="close" to="/movie">
                        닫기
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;
