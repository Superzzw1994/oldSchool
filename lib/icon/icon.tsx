import React from 'react';
import './importAllIcons';
import './index.scss';
import classes from '../helpers/handleClassNames';
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}
const Icon : React.FunctionComponent<IconProps> = (props) => {
  const { name, className, ...restProps } = props
  return <svg className={classes('oldschool_icon', className)} {...restProps}>
          <use xlinkHref={`#${name}`}></use>
        </svg>
}

export default Icon;