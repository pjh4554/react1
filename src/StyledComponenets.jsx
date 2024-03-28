import styled from "styled-components";

export const StyledComponenets = () => {
  return (
    <SContainer>
      <STitle>Styled Componenets입니다</STitle>
      <SButton>버튼</SButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: solid 1px #aaa;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  color: #aaa;
  width: 300px;
`;
const SButton = styled.button`
  background-color: #ddd;
  border: none;
  padding: 8px;
  border-radius: 8px;
  width: 50px;
  &:hover {
    background-color: #aaa;
    color: #fff;
    cursor: pointer;
  }
`;
