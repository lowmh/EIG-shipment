import { ReactNode } from 'react'
import { RepeaterProps } from './types'

const Repeater = ({ count, tag, children, ...rest }: RepeaterProps & { children: (index: number) => ReactNode }) => {
  // ** Custom Tag
  const Tag = tag || 'div'

  // ** Default Items
  const items: ReactNode[] = []

  // ** Loop passed count times and push it in items Array
  for (let i = 0; i < count; i++) {
    items.push(children(i))
  }

  return <Tag {...rest}>{items}</Tag>
}

export default Repeater
