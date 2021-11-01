import 'twin.macro'
import type { FC } from 'react'

export const Title: FC<TitleProps> = ({ children, className }) => {
  return (
    <h3 tw="text-lg font-bold" className={className}>
      {children}
    </h3>
  )
}

interface TitleProps {
  className?: string
}
