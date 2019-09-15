import Icon from './icon/icon';
import React from 'react';
import ReactDOM from 'react-dom';
const fn = (e: React.MouseEvent<SVGElement | SVGUseElement>): void => {
  console.log((e.target as SVGUseElement).href)
}
ReactDOM.render(<Icon name='zzw' onClick={(e) => fn(e)}/>, document.getElementById('root'));