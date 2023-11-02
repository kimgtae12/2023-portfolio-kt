import React from 'react';
import * as S from '../../theme/style';
import { TaskArrayItemType } from '../../screen/Task';
import { colors } from '../../theme/color';
import { useIsMobile } from '../../hook/DeviceCheckHook';

interface TaskCardType {
    index : number,
    cardItem : TaskArrayItemType,
    selectTaskHandler : (title : string) => void; //task 선택
    selectTask : string //선택한 task
    moveLinkHandler : (isMove : boolean , link : string) => void; //링크이동 handler
}

export const TaskCard = ({
    index,
    cardItem,
    selectTaskHandler,
    selectTask,
    moveLinkHandler,
}:TaskCardType) => {

    const isMobile = useIsMobile();

    return(
        <S.CustomDiv 
            key={'task'+index} 
            className={`animate__animated animate__fadeInUp task_flip_container`} 
            // style={{cursor:'pointer'}}
            onClick={()=>{
                selectTaskHandler(cardItem.title);
            }}
            width={isMobile ? '95%' : '100%'}
            height={isMobile ? '95%' : '100%'}
            // ref={cardRef}
        >
            <S.CustomDiv className={`task_card ${cardItem.title === selectTask && 'task_card_click'} `}>
                <S.CustomFlex
                    className={'task_front'} 
                    position={'absolute'}
                    height={'100%'}
                    bw={0.1}
                    bc={colors.BORDER_COLOR1}
                    br={1.2}
                    justify_content='center'
                    align_items='center'
                    flex={1}
                >
                    <S.CustomDiv pt={2} pb={2} pl={0.5} pr={0.5}>
                    <S.CustomFlex
                        justify_content='center'
                        align_items='center'
                    >
                        <S.CustomImg 
                            width={10}
                            src={cardItem.img}
                            br={isMobile ? -1 : 1}
                        />
                        <S.CustomPText
                            fs={1.1}
                            fw={'Regular'}
                            fc={colors.FONT_COLOR2}
                            mt={1}
                        >
                            {cardItem.title}
                        </S.CustomPText>
                        <S.CustomPText mt={2} fw={'Medium'} fs={1.2} fc={colors.BORDER_COLOR_GRAY}>LINK</S.CustomPText>
                        <S.CustomDiv btw={0.1} btc={colors.BORDER_COLOR1} width={'30%'} mt={0.5} mb={0.5} />
                        {(cardItem.link && cardItem.link !== '') &&
                            <S.CustomDiv width={'100%'}  onClick={()=>{moveLinkHandler(cardItem.isLink,cardItem.link)}}>
                                <S.CustomPText fs={1.1} text_align='center' fw={'Medium'} fc={colors.FONT_COLOR1}>{cardItem.link.replace('https://','')}</S.CustomPText>
                            </S.CustomDiv>
                        }
                        <S.CustomFlex flex_direction='row' align_items='center' justify_content='center' style={{gap:'1rem'}}>
                            {(cardItem.androidLink !== '') &&
                                <S.CustomDiv width={'100%'}  onClick={()=>{moveLinkHandler(cardItem.isLink,cardItem.androidLink)}}>
                                    <S.CustomImg src={require('../../assets/img/playstore_ic.png')} width={5}  bc={colors.BORDER_COLOR1} />
                                </S.CustomDiv>
                            }
                            {(cardItem.iosLink !== '') &&
                                <S.CustomDiv width={'100%'}  onClick={()=>{moveLinkHandler(cardItem.isLink,cardItem.iosLink)}}>
                                    <S.CustomImg src={require('../../assets/img/appstore_ic.png')} width={4} bc={colors.BORDER_COLOR1} />
                                </S.CustomDiv>
                            }
                        </S.CustomFlex>
                    </S.CustomFlex>
                    </S.CustomDiv>
                </S.CustomFlex>

                <S.CustomFlex
                    className={'task_back'} 
                    position={'absolute'}
                    key={index}
                    height={'100%'}
                    bw={0.1}
                    bc={colors.BORDER_COLOR1}
                    br={1.2}
                    align_items='center'
                    flex={1}
                    justify_content='center'
                >
                    <S.CustomDiv pt={1} pb={1} pr={0.5} pl={0.5} width={'90%'}>
                    {/* <S.CustomImg
                        width={10}
                        src={item.img}
                    /> */}

                    <S.CustomFlex width={'100%'} justify_content='center' align_items='center' style={{overflow:'scroll'}}>
                        <S.CustomPText fw={'Medium'} fs={1.2} fc={colors.BORDER_COLOR_GRAY}>TECH</S.CustomPText>
                        <S.CustomDiv btw={0.1} btc={colors.BORDER_COLOR1} width={'30%'} mt={0.5} mb={0.5} />
                        <S.CustomFlex flex_direction='row' justify_content='center' align_items='center' style={{flexWrap:'wrap',gap:'0.5rem'}}>
                        {cardItem.env.map(((envItem,envIndex) => {
                            return(
                                <S.CustomDiv key={'envItem'+envIndex}>
                                    {envItem.icon !== '' ? 
                                    <img key={envIndex} src={`https://img.shields.io/badge/${envItem.name}-${envItem.color}?style=for-the-badge&logo=${envItem.icon}&logoColor=white`}></img>
                                    :
                                    <S.CustomDiv pl={0.8} pr={0.8} pt={0.5} pb={0.4} bgcolor={colors.BLACK}>
                                        <S.CustomPText fs={0.7} fw={'Bold'} fc={colors.WHITE} >{envItem.name}</S.CustomPText>
                                    </S.CustomDiv>
                                }
                                </S.CustomDiv>
                            )
                        }))}
                        </S.CustomFlex>

                        

                        <S.CustomPText fw={'Medium'} fs={1.2} fc={colors.BORDER_COLOR_GRAY} mt={1}>TASK</S.CustomPText>
                        <S.CustomDiv btw={0.1} btc={colors.BORDER_COLOR1} width={'30%'} mt={0.5} mb={0.5} />
                        <S.CustomPText fw={'Light'} fs={1} fc={colors.FONT_COLOR1}>{cardItem.contents}</S.CustomPText>
                    </S.CustomFlex>
                    </S.CustomDiv>
                </S.CustomFlex>
                
            </S.CustomDiv>
        </S.CustomDiv>

    )
}