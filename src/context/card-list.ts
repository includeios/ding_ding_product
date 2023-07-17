import { CardTypeEnum, PriorityTypeEnum, CardStatusEnum } from '@/const/card'
import Storage from '@/utils/storage'

export interface CardItem {
  type: CardTypeEnum,
  title: string,
  priority: PriorityTypeEnum,
  state: CardStatusEnum,
  desc?: string,
  tag?: string,
  ddl?: number,
}

export type CardList = CardItem[] | []

const STORAGE_KEY = 'card-list'

export default new Storage({ key: STORAGE_KEY, defaultValue: [] })