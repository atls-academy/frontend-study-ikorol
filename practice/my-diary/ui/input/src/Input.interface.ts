import { InputHTMLAttributes, MouseEventHandler } from 'react'

export interface InputProps extends Omit<InputHTMLAttributes<any>, 'size'> {
  search?: boolean
  size?: 'normal' | 'small' | 'large'
  onClear?: MouseEventHandler<any>
  buttonValue?: string
}
