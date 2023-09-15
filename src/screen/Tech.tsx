import React, { useEffect } from 'react';

import * as S from '../theme/style';
import { colors } from '../theme/color';
import RreactQueryImg from '../assets/img/react-query.svg';

export const Tech = () => { 

    const target = React.useRef<HTMLDivElement>(null);
    const [isFocus, setIsFocus] = React.useState(false);
    const [innerWidth, setInnerWidth] = React.useState<number>(window.innerWidth);
    

    const techListRender = (posX : number, posY : number , imgSrc : string,width?:number,height?:number) => { 
        return (
            <S.MoveElStyle
                position={'absolute'}
                top={'50%'}
                left={'50%'}
                positionX={
                    isFocus ? (innerWidth < 420 ? posX - 100 + '%' : posX + '%') : '0'
                }
                positionY={
                    isFocus ? (innerWidth < 420 ? posY - 100 + '%' : posY + '%') : '0'
                }
                className={'bounce-effect'}
                br={100}
                bw={0.3}
                bc={colors.BORDER_COLOR1}
                width={'11rem'}
                height={'11rem'}
                justify_content='center'
                align_items='center'
            >
            <S.CustomImg
                    width={ '70%'}
              src={imgSrc}
            />
          </S.MoveElStyle>
        )
    }

    

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
        <S.CustomFlex
          align_items="center"
          justify_content="center"
          height={'100%'}
        >
            <S.CustomDiv ref={target} />
                <S.CustomDiv bgcolor={colors.FONT_COLOR1} br={10000} className={!isFocus ? 'bounce-effect ' : '' } style={{zIndex:999}}>
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
                    className={ `btn-wrapper ${isFocus ? 'btn-wrapper-focus' : ''}`}
                    onClick={() => {
                        setIsFocus(!isFocus)
                    }}
                >
                    <S.CustomDiv bbw={0.1} bc={colors.BORDER_COLOR1}  width={isFocus ? '40%' : '0%'} className={'border-effect'} />
                    <S.CustomPText fs={2.8} fw={'Bold'} fc={isFocus ? colors.WHITE : colors.FONT_COLOR1}>
                        SKILL
                    </S.CustomPText>
                    <S.CustomDiv bbw={0.1} bc={colors.BORDER_COLOR1}  width={isFocus ? '40%' : '0%'} className={'border-effect'} mt={0.2} />
                </S.CustomFlex>
            </S.CustomDiv>    

          {techListRender(150, -80, require('../assets/img/react.png'))}
          {techListRender(150, 80,require('../assets/img/react-native-ioc.png'))}
          {techListRender(-150, 80, require('../assets/img/typescript.png'))}
          {techListRender(-150, -80, require('../assets/img/vue.png'))}
          {techListRender(0, -150, RreactQueryImg)}
          {techListRender(0, 150, require('../assets/img/zustand.png'))}
        </S.CustomFlex>
      </S.Container>
    )
}