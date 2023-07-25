import { FC, PropsWithChildren, ReactNode } from 'react'
import './index.less'

export type TooltipProps = PropsWithChildren<{
  position?: 'up' | 'left' | 'down' | 'right'
  desc: string | ReactNode,
}>;

const Tooltip: FC<TooltipProps> = ({ position = 'down', desc, children }) => {
  return (
    <div className={`tooltip-container ${position}`}>
      {children}
      <div className="tooltip">
        {
          typeof desc === 'string'
            ? desc ? <div className="text">{desc}</div> : null
            : <>{desc}</>
        }
      </div>
    </div>
  );
}
export default Tooltip