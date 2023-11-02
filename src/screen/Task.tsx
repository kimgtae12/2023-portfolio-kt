import React from 'react';
import * as S from '../theme/style';
import { colors } from '../theme/color';
import 'animate.css';
import { ReactList, ReactNativeList, TaskList } from '../utils/list';
import { TaskCard } from '../component/task/TaskCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useIsMobile } from '../hook/DeviceCheckHook';
import { useIsFocus } from '../hook/useIsFocus';

export interface TaskArrayItemType {
    
    title: string;
    img: any;
    link: string;
    androidLink : string;
    iosLink : string;
    isLink: boolean;
    env: {
        name: string;
        color: string;
        icon: string;
    }[];
    contents: string;
    
}
export const Task = () => {

    const target = React.useRef<HTMLDivElement>(null);
    const isFocus = useIsFocus(target);

    const isMobile = useIsMobile();

    const [titleClass , setTitleClass] = React.useState(''); //제목에 들어갈 애니메이션

    const [selectStack , setSelectStack] = React.useState(''); //선택 stack (task표시)
    const [taskListCalss, setTaskListClass] = React.useState('');

    const [selectTask, setSelectTask] = React.useState(''); //선택한 task

    const [taskArray, setTaskArray] = React.useState<TaskArrayItemType[]>([]); 

    function selectTaskHandler(title : string){
        if(title === selectTask){
            setSelectTask('')
        }
        else{
            setSelectTask(title);
        }
    }

    const cardRef = React.useRef<HTMLDivElement | null>(null);

    const moveLinkHandler = (isMove : boolean, link : string) => { //링크이동
        if(isMove){
            window.open(link,"_blank");
        }
    }

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    });

    function handleClickOutside(event:any) { //카드 외각 클릭
        // 현재 document에서 mousedown 이벤트가 동작하면 호출되는 함수입니다.
        if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
            // setSelectTask('');
        }
    }



    
    
    React.useEffect(()=>{
        if(isFocus){
            setTitleClass('animate__animated animate__fadeInDown');
        }
        else{
            setTitleClass('');
            setSelectStack('');
            setSelectTask('');
        }
    },[isFocus])


    

    React.useEffect(()=>{
        setSelectTask('');
        if(selectStack === 'React.JS'){
            setTaskArray(ReactList);
        }
        else if(selectStack === 'React Native'){
            setTaskArray(ReactNativeList);
        }
    },[selectStack])

    return(
        <S.Container ref={target} id={'task'}>
            <S.CustomDiv pt={2} pb={isMobile ? 1 : 2} className={titleClass} >
                <S.CustomPText
                    fs={3}
                    fc={colors.FONT_COLOR1}
                    fw={'Bold'}
                    text_align='center'
                >
                    PORTFOLIO
                </S.CustomPText>
            </S.CustomDiv>
            <S.CustomFlex align_items='center'>
            <S.CustomDiv width={'30%'} bbc={colors.BORDER_COLOR2} bbw={0.1} />
            </S.CustomFlex>
            {!isMobile &&
                <S.CustomFlex
                    flex_direction='row'
                    justify_content='space-around'
                    align_items='center'
                    width={'100%'}
                    height={'20%'}
                    mt={2}
                >
                    {TaskList.map((item,index) => {
                        return(
                            <S.CustomFlex
                                className={`${item.title === selectStack ? 'bounce-effect' : ''}`}
                                // style={{ cursor: 'pointer' }}
                                br={100}
                                bw={0.1}
                                bc={colors.BORDER_COLOR1}
                                width={'11rem'}
                                height={'11rem'}
                                justify_content="center"
                                align_items="center"
                                key={'stack'+index} 
                                onClick={()=>{setSelectStack(item.title);}}
                            >
                                <S.CustomDiv
                                    position='absolute'
                                    top={'50%'}
                                >
                                    <S.CustomImg width={'70%'} src={item.img}/>
                                </S.CustomDiv>
                            </S.CustomFlex>
                        )
                    })}
                </S.CustomFlex>
            }
            {!isMobile ?
                <S.CustomFlex
                    width={'100%'}
                    flex_direction='row'
                    justify_content='space-around'
                    mt={1}
                    height={'50%'}
                    style={{gap:'5rem'}}
                >
                    {selectStack === 'React.JS' &&
                        ReactList.map((item,index) => {
                            return(
                                <TaskCard 
                                index={index}
                                cardItem={item}
                                selectTaskHandler={selectTaskHandler}
                                selectTask={selectTask}
                                moveLinkHandler={moveLinkHandler}
                            />
                            )
                        })
                    }
                    {selectStack === 'React Native' &&
                        ReactNativeList.map((item,index) => {
                            return(
                                <TaskCard 
                                index={index}
                                cardItem={item}
                                selectTaskHandler={selectTaskHandler}
                                selectTask={selectTask}
                                moveLinkHandler={moveLinkHandler}
                            />
                            )
                        })
                    }
                </S.CustomFlex>
            :
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    style={{height:'80%',width:'100%',marginTop:'1rem'}}
                >
                    {ReactList.concat([...ReactNativeList]).map((item,index) => {
                        return(
                            <SwiperSlide style={{width:'100%',textAlign:'center',display:'flex',justifyContent:'center'}} key={'taskMobileKey'+index}>
                                <TaskCard 
                                    index={index}
                                    cardItem={item}
                                    selectTaskHandler={selectTaskHandler}
                                    selectTask={selectTask}
                                    moveLinkHandler={moveLinkHandler}
                                />
                            </SwiperSlide>
                        )
                    })}
                    
                </Swiper>
            }
        </S.Container>
    )
}
