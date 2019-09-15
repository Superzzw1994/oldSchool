import React from 'react';
import './importAllIcons';
import './index.scss';
interface IconProps {
  name: string;
  onClick ?: React.MouseEventHandler<SVGElement>;
}
const Icon : React.FunctionComponent<IconProps> = (props) => {
  const { name, onClick } = props
  return <svg className='oldschool_icon' onClick={onClick}>
          <use xlinkHref={`#${name}`}></use>
        </svg>
}

export default Icon;