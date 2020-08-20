import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  position: relative;

  width: 100%;
  height: 100%;
  margin-left: 75px;
  margin-top: 70px;

  .left-side {
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 275px;
    margin: 25px 0 25px 25px;
  }

  .main {
    display: flex;

    width: 100%;
    max-width: 800px;

    margin: 25px auto;
    background-color: blue;
  }

  .right-side {
    display: flex;
    flex-direction: column;

    width: 90%;
    max-width: 275px;
    margin: 25px 25px 25px 0;
    margin-right: 100px;
  }

  @media only screen and (max-width: 1450px) {
    .left-side {
      display: none;
    }

    .main {
      max-width: 1000px;
      margin: 25px;
    }
  }

  @media only screen and (max-width: 1150px) {
    .right-side {
      display: none;
    }

    .main {
      max-width: 1000px;
      margin: 25px;
    }
  }
`;
