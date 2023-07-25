import { useContext } from 'react';
import Button from '@mui/material/Button';
import TimeStorage, { TimeList } from '@/context/time-filters'
import { TimeFilters } from '@/const/time-filters'
import FiltersContext from '@/context/filters'


export default function TimeSwipe() {
  const timeKeyList = (TimeStorage.get() as TimeList).split(',')
  const timeList = TimeFilters.filter(item => timeKeyList.includes(item.key))
  const { filters, setFilters } = useContext(FiltersContext);
  const { time } = filters

  const onClickTimeButton = (time: string) => {
    setFilters?.({ time })
  }
  return (
    <div className="time-swipe">
      {
        timeList.map(item => (
          <Button
            variant="contained"
            key={item.key}
            onClick={() => onClickTimeButton(item.key)}
          >
            {item.title}
            {item.key === time ? '11111' : '00000'}
          </Button>
        ))
      }
      {/* 季度 半年 年度 支持自定义按钮 */}
      {/* 支持时间筛选 */}
      {/* 关闭前将上次保存存到localStorage */}
    </div>

  )
}