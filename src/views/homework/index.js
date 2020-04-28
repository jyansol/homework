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
      star: 3,
      content: '안녕하세요. 어쩌구저쩌구입니다.',
      isRow: false
    },
    {
      label: 'Card Label',
      title: 'Card Title',
      highLight: 'HighLight',
      crossOut: 'Cross Out',
      star: '',
      content: '안녕하세요. 어쩌구저쩌구입니다.',
      isRow: false
    },
    {
      label: 'Card Label',
      title: 'Card Title',
      highLight: 'HighLight',
      crossOut: 'Cross Out',
      star: 1,
      content: '',
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
  max-width: 772px;
  margin: 0 auto;
  `;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
export default HomeWork;
