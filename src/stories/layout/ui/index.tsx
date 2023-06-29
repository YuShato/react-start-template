import { MOBILE_MAX, TABLET_MAX } from '../../../constants/media-query';
import { styled } from 'styled-components';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-inline: 40px;
  box-sizing: border-box;
  min-width: 100%;
  position: relative;

  @media ${TABLET_MAX} {
    padding-inline: 20px;
  }

  @media ${MOBILE_MAX} {
    padding-inline: 15px;
  }
`;

const UiLayout = Object.assign(LayoutWrapper, {});

export default UiLayout;
