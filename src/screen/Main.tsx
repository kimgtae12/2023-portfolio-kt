import React from 'react';

import * as S from '../theme/style';
import { FullPage, Slide } from 'react-full-page';

import { PageOne } from './PageOne';

export const Main = () => { 

    const [page, setPage] = React.useState(0);
    return (
      <S.CustomDiv>
        <FullPage
            initialSlide={page}
        >
          <Slide>
            <PageOne />
          </Slide>
          <Slide>
            <PageOne />
          </Slide>
          <Slide>
            <PageOne />
          </Slide>
          <Slide>
            <PageOne />
          </Slide>
        </FullPage>
        <S.CustomDiv
          position={'fixed'}
          bottom={2}
          style={{ left: '50%', transform: 'translate(-50%,0)' }}
        >
          {/* <S.BounceEffect> */}
          <S.CustomDiv className="bounce-effect">
            <S.CustomFlex
              flex_direction="row"
              justify_content="center"
              align_items="center"
            >
              <S.CustomImg
                width={3}
                src={require('../assets/img/mouse_ico.png')}
              />
              <S.CustomImg
                width={1.5}
                height={2}
                src={require('../assets/img/down-arrow.png')}
              />
            </S.CustomFlex>
          </S.CustomDiv>
          {/* </S.BounceEffect> */}
        </S.CustomDiv>
      </S.CustomDiv>
    )
}