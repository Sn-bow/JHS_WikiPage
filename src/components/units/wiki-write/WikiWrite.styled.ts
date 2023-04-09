import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.section`
  width: 80%;
  height: 500px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputStyleBox = styled.div`
  width: 100%;
  position: relative;
  /* display: flex; */
`;

export const StyleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

// error message styled
export const ErrorMessage = styled.div`
  color: red;
  font-size: 15px;
  position: absolute;
  margin-top: 0px;
  /* margin-left: 70px; */
`;

export const TitleLabel = styled.label`
  width: 10%;
  margin-right: 15px;
  text-align: center;
  font-size: 18px;
`;

export const SubTitleLabel = styled.label`
  width: 10%;
  margin-right: 15px;
  text-align: center;
  font-size: 18px;
`;

export const ContentLabel = styled.label`
  width: 10%;
  margin-right: 15px;
  text-align: center;
  font-size: 18px;
`;

export const TitleInput = styled.input`
  width: 500px;
  height: 25px;
  margin-bottom: 25px;
`;

export const SubTitleInput = styled.input`
  width: 500px;
  height: 25px;
  margin-bottom: 25px;
`;

export const ContentInput = styled.textarea`
  width: 500px;
  height: 325px;
  margin-bottom: 25px;
  resize: none;
`;

export const ButtonBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

export const CancelButtonLink = styled(Link)`
  position: absolute;
  margin-right: 290px;
  width: 130px;
  height: 30px;

  &:hover {
    cursor: pointer;
  }
`;

export const CancelButton = styled.button`
  position: absolute;
  margin-right: 290px;
  width: 130px;
  height: 30px;

  &:hover {
    cursor: pointer;
  }
`;

export const ConfirmButton = styled.button`
  position: absolute;
  margin-right: 140px;
  width: 130px;
  height: 30px;

  &:hover {
    cursor: pointer;
  }
`;
