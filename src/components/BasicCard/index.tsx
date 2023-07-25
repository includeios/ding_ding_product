import type { FC } from 'react'
import { useState } from 'react'
import Checkbox from '@/components/basic/Checkbox'
import type { CardItem } from '@/context/card-list'
import TooltipIcon from '@/components/basic/TooltipIcon'
import TimeSelect from './TimeSelect';
import type { Dayjs } from 'dayjs'
import { TimeFilters } from '@/const/time-filters'

import './index.less'

interface BasicCardProps {
  data: CardItem
  deleteCard: () => void
}

export type TimeItem = {
  value: Dayjs | null
  key: typeof TimeFilters[number]['key'] | 'custom'
}

const BasicCard: FC<BasicCardProps> = (props) => {
  const { deleteCard } = props
  const [checked, setChecked] = useState(false)
  const [ddlTime, setDdlTime] = useState<TimeItem | null>(null)

  const handleChangeCheckbox = () => {
    setChecked(() => !checked)
  }

  return (
    <div className="basic-card">
      <header className="top-bar">
        <div className="title-container">
          <Checkbox
            checked={checked}
            onChange={handleChangeCheckbox}
          />
          <input
            className="title-input"
            placeholder="请输入标题"
          />
        </div>
        <TimeSelect
          time={ddlTime}
          onChangeTime={setDdlTime}
        />
        <TooltipIcon
          desc="高优"
          className="action-icon"
          name="priority"
        />
        <TooltipIcon
          desc="删除卡片"
          className="action-icon"
          name="trash"
          onClick={deleteCard}
        />
      </header>
      <main className="card-main">
        TODO markdown 部分
      </main>
    </div>
  )
}

export default BasicCard