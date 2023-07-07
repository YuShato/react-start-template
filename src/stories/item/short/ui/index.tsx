import { styled } from 'styled-components';

const ShortItem = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
  max-width: 300px;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding-bottom: 20px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const ShortItemImg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 250px;
  max-height: 250px;
  margin-inline: auto;

  img {
    width: 250px;
    height: 250px;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

const ShortItemPrices = styled.p`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding-inline: 25px;
`;

const ShortItemPrice = styled.span`
  color: #46a358;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
`;

const OldItemPrice = styled(ShortItemPrice)`
  color: #a5a5a5;
  text-decoration: line-through;
`;

const ShortItemTitle = styled.h2`
  color: #3d3d3d;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  transition: color 0.3s;
  padding: 0;
  margin: 0;
  padding-inline: 25px;

  &:hover {
    color: #46a358;
  }
`;

const ShortItemDescription = styled.p`
  font-size: 14px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
  padding: 0;
  padding-inline: 25px;
`;

const ShortItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  background: #fbfbfb;
  padding-top: 24px;
  padding-bottom: 24px;
  border-top: 1px solid transparent;
  transition: border-top 0.3s;

  &:hover {
    border-top: 1px solid #46a358;
  }
`;

const ShortDiscount = styled.span`
  position: absolute;
  top: 14px;
  left: 0;
  z-index: 1;
  background: #46a358;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  padding: 7px 9px;
  color: #fff;
`;

const UiShort = Object.assign(ShortItem, {
  Prices: ShortItemPrices,
  Price: ShortItemPrice,
  OldPrice: OldItemPrice,
  Title: ShortItemTitle,
  Description: ShortItemDescription,
  Info: ShortItemInfo,
  Discount: ShortDiscount,
  Img: ShortItemImg,
});

export default UiShort;
