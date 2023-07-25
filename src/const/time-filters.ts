import dayjs from 'dayjs'
import quarterOfYear from 'dayjs/plugin/quarterOfYear'

dayjs.extend(quarterOfYear)

export interface TimeFilterItem {
  title: string,
  check: (ddl: number) => boolean,
  picked: boolean,
  default?: boolean,
}

export const TimeFilters = [
  {
    title: '今日',
    key: 'today',
    value: dayjs(),
    check: (ddl: number) => dayjs(ddl).isBefore(dayjs().endOf('day')),
    picked: true,
    default: true,
  },
  {
    title: '本周',
    key: 'week',
    value: dayjs().endOf('week'),
    picked: true,
    check: (ddl: number) => dayjs(ddl).isBefore(dayjs().endOf('week')),
  },
  {
    title: '本月',
    key: 'month',
    value: dayjs().endOf('month'),
    picked: true,
    check: (ddl: number) => dayjs(ddl).isBefore(dayjs().endOf('month')),
  },
  {
    title: '季度',
    key: 'quarter',
    picked: false,
    value: dayjs().endOf('quarter'),
    check: (ddl: number) => dayjs(ddl).isBefore(dayjs().endOf('quarter')),
  },
  {
    title: '全年',
    key: 'year',
    picked: false,
    value: dayjs().endOf('year'),
    check: (ddl: number) => dayjs(ddl).isBefore(dayjs().endOf('year')),
  }
]