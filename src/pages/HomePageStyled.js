import styled from 'styled-components';
const HomepageWrapper = styled.div`
  padding: 20px 0;
  .homepageGallery {
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
  }
  .homepageItem {
    overflow: hidden;
    margin: 0 auto;
    width: 220px;
    border: 1px solid lightgrey;
    border-radius: 10px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .homepageItem:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
  .homepageImg {
    margin: 0 auto;
    height: 330px;
    width: 220px;
  }
  .homepageLink {
    text-decoration: none;
    color: black;
    text-align: center;
  }
  .homepageText {
    text-align: center;
    color: grey;
  }
`;
export default HomepageWrapper;
