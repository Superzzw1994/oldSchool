import React from 'react';
import './importAllIcons';
import './index.scss';
interface IconProps {
  name: string;
}
const Icon : React.FunctionComponent<IconProps> = (props) => {
  return <svg className='oldschool_icon'>
          <use xlinkHref={`#${props.name}`}></use>
        </svg>
}

export default Icon;