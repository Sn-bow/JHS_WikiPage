import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  width: 100%;
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.section`
  width: 80%;
  height: 500px;
  margin: 30px 0;
`;

export const ListItemLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const ListItem = styled.div`
  width: 100%;
  padding: 20px;
  background-color: rgb(245, 245, 245);
  margin-bottom: 25px;
  border: 1px solid lightgray;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
  display: flex;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
    background-color: rgb(225, 225, 225);
    transition: background-color 0.3s ease-out;
  }
`;

export const ListText = styled.span`
  font-size: 25px;
`;

export const SubListText = styled.span`
  /* margin-left: 25px; */
`;

export const PaginationSection = styled.section`
  width: 80%;
  margin: 30px 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PagiPrevCount = styled.div`
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const PagiNextCount = styled.div`
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const PagiNumContain = styled.div`
  margin: 0 20px;
`;

export const PagiNum = styled.span`
  font-size: 20px;
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const WriteButtonLink = styled(Link)`
  position: absolute;
  right: 25px;
  bottom: 30px;
`;

export const ConfirmButton = styled.button`
  position: absolute;
  right: 25px;
  width: 105px;
  height: 35px;
  font-size: 18px;
  border-radius: 5px;
  background-color: rgb(245, 245, 245);
  transition: all 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
    right: 20px;
    width: 125px;
    height: 45px;
    font-size: 20px;
    background-color: rgb(225, 225, 225);
    transition: all 0.5s ease-in-out;
  }
`;
