import type { FC } from 'react'
import { useState } from 'react'
import Icon from '@/components/basic/Icon'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TimeStorage, { TimeList } from '@/context/time-filters'

interface TimeSelectProps {
  onChangeTime: (time: string) => void
}

const TimeSelect: FC<TimeSelectProps> = (props) => {
  const timeList = (TimeStorage.get() as TimeList).split(',')
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChangeTime = (time: string) => {
    props.onChangeTime(time)
    handleClose()
  }

  return (
    <div className="time-select">
      <div className="text" onClick={handleClick}>
        <Icon name="calendar" />
      </div>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {
          timeList.map(item => (
            <MenuItem
              key={item}
              onClick={() => handleChangeTime(item)}
            >
              {item}
            </MenuItem>
          ))
        }
      </Menu>
    </div>
  )
}

export default TimeSelect