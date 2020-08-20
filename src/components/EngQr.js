import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function KorQr(){
    const [count,setCount]=useState(180);
    const random=Math.floor(Math.random()*100);

    const timer=()=>{
        setCount(count-1);
        console.log(count);
    }
    //setInterval(timer,1000);

    return(
        <>
            <div className="qrcodeWrap">
            <h2>Sign in with QR code</h2>
            <p>After shooting a QR code with a mobile device, <br/>Press <span id="qr_number">[{random}]</span>among the numbers on the pc screen.<br />You will be signed into the PC with your account.</p>
            <div className="qrcode"></div>
            <p className="qr_left">Valid Time <span id="qr_time">0{count/60}:{((count%60)<10)?0:null}{count%60}</span></p>
            </div>
            <Link className="qr_exit" to='/'>Cancel</Link>
        </>
    );
}

export default KorQr;