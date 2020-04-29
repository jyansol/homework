import React from 'react';
import styled from 'styled-components';
import cardImg from '../../assets/images/card.png';
import Stars from '../Stars/index';

const Card = ({ item }) => {
  const { label, title, highLight, crossOut, star, content, isRow } = item;
  return (
    <>
      <Item row={isRow}>
        <ImageContainer row={isRow}>
          <img src={cardImg} alt="카드 이미지" />
        </ImageContainer>
        <Div>
          <ContentContainer>
            <Label>{label && label}</Label>
            <Title>{title && title}</Title>
            <HighLight>{highLight && highLight}</HighLight>
            <CrossOut>{crossOut && crossOut}</CrossOut>
          </ContentContainer>
          {star && (
            <StarContentContainer row={isRow}>
              <StarContainer>
                <Stars count={star} />&nbsp;| John Does
              </StarContainer>
            </StarContentContainer>
          )}
          {content && (
            <Content>
              {content}
            </Content>
          )}
        </Div>
      </Item>
    </>
  )
}
const Item = styled.div`
  display: flex;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  border: 1px solid #D9D8D8;
  border-radius: 5px;
  background-color: #F8F9FB;
  overflow: hidden;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.row ? '160px' : '200px')};
  height: ${props => (props.row ? 'auto' : '200px')};
  img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }
`;
const Div = styled.div``;
const ContentContainer = styled.div`
  width: auto;
  padding: 15px;
`;
const StarContentContainer = styled(ContentContainer)`
  border-top: ${props => (props.row ? 'none' : '1px solid #bdbdbd')};
`;
const Label = styled.label`
  font-size: 12px;
  color: #bdbdbd;
`;
const Title = styled.h1`
  margin-top: 5px;
  font-size: 14px;
  font-weight: normal;
`;
const HighLight = styled.span`
  display: inline-block;
  color: tomato;
  font-size: 14px;
  margin-top: 25px;
`;
const CrossOut = styled.span`
  text-decoration: line-through;
  margin-left: 5px;
  font-size: 12px;
  color: #bdbdbd;
`;
const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: #bdbdbd;
  font-size: 12px;
`;
const Content = styled.div`
  width: 160px;
  font-size: 14px;
  color: #323232;
  padding: 0 15px 15px;
  overflow:hidden; 
  text-overflow:ellipsis;
  white-space:nowrap;
`;
export default Card;