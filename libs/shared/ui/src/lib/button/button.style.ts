import styled from 'styled-components';
import { ButtonProps } from "./button";

const colorMap = {
  primary: '#399BF8',
  transparent: 'transparent'
}

const sizeMap = {
  large: {
    width: '130px',
    height: '40px',
  },
  medium: {
    width: '130px',
    height: '40px',
  },
  small: {
    width: '130px',
    height: '40px',
  },
  auto: {
    width: 'auto',
    height: '40px',
  },
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFF;

  border: ${p => (!p.variant || p.variant !== 'outlined') ? 'none' : `1px solid ${colorMap[p.color]}`};

  img {
    margin-left: 8px;
    margin-right: 8px;
  }
`;

export const PrimaryButton = styled(StyledButton)`

  width: ${p => p.size ? sizeMap[p.size].width : sizeMap.auto.width};
  height: ${p => p.size ? sizeMap[p.size].height : sizeMap.medium.height};
  background: ${p => p.variant !== 'outlined' ? colorMap[p.color] : 'transparent'};
`;
