import { styled } from 'styled-components';

const StarRating = styled.div`
  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    width: 15px;
    height: 15px;
    padding: 0;
    margin: 0;
    font-size: 16px;
  }

  .on {
    color: gold;
  }

  .off {
    color: #ccc;
  }
`;

const RatingTitle = styled.h3`
  color: #3d3d3d;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
  padding: 0;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 11px;
  margin-bottom: 11px;
`;
const UiStarRating = Object.assign(StarRating, {
  Title: RatingTitle,
  Wrapper: RatingWrapper,
});

export default UiStarRating;
