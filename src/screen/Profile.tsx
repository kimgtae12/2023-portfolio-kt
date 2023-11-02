import React from 'react';
import * as S from '../theme/style';


export const Profile = () => {
    

    return(
        <S.Container id={'profile'}>
            <S.CustomFlex
                width={'100%'}
                height={'100%'}
                justify_content='center'
            >
                <S.CustomPText>이곳은 프로필 영역~!</S.CustomPText>
            </S.CustomFlex>
        </S.Container>
    )
}