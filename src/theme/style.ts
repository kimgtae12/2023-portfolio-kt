import styled, { css } from 'styled-components'
import { colors } from './color'
import {
  BoarderViewType,
  CustomTextType,
  CustomFlexType,
  CustomTextInputType,
  CustomDivType,
  MarginPaddingMixinType,
  CustomImgType,
  PositionType,
  ContainerType,
  MoveElStyleType,
} from './stylesPropsType'

//margin & padding style - 경태
const marginPaddingMixin = css<MarginPaddingMixinType>`
  margin-top: ${({ mt }) => mt && `${mt}rem`};
  margin-bottom: ${({ mb }) => mb && `${mb}rem`};
  margin-left: ${({ ml }) => ml && `${ml}rem`};
  margin-right: ${({ mr }) => mr && `${mr}rem`};
  padding-left: ${({ pl }) => pl && `${pl}rem`};
  padding-right: ${({ pr }) => pr && `${pr}rem`};
  padding-top: ${({ pt }) => pt && `${pt}rem`};
  padding-bottom: ${({ pb }) => pb && `${pb}rem`};

  ${({ ma }) =>
    ma &&
    `
        margin-top : ${ma + 'rem'};
        margin-bottom : ${ma + 'rem'};
        margin-left : ${ma + 'rem'};
        margin-right : ${ma + 'rem'};
    `}
  ${({ pa }) =>
    pa &&
    `
        padding-top : ${pa + 'rem'};
        padding-bottom : ${pa + 'rem'};
        padding-left : ${pa + 'rem'};
        padding-right : ${pa + 'rem'};
    `}
`


//border style - 경태
const borderMixin = css<BoarderViewType>`
  border-style: solid;
  box-sizing: content-box;
  border-width: ${({ bw }) => bw ? `${bw}rem` : 0};
  border-top-width: ${({ btw }) => btw && `${btw}rem`};
  border-bottom-width: ${({ bbw }) => bbw && `${bbw}rem`};
  border-left-width: ${({ blw }) => blw && `${blw}rem`};
  border-right-width: ${({ brw }) => brw && `${brw}rem`};

  border-color: ${({ bc }) => bc};
  border-top-color: ${({ btc }) => btc};
  border-bottom-color: ${({ bbc }) => bbc};
  border-left-color: ${({ blc }) => blc};
  border-right-color: ${({ brc }) => brc};

  border-radius: ${({ br }) => br && `${br * 10}px`};
  border-top-left-radius: ${({ btlr }) => btlr && `${btlr}rem`};
  border-top-right-radius: ${({ btrr }) => btrr && `${btrr}rem`};
  border-bottom-left-radius: ${({ bblr }) => bblr && `${bblr}rem`};
  border-bottom-right-radius: ${({ bbrr }) => bbrr && `${bbrr}rem`};
`

//position이 absolute일때 사용 - 경태
const PositionMixin = css<PositionType>`
  top: ${({ top }) => top && `${top}rem`};
  left: ${({ left }) => left && `${left}rem`};
  right: ${({ right }) => right && `${right}rem`};
  bottom: ${({ bottom }) => bottom && `${bottom}rem`};
`

const Container = styled.section<ContainerType>`
  max-width: 1024px;
  height:100vh;
  padding-right: 2.3rem;
  padding-left: 2.3rem;
  margin: 0 auto;

  ${({ bgcolor }) =>
    bgcolor && `background-color : ${bgcolor};`}/* background-color: 'blue'; */
`



//div style - 경태
const CustomDiv = styled.div<CustomDivType>`
  /* overflow-y:auto; */
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  ${marginPaddingMixin}
  ${borderMixin}
    ${PositionMixin}
    position : ${({ position }) => position || 'relative'};
  display: ${({ display }) => display || 'block'};
  ${({ flex }) => flex && `flex:${flex};`}

  ${({ background }) => background && `background : ${background};`}
    ${({ bgcolor }) => bgcolor && `background-color: ${bgcolor};`}
    ${({ width }) =>
    width && `width: ${typeof width === 'string' ? width : `${width}rem`};`}
    ${({ height }) =>
    height &&
    `height: ${typeof height === 'string' ? height : `${height}rem`};`}
    ${({ backdropFilter }) =>
    backdropFilter &&
    `
        backdrop-filter : ${backdropFilter};
        -webkit-backdrop-filter : ${backdropFilter};
    `}
`

//flex style - 경태
const CustomFlex = styled(CustomDiv)<CustomFlexType>`
  display: flex;

  flex-direction: ${({ flex_direction }) => flex_direction || 'column'};
  justify-content: ${({ justify_content }) => justify_content || 'flex-start'};
  align-items: ${({ align_items }) => align_items || 'flex-start'};
`

const PcDisplay = styled(CustomDiv)`
  @media screen and (max-width: 720px) {
    display: none;
  }
`

const MobileDisplay = styled(CustomDiv)`
  @media screen and (min-width: 721px) {
    display: none;
  }
`

//margin 필요할때 사용 - 경태
const MarginCom = styled.div<MarginPaddingMixinType>`
  ${marginPaddingMixin}
`

