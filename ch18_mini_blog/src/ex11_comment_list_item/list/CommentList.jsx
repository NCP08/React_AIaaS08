import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

const CommentList = (props) => {
  const { comments } = props;

  return (
    <Wrapper>
      <ul>
        {comments.map((comment, index) => {
          return <CommentListItem key={comment.id} comment={comment} />;
        })}
      </ul>
    </Wrapper>
  );
};

export default CommentList;
