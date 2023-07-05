import { styled } from 'styled-components';

const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  color: #727272;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;

  p {
    margin: 0;
    padding: 0;
  }
`;

const ItemDescriptionTitle = styled.h4`
  color: #3d3d3d;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  margin: 0;
  padding: 0;
`;

const ItemDescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const UiDescription = Object.assign(ItemDescription, {
  Title: ItemDescriptionTitle,
  Block: ItemDescriptionBlock,
});

export default UiDescription;
