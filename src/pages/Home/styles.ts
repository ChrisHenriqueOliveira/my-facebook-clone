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
    /* display: flex;

    width: 100%;
    max-width: 800px;

    margin: 25px auto; */

    margin: 25px;
    background-color: blue;
    flex-grow: 1;
    flex-shrink: 1;
    padding-right: 32px;
    padding-left: 32px;
    align-items: stretch;
    min-width: 0;
    display: flex;
    position: relative;
    flex-wrap: nowrap;
    flex-basis: 744px;
    box-sizing: border-box;
    justify-content: center;
    font-family: inherit;
  }

  .right-side {
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 365px;
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
      margin: 25px;
    }
  }
`;
