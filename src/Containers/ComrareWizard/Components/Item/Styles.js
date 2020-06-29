import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 210px;
  height: 160px;
  border: 1px solid #CBCBCB;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;

  &:hover {
    border: 2px solid #393939;
  }
  `;
export const ImgContainer = styled.div`
pointer-events: none;
  width: 100%;
  height: 70%;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const Name = styled.p`
pointer-events: none;
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;