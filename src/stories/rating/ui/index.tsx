import { styled } from 'styled-components';

const UiStarRating = styled.div`
  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .on {
    color: gold;
  }
  .off {
    color: #ccc;
  }
`;

export default UiStarRating;
