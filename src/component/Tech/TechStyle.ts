import styled, { css } from 'styled-components'
import { CustomDiv, CustomFlex } from '../../theme/style'

interface DonutBackType {
  frontColor: string
  backColor: string
  donutper: number
}

interface DonutFrontType {
}

const DonutBack = styled(CustomFlex)<DonutBackType>`
  //도넛그래프 뒷배경
  margin: 0 auto;
  border-radius: 50%;
  position: relative;
  text-align: center;

  @property --tranDonutPer {
    syntax: '<percentage>'; /* its type */
    inherits: false;
    initial-value: ${({ donutper }) => `${donutper}%`}; /* the initial value */
  }
  transition: --tranDonutPer 0.5s;
  /* background: conic-gradient(from 0deg at center center, # 0% , #FFFF00); */
  background: ${({ frontColor, backColor, donutper }) =>
    `conic-gradient(${frontColor} 0% var(--tranDonutPer), ${backColor} var(--tranDonutPer) 100%)`};
`

const DonutFront = styled(CustomFlex)<DonutFrontType>`
  //도넛그래프 앞배경
  position: absolute;
  border-radius: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: white;
`

const ProgressBack = styled(CustomDiv)`
  width:100%;
  height:0.8rem;
`

const ProgressFront = styled(CustomDiv)`
  width : ${({ width }) => `${width}%`};
  height: 100%;
  position:absolute;
  top:0;
  left:0;
  transition : width 0.5s;
`

export {
  DonutBack,
  DonutFront,
  ProgressBack,
  ProgressFront,
}
