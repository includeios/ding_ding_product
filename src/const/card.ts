export enum CardTypeEnum {
  Basic
}

export enum CardStatusEnum {
  Normal,
  Delete,
  Done,
  TimeOut,
}

export enum PriorityTypeEnum {
  High,
  Normal
}

export const PriorityType = {
  [PriorityTypeEnum.High]: {
    key: PriorityTypeEnum.High,
    text: '高优',
    style: {}
  },
  [PriorityTypeEnum.Normal]: {
    key: PriorityTypeEnum.Normal,
    default: true,
    text: '',
    style: {}
  },
}