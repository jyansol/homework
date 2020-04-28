import React from 'react';
import styled from 'styled-components';
import cardImg from '../../assets/images/card.png';
import Stars from '../Stars/index';

const Card = ({ item }) => {
  const { label, title, highLight, crossOut, star, content, isRow } = item;
  return (
    <Item row={isRow}>
      <ImageContainer row={isRow}>
        <img src={cardImg} alt="카드 이미지" />
      </ImageContainer>
      <ContentContainer>
        {label && (
          <Label>
            {label}
          </Label>
        )}
        {title && (
          <Title>
            {title}
          </Title>
        )}
        {highLight && (
          <HighLight>{highLight}</HighLight>
        )}
        {crossOut && (
          <span>{crossOut}</span>
        )}
        {star && (
          <StarContainer>
            <Stars count={star} />
          </StarContainer>
        )}
      </ContentContainer>
    </Item>
  )
}
const Item = styled.div`
  display: flex;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  width: auto;
  height: ${props => (props.row ? '160px' : 'auto')};
  border: 1px solid #D9D8D8;
  border-radius: 5px;
  background-color: #F8F9FB;
  overflow: hidden;
  `;
const ImageContainer = styled.div`
  width: ${props => (props.row ? '160px' : '200px')};
  border: 1px solid red;
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
`;
const ContentContainer = styled.div`
  width: auto;
  padding: 15px;
`;
const Label = styled.label`
  font-size: 12px;
  color: #bdbdbd;
`;
const Title = styled.h1`
  margin: 0;
  font-size: 14px;
  font-weight: normal;
`;
const HighLight = styled.span``;
const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export default Card;