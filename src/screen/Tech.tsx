import React, { useEffect } from 'react';

import * as S from '../theme/style';
import * as TS from '../component/Tech/TechStyle';
import { colors } from '../theme/color';
import RreactQueryImg from '../assets/img/react-query.svg';
import { TechElement } from '../component/Tech/TechElement';
import { TechMobileEl } from '../component/Tech/TechMobileEl'

interface DetailInfoType { 
    type: string, //tech type
    title: string, // tech title
    content: string //tech content
}

export const Tech = () => { 

    const target = React.useRef<HTMLDivElement>(null);
    const [isFocus, setIsFocus] = React.useState(false);
    const [innerWidth, setInnerWidth] = React.useState<number>(window.innerWidth);
    
    const [selIndex, setSelIndex] = React.useState<number>();

    const techList = [
        {
            posX: 150,
            posY: -80,
            img: require('../assets/img/react.png'),
            technic: 70,
            name: 'React.JS',
            commnet : 'React.JS를 '
        },
        {
            posX: 150,
            posY: 80,
            img : require('../assets/img/react-native-ioc.png'),
            technic: 60,
            name : 'React Native',
        },
        {
            posX: -150,
            posY: 80,
            img : require('../assets/img/typescript.png'),
            technic: 80,
            name : 'TypeScript',
        },
        {
            posX: -150,
            posY: -80,
            img : require('../assets/img/vue.png'),
            technic: 50,
            name : 'Vue.JS - Vite',
        },
        {
            posX: 0,
            posY: -150,
            img : RreactQueryImg,
            technic: 60,
            name : 'React Query',
            
        },
        {
            posX: 0,
            posY: 150,
            img : require('../assets/img/zustand.png'),
            technic: 80,
            name : 'Zustand',
        },
    ]

    

    React.useEffect(() => {
        let observer: IntersectionObserver;

        if (target) {
            observer = new IntersectionObserver(([e]) => {
                const target = e.target as HTMLElement;
                if (!e.isIntersecting) { 
                    setIsFocus(false);
                }
            })
            observer.observe(target.current as Element);
        }

        return () => { //컴포넌트 unmount시 옵저버 정리
            if (observer && target.current) {
                observer.unobserve(target.current)
            }
        }
    }, [target]);

    React.useEffect(() => { 
        setInnerWidth(window.innerWidth);
    },[window.innerWidth])
    

    return (
      <S.Container>
        <S.PcDisplay height={'100%'}>
          <S.CustomFlex
            align_items="center"
            justify_content="center"
            height={'100%'}
          >
            <S.CustomDiv ref={target} />
            <S.CustomDiv
              bgcolor={colors.FONT_COLOR1}
              br={10000}
              className={!isFocus ? 'bounce-effect ' : ''}
              style={{ zIndex: 999 }}
            >
              <S.CustomFlex
                width={13}
                height={13}
                align_items="center"
                justify_content="center"
                bw={0.7}
                bc={isFocus ? colors.FONT_COLOR1 : colors.FONT_COLOR1}
                br={10000}
                // bgcolor={colors.FONT_COLOR1}
                style={{ zIndex: 999, cursor: 'pointer' }}
                className={`btn-wrapper ${isFocus ? 'btn-wrapper-focus' : ''}`}
                onClick={() => {
                  setIsFocus(!isFocus)
                }}
              >
                <S.CustomDiv
                  bbw={0.1}
                  bc={colors.BORDER_COLOR1}
                  width={isFocus ? '40%' : '0%'}
                  className={'border-effect'}
                />
                <S.CustomPText
                  fs={2.8}
                  fw={'Bold'}
                  fc={isFocus ? colors.WHITE : colors.FONT_COLOR1}
                >
                  SKILL
                </S.CustomPText>
                <S.CustomDiv
                  bbw={0.1}
                  bc={colors.BORDER_COLOR1}
                  width={isFocus ? '40%' : '0%'}
                  className={'border-effect'}
                  mt={0.2}
                />
              </S.CustomFlex>
            </S.CustomDiv>
            {techList.map((item, index) => {
              return (
                <TechElement
                  setSelIndex={setSelIndex}
                  selIndex={selIndex}
                  key={'tech' + index}
                  isFocus={isFocus}
                  elIndex={index}
                  itemInfo={item}
                />
              )
            })}
          </S.CustomFlex>
        </S.PcDisplay>
        <S.MobileDisplay height={'100%'} style={{ textAlign: 'left' }}>
            <S.CustomDiv height={'85%'}>
                <S.CustomFlex width={'100%'} height={'100%'} pt={ 2}>
                    {techList.map((item, index) => {
                        return (
                            <TechMobileEl itemInfo={item} key={ index} />
                        )
                    })}
                </S.CustomFlex>
            </S.CustomDiv>
        </S.MobileDisplay>
      </S.Container>
    )
}