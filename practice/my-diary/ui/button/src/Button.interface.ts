import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<any> {
  isSelected?: any
  size?: string
  borderRadius?: any
  color?: string
  shadow?: string
  marginTop?: string | number
}
