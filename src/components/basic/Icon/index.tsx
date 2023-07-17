import { FC } from 'react'
import './index.less'

export interface IconProps {
  name: string
  size?: 'big' | 'small'
  className?: string
  onClick?: () => void
}

const Icon: FC<IconProps> = (props, ref) => {
  const size = props.size ?? ''

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