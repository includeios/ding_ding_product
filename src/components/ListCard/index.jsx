
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { useState } from 'react'

export default function BasicCard() {
  const [checked, setChecked] = useState(0)

  const handleChangeCheckbox = () => {
    setChecked(() => !checked)
  }
  return (
    <div className="basic-card">
      <header>
        <Checkbox
          checked={checked}
          onChange={handleChangeCheckbox}
          size="big"
        />
        <TextField
          required
          id="standard-basic"
          placeholder="Title"
          variant="standard"
        />
      </header>

      <main />
    </div>
  )
}