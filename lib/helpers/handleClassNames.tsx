// 处理className,将用户传入的className合并到默认的className上,如果接收的className为undefinded，则去掉且去掉末尾空格

const classes = (...names: (string | undefined)[]) => {
  return names.filter(Boolean).join(' ').trim()
}

export default classes;