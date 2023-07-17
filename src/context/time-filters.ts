import { TimeFilters } from '@/const/time-filters'
import Storage from '@/utils/storage'

export type TimeList = string

const STORAGE_KEY = 'time-filters'
const defaultValue = TimeFilters.filter(item => item.picked)
  .map(item => item.key)
  .join(',')

export default new Storage({ key: STORAGE_KEY, defaultValue: defaultValue })