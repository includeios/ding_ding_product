import type { FC } from 'react'
import { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import type { CardItem } from '@/context/card-list'
import TooltipIcon from '@/components/basic/TooltipIcon'
import Icon from '@/components/basic/Icon'
import TimeSelect from './TimeSelect';
import './index.less'

interface BasicCardProps {
  data: CardItem
  deleteCard: () => void
}

const BasicCard: FC<BasicCardProps> = (props) => {
  const { deleteCard } = props
  const [checked, setChecked] = useState(false)

  const handleChangeCheckbox = () => {
    setChecked(() => !checked)
  }

  return (
    <div className="basic-card">
      <header className="top-bar">
        <div className="title-container">
          <Checkbox
            checked={checked}
            icon={<Icon name="un-check" size="big" />}
            checkedIcon={<Icon name="checked" size="big" />}
            onChange={handleChangeCheckbox}
          />
          <TextField
            placeholder="Title"
            variant="standard"
          />
        </div>

        <TimeSelect />
        <TooltipIcon
          title="高优"
          className="action-icon"
          name="priority"
        />
        <TooltipIcon
          title="删除卡片"
          className="action-icon"
          name="trash"
          onClick={deleteCard}
        />


      </header>
      <main>
        TODO markdown 部分
      </main>
    </div>
  )
}

export default BasicCard