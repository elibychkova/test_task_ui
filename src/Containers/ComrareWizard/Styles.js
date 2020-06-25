import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 10vh 10vh;
`;

export const Title = styled.div`
  width: 100%;
  background: green;
  height: 10%;
`;

// export const Title = styled.div`
//   width: 100%;
//   background: green;
//   height: 10%;
// `;

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
  width: 231px;
  height: 199px;
  background: yellow;
  border: 1px solid #CBCBCB;Î
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