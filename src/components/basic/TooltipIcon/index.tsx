import { FC } from 'react'
import Icon, { type IconProps } from '@/components/basic/Icon';
import Tooltip, { type TooltipProps } from '@/components/basic/Tooltip';
import './index.less'

type TooltipIconProps = IconProps & TooltipProps

const TooltipIcon: FC<TooltipIconProps> = (props) => {
  const { desc, position, ...iconProps } = props
  return (
    <Tooltip desc={desc} position={position}>
      <span className="icon-container">
        <Icon {...iconProps} />
      </span>
    </Tooltip>
  );
}
export default TooltipIcon