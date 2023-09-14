import React from 'react';
import * as S from '../theme/style';

export const PageOne = () => {

    const introText = ['안녕하세요!', '2년차','프론트엔드','개발자',`김경태`,'입니다'];

    const [tiping, setTiping] = React.useState<string>(''); //타이핑되는 문구상태
    const [tipingPage, setTipingPage] = React.useState(0);
    const [count, setCount] = React.useState<number>(0);

    React.useEffect(() => { 
        const interval = setInterval(() => {
            if (introText[tipingPage]) {
                const tipingText = tiping + introText[tipingPage][count]
                setTiping(tipingText)
                setCount(count + 1)
                
                if (introText[tipingPage] === tiping) {
                    setTiping('')
                    setTipingPage((p) => p + 1)
                    setCount(0)
                }
                
            }
        }, introText[tipingPage] && introText[tipingPage].includes('김경태') ? 300 : 200);

        return () => clearInterval(interval);
    })

    React.useEffect(() => { 
        if (tipingPage === introText.length) { 
            setTiping('');
            setTipingPage(0);
            setCount(0);

        }
    },[tipingPage])
    return (
        <S.Container>
          <S.CustomFlex
            width={'100%'}
            height={'100%'}
            align_items="center"
            justify_content="center"
          >
            <S.CustomPText
              fs={
                introText[tipingPage] &&
                introText[tipingPage].includes('김경태')
                  ? 6
                  : 4
              }
              fw={'Bold'}
            >
              {tiping}
            </S.CustomPText>
          </S.CustomFlex>
        </S.Container>
    )
}