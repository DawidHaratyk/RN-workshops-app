import { Text } from 'react-native'
import React, { ReactNode } from 'react'
import { theme } from '../../../theme/theme'
import { styles } from './styles'

interface HeaderProps {
  children: ReactNode
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  color?: string
}

export function Header({
  children,
  variant,
  color = theme.colors.primary,
}: HeaderProps) {
  return <Text style={[styles.h2, styles[variant], { color }]}>{children}</Text>
}
