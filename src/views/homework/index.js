import React from 'react';
import styled from 'styled-components';

import Card from '../../components/Card';
import Form from '../../components/Form';

const HomeWork = () => {
  const dummy = [
    {
      label: 'Card Label',
      title: 'Card Title',
      highLight: 'HighLight',
      crossOut: 'Cross Out',
      star: 1,
      content: '',
      isRow: false
    },
    {
      label: 'Card Label',
      title: '',
      highLight: 'HighLight',
      crossOut: 'Cross Out',
      star: 1,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      isRow: false
    },
    {
      label: 'Card Label',
      title: 'Card Title',
      highLight: 'HighLight',
      crossOut: 'Cross Out',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      isRow: true
    }
  ]
  return (
    <>
      <Wrapper>
        <h1>과제 1. 카드 UI </h1>
        <CardContainer>
          {dummy.map(item => {
            return (
              <Card item={item} />
            )
          })}
        </CardContainer>
        <h1>과제 2. Form UI</h1>
        <Form />
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  `;
const CardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
export default HomeWork;
