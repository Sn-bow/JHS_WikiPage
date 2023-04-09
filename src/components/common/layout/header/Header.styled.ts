import styled from '@emotion/styled';

export const Wrapper = styled.header`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #848bbd;
  background-color: #848bbd;
  position: relative;
`;

export const WiKiLogo = styled.h1`
  margin: 20px;
  position: relative;
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;
  position: absolute;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: white;
    font-size: 20px;
    transition: all 0.5s ease-in-out;
  }
`;
