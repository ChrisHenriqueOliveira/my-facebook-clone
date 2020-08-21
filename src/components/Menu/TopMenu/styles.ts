import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  height: 70px;
  width: 100%;

  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;

  background-color: #fff;
  border-bottom: 1.5px solid #f1f2f6;

  overflow: hidden;

  .menu-items {
    display: flex;
    align-items: center;

    height: 70px;
    width: 100%;
    max-width: 620px;

    /* margin-left: 75px; */

    ul {
      list-style-type: none;

      display: flex;
      justify-content: space-between;

      width: 100%;
      height: 100%;

      li {
        display: flex;
        align-items: center;
        height: 100%;

        font: 13px Roboto, sans-serif;
        font-weight: 400;
        color: #a1a8b3;
        border-top: 2px solid transparent;

        cursor: pointer;

        &:hover {
          color: #1877f2;
          border-color: #1877f2;
          font-weight: 500;
        }
      }
    }
  }

  .profile {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 11px;
    right: 17px;

    svg {
      color: #a1a8b3;
    }

    img {
      height: 48px;
      width: 48px;

      margin-left: 13px;

      border-radius: 50%;
      border: 2px solid #1877f2;
    }
  }
`;
