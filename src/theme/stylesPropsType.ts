export type ContainerType = {
    bgcolor? : string,
}

export type MarginPaddingMixinType = {
    ml? : number, //marginLeft
    mr? : number, //marginRight
    mb? : number, //marginBottom
    mt? : number, //marginTop

    pl? : number, //paddingLeft
    pr? : number, //paddingRight
    pb? : number, //paddingBottom
    pt? : number, //paddigTop

    ma? :number, //margin
    pa? : number, //padding
}
export type BoarderViewType = {
    bw? : number, //border 전체 width
    btw? : number, //border top width
    bbw? : number, //border bottom width
    blw? : number, //border left width
    brw? : number, //border right width

    bc? : string, //border 전체 color
    btc? : string, // border top color
    bbc? : string, // border bottom color
    blc? : string, // border left color
    brc? : string, // border right color

    br? : number , // border 전체 radius
    btlr? : number, // border top left radius
    btrr? : number , // border top right radius
    bblr? : number, // border bottom left radius
    bbrr? : number, // border bottom right radius
}

export type PositionType = {
    top? : number | string,
    left? : number | string,
    right? : number | string,
    bottom? : number | string,
}


export type CustomDivType = MarginPaddingMixinType & BoarderViewType & PositionType &{
    position? : string,
    bgcolor ? : string, //background color
    flex? : number,

    width? : string | number, //width는 %일경우 string으로 넣어주세요. ex) '100%' , px일경우 number로 넣어주세요.
    height? : string | number, //height %일경우 string으로 넣어주세요. ex) '100%' , px일경우 number로 넣어주세요.
    display? : string,

    background? : string,
    backdropFilter? : string,
}

export type CustomFlexType = MarginPaddingMixinType & {
    flex_direction? : 'row' | 'column'
    justify_content? : 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly',
    align_items? : 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline',

}


export type MarginComType = {
    mt? : number, //margin top
    mb? : number, //margin bottom
}

export type CustomTextType = MarginPaddingMixinType & {
    fs? : number, //fontSize
    fc? : string, //font color
    fw? : 'Thin' | 'Light' | 'DemiLight' | 'Regular' | 'Medium' | 'SemiBold' | 'Bold' | 'ExtraBold', //font weight
    text_align? : string,
    bgcolor? : string,
    background? : string,
    textclip? : boolean,

}

export type CustomTextInputType = MarginPaddingMixinType & BoarderViewType & {
    fs? : number, // fontSize
    fc? : string, // fontColor
    fw? : 'Thin' | 'Light' | 'DemiLight' | 'Regular' | 'Medium' | 'SemiBold' | 'Bold' | 'ExtraBold', //font Weight
    bgcolor ? : string, //background color
    ph_color? : string, //placeholder color
    width? : string | number, //width는 %일경우 string으로 넣어주세요. ex) '100%' , px일경우 number로 넣어주세요.
    height? : string | number, //height %일경우 string으로 넣어주세요. ex) '100%' , px일경우 number로 넣어주세요.
    pg_color? : string,
}

export type CustomImgType = MarginPaddingMixinType & BoarderViewType & {
    width : number | string,
    height? : number | string,
    object_fit? : string,
}

export type MoveElStyleType = CustomFlexType & {
    position_x: string,
    position_y : string,
}
