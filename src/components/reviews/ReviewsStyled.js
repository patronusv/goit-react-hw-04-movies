import styled from 'styled-components';
const ReviewsWrapper = styled.div`
  .reviewsListItem {
    overflow: hidden;
    padding: 20px;
    border: 1px solid lightgrey;
    border-radius: 10px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
  .reviewsListItem:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export default ReviewsWrapper;
