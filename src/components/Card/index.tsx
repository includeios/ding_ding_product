
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { useState } from 'react'
import './index.less'

export default function BasicCard() {
  const [checked, setChecked] = useState(false)

  const handleChangeCheckbox = () => {
    setChecked(() => !checked)
  }

  return (
    <div className="basic-card">
      <header>
        <Checkbox
          checked={checked}
          onChange={handleChangeCheckbox}
        />
        <TextField
          required
          placeholder="Title"
          variant="standard"
        />
      </header>

    </div>
  )
}