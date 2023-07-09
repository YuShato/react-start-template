import { ButtonHTMLAttributes } from 'react';
import { css, styled } from 'styled-components';

export interface UiSizeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

const SizesList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SizeItem = styled.li`
  margin: 0;
  padding: 0;
`;

const SizeListButton = styled.button<UiSizeButtonProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #727272;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  border-radius: 28px;
  width: 28px;
  height: 28px;
  transition: 0.3s all;
  border: 1px solid #eaeaea;
  padding: 0;
  margin: 0;

  ${({ active }) =>
    active &&
    css`
      color: #46a358;
      border: 1px solid #46a358;
    `}

  &:hover {
    opacity: 0.7;
  }
`;

const SizeListTitle = styled.h3`
  color: #3d3d3d;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

const UiSize = Object.assign(SizesList, {
  Item: SizeItem,
  Button: SizeListButton,
  Title: SizeListTitle,
});

export default UiSize;
