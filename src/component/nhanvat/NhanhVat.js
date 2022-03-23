import React, { Component } from 'react'
import KetQua from '../ketqua/KetQua'

// Thư viện để kết nối
import { connect } from 'react-redux'

 class NhanhVat extends Component {
  render() {
    // console.log(this.props);
    let {gameKeoBuaBao, dispatch} = this.props

    return (
      <div className='row mb-5' >
          <div className="col-4 nhanVatImg">
            <div className='speech-bubble'>
            <img src={gameKeoBuaBao.banChon} alt=""  style={{width: '80px'}}/>
            </div>
          <img src="./asset/img/player.png" alt="" />
          <div className="keoBuaBao">
            <button onClick={() => {
                let action = {
                  type: 'CHOI',
                  chon: './asset/img/keo.png',
                  ra: 'keo'
                }
                dispatch(action)
            } }
            >
               <img src={gameKeoBuaBao.mangKeoBuaBao[0].hinh} alt=""  style={{width: '50px', backgroundColor: 'gray', marginRight: '8px'}}/>
            </button>
          <button onClick={() => {
                let action = {
                  type: 'CHOI',
                  chon: './asset/img/bua.png',
                  ra: 'bua'
                }
                dispatch(action)
            } }
          >
          <img src={gameKeoBuaBao.mangKeoBuaBao[1].hinh}  alt=""  style={{width: '50px', backgroundColor: 'gray', marginRight: '8px'}}/>
          </button>
          <button onClick={() => {
                let action = {
                  type: 'CHOI',
                  chon: './asset/img/bao.png',
                  ra: 'bao'
                }
                dispatch(action)
            } }

          >

             <img src={gameKeoBuaBao.mangKeoBuaBao[2].hinh}  alt=""  style={{width: '50px', backgroundColor: 'gray'}}/>
          </button>
          </div>
          </div>
          <div className="col-4">
          <h2 style={{color: 'yellow'}}>I'm iron man, i love you 3000!!</h2>
          <KetQua/>
          </div>
          <div className="col-4 nhanVatImg">
          <div className='speech-bubble'>
            <img src={gameKeoBuaBao.mayChon} alt=""  style={{width: '80px'}}/>
            </div>
          <img src="./asset/img/playerComputer.png" alt="" />
          </div>
      </div>
    )
  }
}
// Đem state của redux về props  của component
const mapStateToProps = (rootReducer) =>{
  return {
    gameKeoBuaBao: rootReducer.gameReducer
  }
}

export default connect(mapStateToProps)(NhanhVat);