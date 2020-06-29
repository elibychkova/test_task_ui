import styled from "styled-components";

export const ManufacturersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  width: 210px;
  height: 160px;
  border: 1px solid #CBCBCB;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
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
  height: 30%;
`;
