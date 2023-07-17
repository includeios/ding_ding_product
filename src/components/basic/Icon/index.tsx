import { FC } from 'react'
import './index.less'

export enum IconSize {
  Big = 'big',
  Normal = '',
  Small = 'small'
}

export interface IconProps {
  name: string
  size?: IconSize
  className?: string
  onClick?: () => void
}

const Icon: FC<IconProps> = (props, ref) => {
  const size = props.size ?? IconSize.Normal

  const handleClickIcon = () => {
    if (props.onClick) {
      props.onClick()
    }
  }

  return (
    <svg
      className={`icon ${size} ${props.className ?? ''}`}
      aria-hidden="true"
      onClick={handleClickIcon}
    >
      <use xlinkHref={`#${props.name}`} />
    </svg>
  )
}

export default Icon