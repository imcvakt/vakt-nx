import React, { ReactNode } from 'react';

import { PrimaryButton } from './button.style';

/* eslint-disable-next-line */
export interface ButtonProps {
  children: ReactNode,
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void,
  color?: 'primary' | 'secondary' | 'transparent',
  variant?: 'contained' | 'outlined',
  size?: 'large' | 'medium' | 'outlined' | 'auto'
}

export const Button = ({children, onClick, color = 'primary', variant = 'contained', size='medium'}: ButtonProps) => {
  let C;

  switch (color) {
    default:
      C = PrimaryButton;
      break;
  }

  return (
    <C
      onClick={onClick}
      color={color}
      variant={variant}
      size={size}>
      {children}
    </C>
  );
};

export default Button;
