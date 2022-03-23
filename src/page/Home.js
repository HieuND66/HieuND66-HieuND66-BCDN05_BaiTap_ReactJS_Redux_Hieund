import React, { Component } from 'react'
// import KetQua from '../component/ketqua/KetQua'
import NhanhVat from '../component/nhanvat/NhanhVat'
import bg from "../asset/img/bgGame.png";
import './home.css'
export default class Home extends Component {
  render() {
    return (
      
      <div className='home-game container-fluild' style={{backgroundImage: `url(${bg})`}}>

        <NhanhVat/>
        {/* <KetQua/> */}
      </div>
    )
  }
}
