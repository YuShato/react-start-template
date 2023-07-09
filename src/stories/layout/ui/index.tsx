import { MOBILE_MAP, MOBILE_MAX, TABLET_MAX } from '../../../constants/media-query';
import { styled } from 'styled-components';

const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-inline: 40px;
  box-sizing: border-box;
  min-width: 100%;
  margin-bottom: 60px;

  @media ${TABLET_MAX} {
    padding-inline: 20px;
    margin-bottom: 40px;
  }

  @media ${MOBILE_MAX} {
    padding-inline: 15px;
    margin-bottom: 30px;
  }
`;

const LayoutContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-inline: auto;

  @media (max-width: 1300px) {
    max-width: 100%;
    padding-inline: 30px;
    box-sizing: border-box;
  }

  @media ${MOBILE_MAP} {
    padding-inline: 15px;
  }

  @media ${MOBILE_MAX} {
    padding-inline: 0;
  }
`;

const UiLayout = Object.assign(LayoutWrapper, {
  Container: LayoutContainer,
});

export default UiLayout;
