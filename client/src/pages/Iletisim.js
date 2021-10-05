import React from 'react'
import { Avatar } from '@material-ui/core';
import Navbar from '../components/Navbar';

export default function Iletisim() {
    return (
        <>
        <Navbar/>
        <div className="iletisim" style={{textAlign:'center',marginTop:'20px'}}>
            <div>
            <Avatar style={{width:'150px',height:'150px',margin:'auto'}} alt="Remy Sharp" src="https://i.pinimg.com/originals/30/50/46/305046e16d46bf80bd5c3bc558558380.jpg"/></div>
            <div style={{maxWidth:'600px',margin:'auto'}}>
                <div>Mustafa Yeşilnacar</div>
                <div>Ankara Üniversitesi Matematik bölümünden mezunum Yazılım ve Web Geliştirme üzerine çalışmalar yapmaktayım.</div>
                <div>Özellikle Web Tasarım bölümüne hakim olmakla beraber aşağıdaki diller hakkında bilgi sahibiyim</div>
                <div>HTML,CSS,FLEXBOX,BOOTSTRAP,JAVASCRİPT,REACTJS,REDUX,OFFİCE PROGRAMLARI</div>
            </div>
            <div style={{fontSize:'30px',backgroundColor:'lightgray',maxWidth:'600px',margin:'auto',borderRadius:'10px',marginTop:'10px'}}>
                <span className="mx-2"><i class="fab fa-instagram-square"></i></span>
                <span className="mx-2"><i class="fab fa-whatsapp"></i></span>
                <span className="mx-2"><i class="fab fa-facebook-f"></i></span>
                <span className="mx-2"><i class="fab fa-github"></i></span>
                <span className="mx-2"><i class="fas fa-mobile-alt"></i></span>
                <span className="mx-2"><i class="fab fa-r-project"></i></span>
            </div>
        </div>
        </>
    )
}
