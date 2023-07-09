import { styled } from 'styled-components';

const ShopItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 70px 3fr 1fr 1fr 1fr 40px;
  column-gap: 14px;
  background: #fbfbfb;
  color: #a5a5a5;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  align-items: center;
  align-content: center;
  justify-content: center;

  p {
    padding: 0;
    margin: 0;
  }
`;

const ShopItemName = styled.p`
  color: #3d3d3d;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;

const ShopItemSku = styled.p`
  color: #a5a5a5;
  font-size: 14px;

  span {
    text-transform: uppercase;
    color: #a5a5a5;
  }
`;

const ShopItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const ShopItemPrice = styled.p`
  color: #727272;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  text-align: center;
`;

const ShopItemTotal = styled.p`
  color: #46a358;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
`;

const ShopItemTrashButton = styled.button`
  width: 30px;
  height: 30px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  text-align: center;
  margin-right: 20px;
  align-self: center;

  @media (hover: hover) {
    &:hover {
      svg path {
        fill: #46a358;
      }
    }
  }

  &:active {
    svg path {
      fill: #a34646;
    }
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const UiShopItem = Object.assign(ShopItemWrapper, {
  Name: ShopItemName,
  Sku: ShopItemSku,
  Info: ShopItemInfo,
  Price: ShopItemPrice,
  Total: ShopItemTotal,
  TrashButton: ShopItemTrashButton,
});

export default UiShopItem;
