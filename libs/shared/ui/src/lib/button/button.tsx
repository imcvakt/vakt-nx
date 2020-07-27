import React, { ReactNode, ButtonHTMLAttributes } from 'react';

import { PrimaryButton } from './button.style';

/* eslint-disable-next-line */
interface AdditionalButtonProps {
  children: ReactNode,
  // onClick?: (e: React.MouseEvent<HTMLInputElement>) => void,
  color?: 'primary' | 'secondary' | 'transparent',
  variant?: 'contained' | 'outlined',
  size?: 'large' | 'medium' | 'outlined' | 'auto'
}

export type ButtonProps = AdditionalButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({children, color = 'primary', variant = 'contained', size='medium', ...rest}: ButtonProps) => {
  let C;

  switch (color) {
    default:
      C = PrimaryButton;
      break;
  }

  return (
    <C
      color={color}
      variant={variant}
      size={size}
      {...rest}>
      {children}
    </C>
  );
};

export default Button;
