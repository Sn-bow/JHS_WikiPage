import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

export const Section = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyleBox = styled.div`
  border: 1.5px solid lightgray;
  border-radius: 5px;
`;

export const Title = styled.div`
  width: 500px;
  height: 30px;
  border-bottom: 1.5px solid lightgray;
  padding: 10px;
  font-size: 18px;
  /* margin-bottom: 15px; */
`;

export const SubTitle = styled.div`
  width: 500px;
  min-height: 30px;
  border-bottom: 1.5px solid lightgray;
  padding: 10px;
  font-size: 18px;
  /* margin-bottom: 15px; */
`;

export const Content = styled.div`
  width: 500px;
  min-height: 400px;
  padding: 10px;
  font-size: 15px;
  border-bottom: 1.5px solid lightgray;
`;

export const TitleLink = styled(Link)``;

export const CanCleLink = styled(Link)`
  width: 500px;
  height: 25px;
  margin: 15px 0;

  &:hover {
    cursor: pointer;
  }
`;

export const CanCleButton = styled.button`
  width: 500px;
  height: 25px;
  margin: 15px 0;

  &:hover {
    cursor: pointer;
  }
`;

export const ModifyLink = styled(Link)`
  width: 500px;
  height: 25px;
  margin: 15px 0;

  &:hover {
    cursor: pointer;
  }
`;

export const Modify = styled.button`
  width: 500px;
  height: 25px;
  margin: 15px 0;

  &:hover {
    cursor: pointer;
  }
`;

export const AnatherInfor = styled.aside`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const AnotherTitleLink = styled(Link)`
  width: 15%;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: black;
  font-size: 18px;
  padding: 5px;
  border-radius: 5px;
  background-color: rgb(235, 235, 235);
  transition: all 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #848bbd;
    color: white;
    transition: all 0.1s ease-in-out;
  }
`;

export const TitleItem = styled.div``;
