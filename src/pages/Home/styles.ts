import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-left: 75px;
  margin-top: 70px;

  .left-side {
    margin: 25px;
  }
`;

export const GroupPlan = styled.div`
  display: flex;
  flex-direction: column;

  width: 275px;
  height: 215px;

  background: #fff;

  border: 1.5px solid #f1f2f6;
  border-radius: 8px;

  .header {
    display: flex;
    margin-top: 32px;
    justify-content: center;
    position: relative;

    img {
      width: 54px;
      height: 54px;

      border-radius: 50%;
      border: 2px solid #fff;

      -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
      -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);

      & + img {
        margin-left: -10px;
      }
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    h1 {
      font: 15px Roboto, sans-serif;
      font-weight: 400;
      color: #000;

      margin: 12px 0 0 0;
    }

    p {
      font: 14px Roboto, sans-serif;
      font-weight: 300;
      color: #788292;

      margin: 8px 0 0 0;
    }
  }

  .buttons {
    display: flex;
    justify-content: center;

    width: 100%;

    margin-top: 16px;

    button {
      display: flex;
      align-items: center;

      border: 0;
      border-radius: 6px;

      background: #f0f7ff;

      padding: 8px 12px;

      font: 14px Roboto, sans-serif;
      font-weight: 500;
      color: #1877f2;

      transition: background-color 0.2s;

      svg {
        margin-right: 5px;
      }

      & + button {
        margin-left: 10px;
      }

      &:hover {
        background: ${shade(0.2, '#f0f7ff')};
      }
    }
  }
`;

export const OnlineContacts = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 35px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      display: flex;
      align-items: center;

      font: 17px Roboto, sans-serif;
      font-weight: 500;
      color: #000;

      margin: 0;

      &::after {
        content: '';
        height: 5px;
        width: 5px;
        margin-left: 4px;

        border-radius: 50%;
        border: 3px solid #23be7e;
      }
    }

    svg {
      color: #c4c8d0;
      cursor: pointer;
    }
  }

  ul {
    list-style-type: none;

    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    margin-top: 15px;

    border: 1.5px solid #f1f2f6;
    border-bottom: 0;
    border-radius: 8px;

    background: #fff;

    li {
      display: flex;
      align-items: center;

      padding: 10px 23px;

      border-bottom: 1.5px solid #f1f2f6;

      cursor: pointer;

      transition: background-color 0.2s;

      img {
        width: 42px;
        height: 42px;

        border-radius: 50%;
        border: 2px solid #fff;

        -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
      }

      p {
        margin-left: 14px;

        font: 15px Roboto, sans-serif;
        font-weight: 400;
        color: #788292;
      }

      &:hover {
        background: ${shade(0.2, '#fff')};
      }
    }
  }
`;
