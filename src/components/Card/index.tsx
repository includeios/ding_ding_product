
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { useState } from 'react'
import MarkdownIt from 'markdown-it';
import './index.less'

export default function BasicCard() {
  const [checked, setChecked] = useState(false)
  const [desc, setDesc] = useState('')

  const mdParser = new MarkdownIt(/* Markdown-it options */);


  const handleChangeCheckbox = () => {
    setChecked(() => !checked)
  }
  const handleChangeDesc = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // console.log('111', mdParser.render(event.target.value))
    setDesc(() => event.target.value)
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

      {/* - 任务列表； + markdown */}
      <main>
        <TextareaAutosize
          value={desc}
          className="markdown-textarea"
          placeholder="desc"
          minRows={5}
          onChange={handleChangeDesc}
        />
      </main>
    </div>
  )
}