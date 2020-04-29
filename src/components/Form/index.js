import React, { useState } from 'react';
import styled from 'styled-components';
import EnteredWords from '../../components/EnteredWords';

const Form = () => {
  const [words, setWords] = useState({
    default: 500,
    entered: 0
  })
  const [defaultText, setDefaultText] = useState('입력해주세요.')
  const [saveButton, setSaveButton] = useState(false);
  const [active, setActive] = useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setDefaultText(value);
    setSaveButton(true);
    setActive(true);
    // # 값이 없을 때 저장버튼 비활성화
    if (!value.length) {
      setSaveButton(false);
      setActive(false);
    }
    setWords({
      ...words,
      entered: value.length
    })
  }
  const enteredWords = words.default - words.entered;
  return (
    <FormContainer>
      <Div>
        <ActiveButtonTextarea>
          <Textarea placeholder={defaultText} onChange={handleChange} maxlength={words.default} active={active}></Textarea>
          <EnteredWords enteredWords={enteredWords} />
        </ActiveButtonTextarea>
        {saveButton && <SaveButton>SAVE</SaveButton>}
      </Div>
      <Div>
        <ActiveButtonTextarea>
          <Textarea value="읽기 전용입니다." readonly="readonly" maxlength={words.default}></Textarea>
        </ActiveButtonTextarea>
      </Div>
      <Div>
        <ActiveButtonTextarea>
          <Textarea placeholder="비활성화 상태입니다." disabled="disabled" maxlength={words.default}></Textarea>
          <EnteredWords enteredWords={enteredWords} />
        </ActiveButtonTextarea>
      </Div>
    </FormContainer>
  )
}
const FormContainer = styled.form`
  display:flex;
  flex-direction: column;
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
`;
const ActiveButtonTextarea = styled.div`
  position: relative;
  width: 100%;
  display: flex;
`;
const SaveButton = styled.button`
  color: #42B0B5;
  background-color: #fff;
  border: 1px solid #b4b4b4;
  margin-left: 5px;
`;
const Textarea = styled.textarea`
  background-color: ${props => (props.disabled ? '#F9F9F9' : 'inherit')};
  width: 100%;
  height: 50px;
  padding:5px;
  margin:0;
  resize: none;
  overflow: hidden;
  border: ${props => (props.active ? '1px solid #42B0B5' : '1px solid #D4D4D4')};
  color: #323232;
  &:focus {
    outline: 0;
  }
  &::placeholder {
    color: ${props => (props.disabled ? 'tomato' : (props.readOnly ? '#b4b4b4' : '#323232'))};
  }
`;
export default Form;
