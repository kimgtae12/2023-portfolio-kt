import React from 'react';
import * as S from '../../theme/style';
import { colors } from '../../theme/color';
import {  } from 'react-full-page';
import {Link} from 'react-scroll';

interface MenuType {
    isMenuVisible : boolean;
    setIsMenuVisible : (visible : boolean) => void;
    setPage : (page:number) => void;
}

export const Menu = ({isMenuVisible,setIsMenuVisible,setPage}:MenuType) => {


    const [hoverIndex , setHoverIndex] = React.useState(-1);

    const menuRef = React.useRef<HTMLDivElement | null>(null);


    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    });

    function handleClickOutside(event:any) { //카드 외각 클릭
        // 현재 document에서 mousedown 이벤트가 동작하면 호출되는 함수입니다.
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            if(isMenuVisible){
                setIsMenuVisible(false);
            }
        }
    }


    return(
        <S.CustomFlex
            ref={menuRef}
            className={`animate__animated ${isMenuVisible ? 'animate__fadeInLeft' : ''}`}
            position={'fixed'} justify_content='center'
            top={0}
            left={0}
            width={'25vw'}
            height={'100vh'}
            bgcolor={'rgba(10,10,10,0.7)'}
            pl={2}
            style={{gap:'4rem',zIndex:9}}
        >
            <Link to={'pc-intro'} smooth={true} onSetActive={()=>{setPage(0)}} spy={true}>
                <S.CustomDiv 
                    onClick={()=>{setPage(0)}}
                    className={`menu-btn-wrapper ${hoverIndex === 1 ? 'menu-btn-wrapper-focus' : ''}`} 
                    onMouseEnter={()=>{setHoverIndex(1)}} 
                    onMouseLeave={()=>{setHoverIndex(-1)}} 
                >
                    <S.CustomPText fs={3} fc={colors.BLACK} fw={'Bold'}>INTRO</S.CustomPText>
                </S.CustomDiv>
            </Link>
            <Link to={'profile'} smooth={true} onSetActive={()=>{setPage(1)}} >
                <S.CustomDiv 
                    onClick={()=>{setPage(1)}}
                    className={`menu-btn-wrapper ${hoverIndex === 2 ? 'menu-btn-wrapper-focus' : ''}`} 
                    onMouseEnter={()=>{setHoverIndex(2)}} 
                    onMouseLeave={()=>{setHoverIndex(-1)}} 
                >
                    <S.CustomPText fs={3} fc={colors.BLACK} fw={'Bold'}>PROFILE</S.CustomPText>
                </S.CustomDiv>
            </Link>

            <Link to={'tech'} smooth={true} onSetActive={()=>{setPage(2)}}>
                <S.CustomDiv 
                    className={`menu-btn-wrapper ${hoverIndex === 3 ? 'menu-btn-wrapper-focus' : ''}`} 
                    onMouseEnter={()=>{setHoverIndex(3)}} 
                    onMouseLeave={()=>{setHoverIndex(-1)}} 
                >
                    <S.CustomPText fs={3} fc={colors.BLACK} fw={'Bold'}>STACK</S.CustomPText>
                </S.CustomDiv>
            </Link>
            <Link to={'task'} smooth={true} onSetActive={()=>{setPage(3)}}>
                <S.CustomDiv 
                    className={`menu-btn-wrapper ${hoverIndex === 4 ? 'menu-btn-wrapper-focus' : ''}`} 
                    onMouseEnter={()=>{setHoverIndex(4)}} 
                    onMouseLeave={()=>{setHoverIndex(-1)}} 
                >
                    <S.CustomPText fs={3} fc={colors.BLACK} fw={'Bold'}>PORTFOLIO</S.CustomPText>
                </S.CustomDiv>
            </Link>
        </S.CustomFlex>
    )

}