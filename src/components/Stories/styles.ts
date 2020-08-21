import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

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
    }

    svg {
      color: #c4c8d0;
      cursor: pointer;
    }
  }

  .stories {
    display: flex;
    justify-content: space-between;

    width: 100%;
    margin-top: 15px;
  }

  .events {
    display: flex;
    justify-content: space-between;

    width: 100%;
    margin-top: 40px;
  }
`;

export const Story = styled.div`
  display: flex;
  position: relative;

  height: 210px;
  width: 115px;

  border-radius: 8px;
  border: 2px solid #f1f2f6;

  .background-filter {
    position: absolute;

    height: 206px;
    width: 115px;

    border-radius: 8px;

    background-image: linear-gradient(
      rgba(120, 130, 146, 0),
      rgba(0, 0, 0, 0.5)
    );
  }

  .body {
    display: flex;
    flex-direction: column;

    position: absolute;
    bottom: 20px;

    align-items: center;

    width: 100%;

    img {
      width: 42px;
      height: 42px;

      border-radius: 50%;
      border: 2px solid #1877f2;
    }

    h1 {
      margin-top: 8px;

      font-size: 13px;
      font-weight: 700;
    }
  }
`;

export const Event = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  height: 232px;
  width: 175px;

  border-radius: 8px;
  border: 2px solid #f1f2f6;

  .background-filter {
    position: absolute;

    height: 176px;
    width: 170px;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    background-image: linear-gradient(
      rgba(120, 130, 146, 0),
      rgba(0, 0, 0, 0.5)
    );
  }

  .event-information {
    display: flex;
    flex-direction: column;

    position: absolute;
    max-width: 150px;

    top: 32px;
    left: 20px;

    .event-header {
      display: flex;

      align-items: center;

      img {
        width: 15px;
        height: 15px;
      }

      h1 {
        margin: 0 0 0 8px;

        font-size: 17px;
        font-weight: 700;
      }
    }

    .event-body {
      margin-top: 8px;

      p {
        margin: 0;

        font-size: 13px;
        font-weight: 500;

        line-height: 24px;
      }

      transition: background-color 0.2s;

      button {
        margin-top: 14px;

        width: 90px;
        height: 31px;

        border: 0;
        border-radius: 8px;

        font-size: 13px;
        font-weight: 700;
        color: #203758;

        &:hover {
          background: ${shade(0.2, '#f0f7ff')};
        }
      }
    }
  }

  .event-footer {
    display: flex;
    background-color: white;

    align-items: center;
    justify-content: center;

    height: 70px;
    padding-left: 20px;
    padding-right: 20px;

    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    p {
      margin-left: 10px;

      font-size: 10px;
      font-weight: 300;

      color: #000;
    }

    .event-people {
      display: flex;

      img {
        width: 22px;
        height: 22px;

        border-radius: 50%;

        & + img {
          margin-left: -8px;
        }
      }
    }
  }
`;
