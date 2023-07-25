import { FC } from 'react'
import './index.less'

export type IconProps = {
  name: string
  size?: 'big' | 'small' | 'mini'
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
      <use xlinkHref={`#icon-${props.name}`} />
    </svg>
  )
}

export default Icon