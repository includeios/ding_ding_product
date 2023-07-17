import type { FC } from 'react'
import { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import type { CardItem } from '@/context/card-list'
import TooltipIcon from '@/components/basic/TooltipIcon'
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
        <TooltipIcon
          title="delete"
          className="delete-icon"
          name={"icon-delete"}
          onClick={deleteCard}
        />
        <TimeSelect />
      </header>
      <main>
        <header>
          <Checkbox
            checked={checked}
            onChange={handleChangeCheckbox}
          />
          <TextField
            placeholder="Title"
            variant="standard"
          />
        </header>
        TODO markdown 部分
      </main>
    </div>
  )
}

export default BasicCard