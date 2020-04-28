import React from 'react';
import styled from 'styled-components';


const Stars = ({ count }) => {
  let star = [];
  let starsLength = star.length;
  if (starsLength !== 5) {
    for (let i = 0; i < count; i++) {
      star.push(<ActiveStar></ActiveStar>);
    }
  }
  if (starsLength !== 5) {
    for (let i = 0; i < 5 - count; i++) {
      star.push(<DefaultStart></DefaultStart>);
    }
  }
  return star;
}
const Span = styled.span`
  display: block;
  margin: 0 1px;
  width: 15px;
  height: 15px;
  border-radius: 25px;
`;
const ActiveStar = styled(Span)`
  background-color: #FDC62F;
`;
const DefaultStart = styled(Span)`
  background-color: #D9D8D8;
`;
export default Stars;
