import { FC } from 'react'
import './index.less'
import Icon, { IconProps } from '@/components/basic/Icon'

export interface CheckboxProps {
  checked: boolean
  size?: IconProps['size']
  onChange?: (checked: boolean) => void
}


const Checkbox: FC<CheckboxProps> = (props, ref) => {
  const { checked, size, onChange } = props
  const onClickCheckbox = () => {
    if (onChange && typeof onChange === 'function') {
      onChange(checked)
    }
  }

  return (
    <span className="checkbox" onClick={onClickCheckbox}>
      {
        checked
          ? <Icon name="checked" size={size} />
          : <Icon name="un-check" size={size} />
      }
    </span>
  )
}

export default Checkbox