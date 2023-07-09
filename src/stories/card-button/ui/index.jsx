import { styled } from 'styled-components';

const ShopCountButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 29px;
  background: linear-gradient(180deg, #46a358 0%, rgba(70, 163, 88, 0.8) 100%);
  color: #ffffff;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  border: none;
  outline: none;
  padding: 0;

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;

const ShopCountInput = styled.input`
  border-radius: 5px;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  width: min-content;
  width: 50px;
  height: 38px;
  text-align: center;
  background: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus,
  &:hover,
  &:active,
  &:focus-visible {
    border: 1px solid #46a358;
    outline: none;
  }
`;

const ShopButtonWrapper = styled.div`
  display: flex;
  column-gap: 5px;
  align-items: center;
`;

const UiBuy = Object.assign(ShopButtonWrapper, {
  Button: ShopCountButton,
  Input: ShopCountInput,
});

export default UiBuy;
