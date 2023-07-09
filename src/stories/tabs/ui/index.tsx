import { ButtonHTMLAttributes } from 'react';
import { styled } from 'styled-components';

interface UiTabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

interface ContentProps {
  active: boolean;
}

export const Tabs = styled.div`
  display: flex;
  overflow: hidden;
  background: #fff;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  height: auto;
  min-height: 28px;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const Tab = styled.button<UiTabButtonProps>`
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  max-width: 200px;
  position: relative;

  margin-right: 0.1em;
  font-size: 1em;
  background-color: transparent;
  border-bottom: ${(props) => (props.active ? '3px solid #46A358;' : 'none')};
  color: ${(props) => (props.active ? '#46A358' : '#3D3D3D')};
  font-weight: ${(props) => (props.active ? 700 : 400)};

  padding-bottom: 12px;
  transition: background-color 0.5s ease-in-out;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;

  :hover {
    background-color: white;
  }
`;

export const Content = styled.div<ContentProps>`
  display: ${(props) => (props.active ? 'flex' : 'none')};
`;
