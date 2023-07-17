import { FC } from 'react'
import Icon from '@/components/basic/Icon';
import type { IconProps } from '@/components/basic/Icon';
import Tooltip from '@mui/material/Tooltip';
import './index.less'

interface TooltipIconProps extends IconProps {
  title: string
}

const TooltipIcon: FC<TooltipIconProps> = (props) => {
  const { title, ...iconProps } = props
  return (
    <Tooltip title={title} arrow>
      <span className="icon-container">
        <Icon {...iconProps} />
      </span>
    </Tooltip>
  );
}
export default TooltipIcon