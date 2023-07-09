import { MOBILE_MAP } from '../../../../constants/media-query';
import UiBuy from '../../../card-button/ui';
import { styled } from 'styled-components';

const FullItemTitle = styled.h1`
  color: #3d3d3d;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  margin: 0;
  padding: 0;
`;

const FullItemDescription = styled.p`
  color: #727272;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 0;
  margin: 0;
`;

const FullItemPrice = styled.p`
  color: #46a358;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
`;

const FullItemSubTitle = styled.h3`
  color: #3d3d3d;
  font-size: 15px;
  font-style: normal;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 500;
  line-height: 16px;
  margin: 0;
  padding: 0;
`;

const FullItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  max-width: 573px;

  ${UiBuy} {
    margin-right: 25px;
  }

  @media (max-width: 1300px) {
    max-width: 100%;
  }
`;

const FullItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 0.3px solid rgba(70, 163, 88, 0.5);
  padding-top: 15px;
`;

const ButtonList = styled.div`
  display: flex;
  column-gap: 10px;
  margin-top: 23px;
  margin-bottom: 26px;

  @media ${MOBILE_MAP} {
    flex-wrap: wrap;
    row-gap: 10px;
  }
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const MainInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;

  @media (max-width: 1450px) {
    column-gap: 30px;
  }

  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
    row-gap: 30px;
  }
`;

const UiFItem = Object.assign(FullItemWrapper, {
  Title: FullItemTitle,
  Description: FullItemDescription,
  Price: FullItemPrice,
  SubTitle: FullItemSubTitle,
  Info: FullItemInfo,
  ButtonList,
  InfoList,
  MainInfo,
});

export default UiFItem;
