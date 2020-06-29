import styled from "styled-components";

export const GridDisplay = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;



export const ImgContainer = styled.div`
  width: 100%;
  height: 70%;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const Name = styled.p`
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const RowDisplay = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 50px;
`;

export const ImgRowContainer = styled.div`
  width: 100%;
  height: 90%;
`;

export const Info = styled.p`
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justifi-content: center;
`;
