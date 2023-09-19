import React from 'react'
import * as S from '../../theme/style'
import { colors } from '../../theme/color'
import * as TS from './TechStyle'
import { TechCount } from './TechCount'

interface TechElementType {
  itemInfo: {
    posX: number
    posY: number
    img: string
    technic: number
    name: string
  }
}

export const TechMobileEl = ({
  itemInfo,
}: TechElementType) => {
  
  return (
    <S.CustomFlex
      width={'100%'}
      pt={1}
      pb={1}
      bbw={0.1}
      bc={colors.BORDER_COLOR1}
    >
      <S.CustomFlex flex_direction="row" align_items="center">
        <S.CustomImg width={3} src={itemInfo.img} />
        <S.CustomDiv ml={1}>
          <S.CustomPText fs={1.4} fw={'Medium'}>
            {itemInfo.name}
          </S.CustomPText>
        </S.CustomDiv>
      </S.CustomFlex>
          <S.CustomFlex flex_direction={'row'} align_items="center" width={ '100%' }>
        <TS.ProgressBack
            mt={1}
            mb={1}
            mr={ 1}      
            bgcolor={colors.SUB_BACKGROUND_COLOR1}
            br={1}
        >
          <TS.ProgressFront
            bgcolor={colors.FONT_COLOR1}
            width={itemInfo.technic}
            br={1}
          />
        </TS.ProgressBack>
        <TechCount technic={itemInfo.technic} />    
      </S.CustomFlex>
    </S.CustomFlex>
  )
}
