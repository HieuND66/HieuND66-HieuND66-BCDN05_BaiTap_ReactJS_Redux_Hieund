import { type } from '@testing-library/user-event/dist/type'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQua extends Component {
  render() {

    let {gameKeoBuaBao, dispatch} = this.props
    return (
      <div>
        <p >Số bàn tháng: <span className='text-warning' >{gameKeoBuaBao.soBanThang}</span></p>
        <p>Tổng số bàn chơi: <span className='text-warning' >{gameKeoBuaBao.tongSoBan}</span></p>
        <button className='btn btn-success' onClick={() =>{
               let action = {
                type: 'PLAY_GAME'
              }
              dispatch(action)
        }}
        
        >Play Game</button>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) =>{
  return {

    gameKeoBuaBao: rootReducer.gameReducer
  }
}

export default connect(mapStateToProps)(KetQua)
