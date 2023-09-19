import React from 'react';
import * as S from '../../theme/style';
import { colors } from '../../theme/color';
import * as TS from './TechStyle';
import { useCountUp } from '../../hook/CountHook';
import { TechCount } from './TechCount';

interface TechElementType {
  width?: number,
  height?: number,
  isFocus: boolean,
  selIndex?: number,
  setSelIndex: (index: number) => void;
  elIndex: number,
  itemInfo: {
    posX: number,
    posY: number,
    img: string,
    technic: number,
    name : string,
  }
}

export const TechElement = ({ 
    width,
    height,
    isFocus,
    selIndex,
    setSelIndex,
    elIndex,
    itemInfo,
}: TechElementType) => { 
    
    const [isSel, setIsSel] = React.useState(false);
    const [selProgress, setSelProgress] = React.useState(0);
    


    React.useEffect(() => { 
        if (isFocus) {
          if (isSel) {
            setSelProgress(itemInfo.technic)
          }
          else { 
            setSelProgress(0);
          }
        }
        else { 
            setSelProgress(0)
        }
    },[isSel])
    
    React.useEffect(() => { 
        if (selIndex === elIndex) {
            setIsSel(true);
        }
        else { 
          setSelProgress(0)
          setIsSel(false);
        }
    }, [selIndex])
    
    React.useEffect(() => { 
        if (!isFocus) { 
          setIsSel(false);
          setSelProgress(0);
          setSelIndex(-1);
        }
    },[isFocus])
    return (
      <S.MoveElStyle
        position={'absolute'}
        top={'50%'}
        left={'50%'}
        positionX={isFocus ? itemInfo.posX + '%' : '0'}
        positionY={isFocus ? itemInfo.posY + '%' : '0'}
        className={`${!isSel && 'bounce-effect'}`}
        style={{ cursor: 'pointer' }}
        br={100}
        bw={0.3}
        bc={colors.BORDER_COLOR1}
        width={'11rem'}
        height={'11rem'}
        justify_content="center"
        align_items="center"
        onClick={() => {
          setSelIndex(elIndex)
        }}
      >
        <S.CustomFlex
          // pt={2} pb={2} pl={1} pr={1}
          width={'100%'}
          height={'100%'}
          justify_content="center"
          align_items="center"
          position={'absolute'}
          top={0}
          left={0}
          className={`${!isSel && 'hide-el'}`}
          style={{ zIndex: 2 }}
        >
          <S.CustomFlex justify_content='flex-end' align_items="center" width={'80%'} height={ '75%' }>
            {/* <S.CustomPText
              fw={'Regular'}
              fs={1.3}
              text_align="center"
              fc={colors.FONT_COLOR1}
            >
              {itemInfo.name}
            </S.CustomPText> */}
            <TS.ProgressBack
              mt={0.5}
              mb={0.5}
              bgcolor={colors.SUB_BACKGROUND_COLOR1}
              br={1}
            >
              <TS.ProgressFront
                bgcolor={colors.FONT_COLOR1}
                width={selProgress}
                br={1}
              ></TS.ProgressFront>
            </TS.ProgressBack>
            {isSel && <TechCount technic={itemInfo.technic} />}
          </S.CustomFlex>
        </S.CustomFlex>
        {/* {!isSel && ( */}
          <S.CustomDiv
            position='absolute'
            top={'50%'}
            style={{ zIndex: 3, transform:!isSel ? 'translate(0,0)' : 'translate(0,-30%)', transition:'transform 0.5s' }}
            // className={ `${isSel && 'hide-el'}`}
          >
            <S.CustomImg width={!isSel ? '70%' : '40%'} src={itemInfo.img} style={{transition:'width 0.5s'}} />
          </S.CustomDiv>
        {/* )}  */}
      </S.MoveElStyle>
    ) 
}