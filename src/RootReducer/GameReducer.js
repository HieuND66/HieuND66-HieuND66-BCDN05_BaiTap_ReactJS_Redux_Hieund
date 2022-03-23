let game = {
  banChon: './asset/img/keo.png',
  mayChon: './asset/img/keo.png',
  rahinh: 'keo',
  soBanThang: 0,
  tongSoBan: 0,
  mangKeoBuaBao :[
    {hinh: './asset/img/keo.png', ten: 'keo'},
    {hinh: './asset/img/bua.png', ten: 'bua'},
    {hinh: './asset/img/bao.png', ten: 'bao'},
  ]
}

export const gameReducer = (state = game, action) => {
  switch (action.type) {
    case 'CHOI' :{
      state.banChon = action.chon;
      state.rahinh = action.ra

      return {...state}
    }
    case 'PLAY_GAME': {
      let mangrand = [];
      // let rand = mangNgauNhien[Math.floor(Math.random() * mangNgauNhien.length)]
      let mangNgauNhien = ['keo', 'bua', 'bao'];
      for(let i = 0; i < mangNgauNhien.length; i++){
        let rand = mangNgauNhien[Math.floor(Math.random() * mangNgauNhien.length)];
        let obj ={
          hinh: `./asset/img/${rand}.png`,
          ten: rand
        };
        // console.log(obj);
        // console.log(mangrand.push[obj]);
        mangrand.push(obj);
      }
        // mangrand.push(obj);

      state.mayChon = mangrand[0].hinh;
      // Neu chon keo && mangrand[0].ten = bao  => thang
      // Neu chon bao && mangrand[0].ten = bua  => thang
      // Neu chon bua && mangrand[0].ten = keo  => thang
      // console.log(mangrand[0].ten);
      if(state.rahinh === 'keo' && mangrand[0].ten === 'bao' || state.rahinh === 'bao' && mangrand[0].ten === 'bua' || state.rahinh === 'bua' && mangrand[0].ten === 'keo') {
        state.soBanThang += 1;
      }
        state.tongSoBan +=1;

      return {...state}
    }

    default:
      return state
  }  
}