import type { FC } from 'react'
import { useState, useEffect } from 'react'
import Icon from '@/components/basic/Icon'
import TimeStorage, { TimeList } from '@/context/time-filters'
import { TimeFilters } from '@/const/time-filters'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { type Dayjs } from 'dayjs';
import type { TimeItem } from '../index'
import './index.less'

interface TimeSelectProps {
  time: TimeItem | null,
  onChangeTime: (time: TimeItem | null) => void
}

const TimeSelect: FC<TimeSelectProps> = ({ time, onChangeTime }) => {
  const timeKeyList = (TimeStorage.get() as TimeList).split(',')
  const timeList = TimeFilters.filter(item => timeKeyList.includes(item.key))

  const [open, setOpen] = useState<boolean>(false);

  const isCustom = time?.key === 'custom'

  const handleSwitchMenu = () => {
    setOpen(!open);
  };
  const handleHiddenMenu = () => {
    setOpen(false);
  };

  const handleSelectTime = (value: Dayjs | null, key: string) => {
    onChangeTime({ value, key })
    handleHiddenMenu()
  }

  return (
    <div className="time-select">
      <div className="text" onClick={handleSwitchMenu}>
        {
          time?.value
            ? <div className="time">{dayjs(time.value).format('YYYY/MM/DD')}</div>
            : null
        }
        <Icon name="calendar" />
      </div>
      <div className={`menu ${open ? 'show' : 'hidden'}`}>
        {
          timeList.map(item => (
            <div
              className="menu-item"
              key={item.key}
              onClick={() => handleSelectTime(item.value, item.key)}
            >
              {item.title}
            </div>
          ))
        }
        <div className={`menu-item custom-time ${isCustom ? 'select-item' : ''}`}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker value={isCustom ? time?.value : null}
              onChange={(newValue) => handleSelectTime(newValue, 'custom')}
            />
          </LocalizationProvider>

        </div>
      </div>
    </div>
  )
}

export default TimeSelect