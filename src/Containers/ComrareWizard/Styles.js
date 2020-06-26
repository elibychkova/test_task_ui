import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  padding: 0 15vh;
`;

export const Title = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;

  & h1 {
   
    font-weight: 700;
    font-size: 32px;
    line-height: 37px;
    color: #393939;
  }
`;

export const StepsSection = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-content: center;
`;

export const ActionSection = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-content: center;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: #878787;
    margin-top: 20px;
  }
`;
export const ActionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
`;
export const AdjustmentSection = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
`;

export const ModelsSection = styled.div`
  width: 100%;
  height: 70%;
`;

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
