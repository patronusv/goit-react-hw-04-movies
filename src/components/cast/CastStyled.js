import styled from 'styled-components';
const CastWrapper = styled.div`
  .castList {
    display: flex;
    flex-wrap: wrap;

    /* display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px; */
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
  }
  .castListItem {
    overflow: hidden;
    /* margin: 0 auto; */
    margin-right: 15px;
    margin-bottom: 15px;
    width: 220px;
    border: 1px solid lightgrey;
    border-radius: 10px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .castListImg {
    margin: 0 auto;
    height: 175px;
    width: 138px;
  }
  .castListTitle {
    text-align: center;
  }
  .castListText {
    text-align: center;
    color: grey;
  }
  .Button {
    display: inline;
    margin-bottom: 20px;
    padding: 8px 16px;
    border-radius: 2px;
    background-color: #3f51b5;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    /* display: inline-block; */
    color: #fff;
    border: 0;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 18px;
    line-height: 24px;
    font-style: normal;
    font-weight: 500;
    min-width: 60px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }

  .Button:hover,
  .Button:focus {
    background-color: #303f9f;
  }
`;
export default CastWrapper;
