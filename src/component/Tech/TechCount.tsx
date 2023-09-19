import React from 'react';
import { useCountUp } from '../../hook/CountHook';
import * as S from '../../theme/style';
import { colors } from '../../theme/color';

interface TechCountType { 
    technic : number
}

export const TechCount = ({ technic }: TechCountType) => {

    return (
        <S.CustomPText
            fs={1.1}
            fc={colors.FONT_COLOR2}
            fw={ 'Regular'}
        >
            { useCountUp(technic , 1000)}%
        </S.CustomPText>
    )

}