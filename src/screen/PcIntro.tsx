import React from 'react';
import * as S from '../theme/style';
import { useIsFocus } from '../hook/useIsFocus';
import { colors } from '../theme/color';

export const PcIntro = () => {

    const target = React.useRef<HTMLDivElement>(null);


    const isFocus = useIsFocus(target);

    React.useEffect(()=>{
        console.log(isFocus);
    },[isFocus])

    return(
        <S.Container id={'pc-intro'}>
            <S.CustomFlex
                justify_content='center'
                width={'100%'}
                height={'100%'}
            >
                <S.CustomFlex 
                    ref={target}
                    flex_direction='row'
                    justify_content='center'
                    align_items='center'
                    width={'100%'}
                >
                    <S.CustomDiv>
                    {isFocus &&
                        <>
                            <S.CustomFlex
                                flex_direction='row'
                                align_items={'flex-end'}
                                className={'animate__animated animate__fadeInDown'}
                                justify_content='center'
                                height={'auto'}
                            >
                                <S.CustomPText fs={4} fw={'Bold'}>끊임없는 배움</S.CustomPText>

                                <S.CustomPText fs={3} fw={'Light'}>을 추구하는</S.CustomPText>
                            </S.CustomFlex>
                            <S.CustomFlex
                                flex_direction='row'
                                align_items={'flex-end'}
                                justify_content='center'
                                style={{animationDelay:'0.5s'}} 
                                className={'animate__animated animate__fadeInDown'}
                                height={'auto'}
                                mt={1}
                            >
                                <S.CustomPText fs={4} fw={'Bold'}>FrontEnd</S.CustomPText>

                                <S.CustomPText fs={3} fw={'Light'}> 개발자</S.CustomPText>
                            </S.CustomFlex>
                            {/* <S.CustomSpanText style={{animationDelay:'1s'}} className={'animate__animated animate__fadeInDown'} fs={4} fw={'Light'}><S.CustomSpanText fw={'Bold'}>김경태</S.CustomSpanText> 입니다.</S.CustomSpanText> */}
                            <S.CustomFlex
                                flex_direction='row'
                                align_items={'flex-end'}
                                justify_content='center'
                                style={{animationDelay:'1s'}} className={'animate__animated animate__fadeInDown'}
                                height={'auto'}
                                mt={1}
                            >
                                <S.CustomPText fs={4} fc={colors.SKY_BLUE_COLOR} fw={'Bold'}>김경태</S.CustomPText>
                                <S.CustomPText fs={3} fw={'Light'}> 입니다.</S.CustomPText>
                            </S.CustomFlex>
                        </>
                    }
                    </S.CustomDiv>
                    {/* <S.CustomFlex flex={1}>
                        <S.CustomFlex>
                            <S.CustomImg src={require('../assets/img/profile3.jpg')} width={12} />
                        </S.CustomFlex>
                    </S.CustomFlex> */}
                </S.CustomFlex>
                </S.CustomFlex>
        </S.Container>
    )

}