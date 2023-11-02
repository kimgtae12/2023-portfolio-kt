import React from 'react';
import * as S from '../../theme/style';
import { TaskArrayItemType } from '../../screen/Task';

interface TaskMobileCardType {
    index : number,
    cardItem : TaskArrayItemType,
    selectTaskHandler : (title : string) => void; //task 선택
    selectTask : string //선택한 task
    moveLinkHandler : (isMove : boolean , link : string) => void; //링크이동 handler
}

export const TaskMobileCard = () => {

}