import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  width: 75px;
  padding: 16px;

  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;

  background-color: #fff;
  border-right: 1.5px solid #f1f2f6;

  overflow: hidden;

  img {
    width: 40px;
    height: 40px;
  }

  .menu-icons {
    display: flex;
    flex-direction: column;

    margin-top: 38px;

    img {
      width: 26px;
      height: 26px;
      opacity: 0.6;

      & + img {
        margin-top: 30px;
      }
    }
  }
`;
