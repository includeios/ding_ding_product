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
    check: (ddl: number) => true,
    picked: true,
    default: true,
  },
  {
    title: '本周',
    key: 'week',
    picked: true,
    check: (ddl: number) => true,
  },
  {
    title: '本月',
    key: 'month',
    picked: true,
    check: (ddl: number) => true,
  },
  {
    title: '季度',
    key: 'season',
    picked: false,
    check: (ddl: number) => true,
  },
  {
    title: '半年',
    picked: false,
    key: 'half-year',
    check: (ddl: number) => true,
  },
  {
    title: '全年',
    key: 'year',
    picked: false,
    check: (ddl: number) => true,
  }
]