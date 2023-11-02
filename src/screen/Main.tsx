import React from 'react';
import * as S from '../theme/style';
import { FullPage, Slide } from 'react-full-page';
import { Intro } from './Intro';
import { Tech } from './Tech';
import { Task } from './Task';
import { PcIntro } from './PcIntro';
import { useIsMobile } from '../hook/DeviceCheckHook';
import { Profile } from './Profile';

import 'animate.css';
import { colors } from '../theme/color';
import { Menu } from '../component/menu/Menu';

export const Main = () => { 

    const [page, setPage] = React.useState(0);

    const isMobile = useIsMobile();

    const [isMenuVisible, setIsMenuVisible] = React.useState(false);

    const [xy, setXY] = React.useState({x : 0, y : 0});
  
    const xyHandler = (e:any) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
  
      setXY({x : mouseX, y: mouseY});
      
    }

    React.useEffect(()=>{
      console.log(page);
    },[page])

    return (
      <S.CustomDiv onMouseMove={xyHandler}>
          <S.CustomDiv position={'aboslute'} className={'pointer'} style={{transform : `translate(${xy.x}px, ${xy.y}px)`}}>
            <S.CustomImg src={require('../assets/img/cursor.png')} width={1.5} />
          </S.CustomDiv>
          {!isMobile &&
            <S.CustomDiv
              position={'fixed'}
              top={2}
              left={2}
              style={{zIndex:99}}
            >
              <S.CustomDiv className={`menu-trigger ${isMenuVisible ? 'active' : ''}`} onClick={()=>{setIsMenuVisible(!isMenuVisible)}}>
                  <span></span>
                  <span></span>
                  <span></span>
              </S.CustomDiv>
            </S.CustomDiv>
          }
          {isMenuVisible &&
            <Menu setPage={setPage} isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} />
          }
          <FullPage
            initialSlide={page}
            scrollMode={isMobile ? 'normal' : 'full-page'}
            
          >
            {isMobile ?
              <Slide>
                <Intro />
              </Slide>
            :
              <Slide>
                <PcIntro />
              </Slide>
            }
            <Slide>
              <Profile />
            </Slide>
            <Slide>
              <Tech />
            </Slide>
            <Slide>
              <Task />
            </Slide>
          </FullPage>
          <S.CustomDiv
            position={'fixed'}
            bottom={2}
            style={{ left: '50%', transform: 'translate(-50%,0)' }}
          >
            {!isMobile &&
              <S.CustomDiv className="bounce-effect">
                <S.CustomFlex
                  flex_direction="row"
                  justify_content="center"
                  align_items="center"
                >
                  <S.CustomImg
                    width={3}
                    src={require('../assets/img/mouse_ico.png')}
                  />
                  <S.CustomImg
                    width={1.5}
                    height={2}
                    src={require('../assets/img/down-arrow.png')}
                  />
                </S.CustomFlex>
              </S.CustomDiv>
            }
          </S.CustomDiv>
      </S.CustomDiv>
    )
}