//P태그 커스텀 - 경태
const CustomPText = styled.p<CustomTextType>`
  font-size: ${({ fs }) => fs && `${fs}rem`};
  color: ${({ fc }) => fc || colors.BLACK};
  font-family: ${({ fw }) =>
    fw ? `${fw},'Apple SD Gothic Neo'` : `'Regular','Apple SD Gothic Neo'`};
  font-weight: ${({ fw }) =>
    fw
      ? fw === 'Bold'
        ? 700
        : 'SemiBold'
        ? 600
        : 'Medium'
        ? 500
        : 'Regular'
        ? 400
        : 'Light'
        ? 300
        : 200
      : 400};
  text-align: ${({ text_align }) => text_align || 'left'};
  ${marginPaddingMixin}
  line-height:140%;
  letter-spacing: -0.1rem;
  ${({ background }) => background && `background : ${background};`}
  ${({ textclip }) => textclip && `-webkit-background-clip: text;`}
`

//span 커스텀 - 경태
const CustomSpanText = styled.span<CustomTextType>`
  font-size: ${({ fs }) => fs && `${fs}rem`};
  color: ${({ fc }) => fc || colors.BLACK};
  font-family: ${({ fw }) =>
    fw ? `${fw},'Apple SD Gothic Neo'` : `'Regular','Apple SD Gothic Neo'`};
  font-weight: ${({ fw }) =>
    fw
      ? fw === 'Bold'
        ? 700
        : 'SemiBold'
        ? 600
        : 'Medium'
        ? 500
        : 'Regular'
        ? 400
        : 'Light'
        ? 300
        : 200
      : 400};
  text-align: ${({ text_align }) => text_align || 'left'};
  word-break: 'break-word';
  overflow-y: hidden;
  line-height: 140%;
  vertical-align: middle;
  letter-spacing: -0.1rem;
  ${marginPaddingMixin}
  ${({ background }) => background && `background : ${background};`}
    ${({ textclip }) => textclip && `-webkit-background-clip: text;`}
`

//text-input 커스텀 - 경태
const CustomTextInput = styled.input<CustomTextInputType>`
  font-size: ${({ fs }) => fs && `${fs}rem`};
  color: ${({ fc }) => fc || colors.BLACK};
  font-family: ${({ fw }) =>
    fw ? `${fw},'Apple SD Gothic Neo'` : `'Regular','Apple SD Gothic Neo'`};
  font-weight: ${({ fw }) =>
    fw
      ? fw === 'Bold'
        ? 700
        : 'SemiBold'
        ? 600
        : 'Medium'
        ? 500
        : 'Regular'
        ? 400
        : 'Light'
        ? 300
        : 200
      : 400};
  word-break: 'break-word';
  ${marginPaddingMixin}
  ${borderMixin}
    ${({ bgcolor }) => bgcolor && `background-color: ${bgcolor};`}
    ${({ width }) =>
    width && `width: ${typeof width === 'string' ? width : `${width}rem`};`}
    ${({ height }) =>
    height &&
    `height: ${typeof height === 'string' ? height : `${height}rem`};`}

    ${({ ph_color }) =>
    ph_color &&
    `
        ::placeholder : {
            color: ${ph_color}
        }
    `}
`

const CustomTextArea = styled.textarea<CustomTextInputType>`
  font-size: ${({ fs }) => fs && `${fs}rem`};
  color: ${({ fc }) => fc || colors.BLACK};
  font-family: ${({ fw }) =>
    fw ? `${fw},'Apple SD Gothic Neo'` : `'Regular','Apple SD Gothic Neo'`};
  font-weight: ${({ fw }) =>
    fw
      ? fw === 'Bold'
        ? 700
        : 'SemiBold'
        ? 600
        : 'Medium'
        ? 500
        : 'Regular'
        ? 400
        : 'Light'
        ? 300
        : 200
      : 400};
  word-break: 'break-word';
  resize: none;
  ${marginPaddingMixin}
  ${({ bgcolor }) => bgcolor && `background-color: ${bgcolor};`}
    ${borderMixin}
    ${({ width }) =>
    width && `width: ${typeof width === 'string' ? width : `${width}rem`};`}
    ${({ height }) =>
    height &&
    `height: ${typeof height === 'string' ? height : `${height}rem`};`}
    ${({ ph_color }) =>
    ph_color &&
    `
        ::placeholder : {
            color: ${ph_color}
        }
    `}
`

//img 커스텀  - 경태
const CustomImg = styled.img<CustomImgType>`
  ${({ width }) =>
    width && `width: ${typeof width === 'string' ? width : `${width}rem`};`}
  ${({ height }) =>
    height &&
    `
        height: ${typeof height === 'string' ? height : `${height}rem`};
    `}
    object-fit : ${({ object_fit }) => object_fit || 'unset'};
    ${marginPaddingMixin}
    ${borderMixin}
`

const MoveElStyle = styled(CustomFlex)<MoveElStyleType>`
  ${({positionX, positionY}) => `transform : translate(${positionX},${positionY});`}
  
  /* transform: translate(300px, 300px); */
  transition-property: all;
  transition-duration: 0.5s;
  /* transition-delay: 1s; */
`

export {
  Container,
  PcDisplay,
  MobileDisplay,
  CustomDiv,
  CustomFlex,
  MarginCom,
  CustomPText,
  CustomSpanText,
  CustomTextInput,
  CustomTextArea,
  CustomImg,
  MoveElStyle,
}
