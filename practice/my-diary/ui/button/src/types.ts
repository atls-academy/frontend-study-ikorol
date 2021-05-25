import { LayoutProps } from 'styled-system'

export interface ButtonProps extends LayoutProps {
  type: 'large' | 'filter' | 'search'
}
