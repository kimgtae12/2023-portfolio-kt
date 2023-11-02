import React from 'react';
import * as S from '../theme/style';

export default function MouseCursor() {

    const [xy, setXY] = React.useState({x : 0, y : 0})
  
    const xyHandler = (e:any) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
  
      setXY({x : mouseX, y: mouseY});
    }
  
    return (
        <S.CustomDiv className={'pointer'} style={{transform : `translate(${xy.x}px, ${xy.y}px)`}}>
            <S.CustomImg src={require('../assets/img/cursor.png')} width={1} />
        </S.CustomDiv>
    );
  }