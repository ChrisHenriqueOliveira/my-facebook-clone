import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
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
