import styled from 'styled-components';
const MovieGalleryWrapper = styled.div`
  .movieGallery {
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
  .movieGalleryItem {
    overflow: hidden;
    margin: 0 auto;
    width: 220px;
    border: 1px solid lightgrey;
    border-radius: 10px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .movieGalleryItem:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
  .movieGalleryImg {
    margin: 0 auto;
    height: 330px;
    width: 220px;
  }
  .movieGalleryLink {
    text-decoration: none;
    color: black;
    text-align: center;
  }
  .movieGalleryText {
    text-align: center;
    color: grey;
  }
`;
export default MovieGalleryWrapper;
