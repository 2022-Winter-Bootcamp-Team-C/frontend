import { Swiper, SwiperSlide } from "swiper/react"; //Swiper
import SwiperCore, { Pagination } from "swiper";
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";


import React from "react";
import Logo from '../assets/images/logo.svg';
import Sub_one from '../assets/images/side_one.svg';
import Sub_two from '../assets/images/side_two.svg';
import Sub_three from '../assets/images/side_three.svg';
import Sub_four from '../assets/images/side_four.svg';
import "./index.css";

SwiperCore.use([Pagination]);

function Index(props){
    return(
     
    <div>
      <div className="logo">
          <img src={Logo} alt="Logo"/>
     </div>

     <Swiper
      spaceBetween={50}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      pagination={{ clickable: true }}
      >

      <SwiperSlide>
          <div className = "main">
               <img className = "main-image"src={Sub_one} />
               <p className = "main-one">#잃어버린 #텅장을 #찾아서</p>
               <p className = "main-two"> SHOW ME THE MONEY </p>
               <p className = "main-three">줄줄새는 내돈<br/>꽉 잡아줄 나만의 가계부</p>
               <p className = "main-four">매일 나가는 지출, 한 눈에 보고싶다면<br/>가계부를 작성해보세요.<br/>한눈에 보기 쉬워요!</p>   
          </div>
      </SwiperSlide>
               
      <SwiperSlide>
          <div className = "main">
               <img className = "main-image"src={Sub_two} />
               <p className = "main-one">#잃어버린 #텅장을 #찾아서</p>
               <p className = "main-two"> SHOW ME THE MONEY </p>
               <p className = "main-three">줄줄새는 내돈<br/>꽉 잡아줄 나만의 가계부</p>
               <p className = "main-four">STEP 1. 회원가입 및 로그인을 합니다.</p>   
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className = "main">
               <img className = "main-image"src={Sub_three} />
               <p className = "main-one">#잃어버린 #텅장을 #찾아서</p>
               <p className = "main-two"> SHOW ME THE MONEY </p>
               <p className = "main-three">줄줄새는 내돈<br/>꽉 잡아줄 나만의 가계부</p>
               <p className = "main-four">STEP 2. 수입 및 지출을 기록해주세요.</p>   
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className = "main">
               <img className = "main-image"src={Sub_four} />
               <p className = "main-one">#잃어버린 #텅장을 #찾아서</p>
               <p className = "main-two"> SHOW ME THE MONEY </p>
               <p className = "main-three">줄줄새는 내돈<br/>꽉 잡아줄 나만의 가계부</p>
               <p className = "main-four">STEP 3. 영수증을 업로드하여 자동 가계부를 체험해보세요.</p>   
          </div>
      </SwiperSlide>
    </Swiper>
    
     </div>     
    );
}

export default Index;

{/* <div className="main"> 
<p className="main-one">#잃어버린 #텅장을 #찾아서</p>
<p className="main-two"> SHOW ME THE MONEY </p>

<p className="main-three">줄줄새는 내돈<br/>
꽉 잡아줄 나만의 가계부</p>

<p className="main-four">매일 나가는 지출, 한 눈에 보고싶다면<br/>
가계부를 작성해보세요.<br/>
한눈에 보기 쉬워요!</p>   

<img src={sub} alt="SubPicture" className="main-five"/>

</div> */}