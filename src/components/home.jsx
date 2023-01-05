import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

import React from "react";
import logo from '../assets/images/logo.svg';
import sub from '../assets/images/Side.svg';
import "./home.css";

SwiperCore.use([Navigation, Pagination]);

function Home(props){
    return(
    <div>
        <body>
                <div className="logo">
                     <img src={logo} alt="Logo"/>
                </div>
                
               <div className="main"> 
                    <p className="main-one">#잃어버린 #텅장을 #찾아서</p>
                    <p className="main-two"> SHOW ME THE MONEY </p>
                    
                    <p className="main-three">줄줄새는 내돈<br/>
                    꽉 잡아줄 나만의 가계부</p>

                    <p className="main-four">매일 나가는 지출, 한 눈에 보고싶다면<br/>
                    가계부를 작성해보세요.<br/>
                    한눈에 보기 쉬워요!</p>   
                    
                   
                         <img src={sub} alt="SubPicture" className="main-five"/>
           
                </div>
                </body>
     </div>     
    );
}

export default Home;