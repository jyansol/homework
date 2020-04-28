import React from 'react';
import styled from 'styled-components';

const EnteredWords = ({ enteredWords }) => {
  return (
    <Words>{enteredWords}</Words>
  )
}
const Words = styled.span`
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-size: 12px;
  color: #b4b4b4;
`;
export default EnteredWords;