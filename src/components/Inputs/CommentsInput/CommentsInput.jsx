import { Comments } from './CommentsInput.styled';

const CommentsInput = ({
  placeholder,
  initialComments,
  onCommentsChange,
  className,
  style,
}) => {
  return (
    <>
      <Comments
        aria-label="empty textarea"
        placeholder={placeholder}
        className={className || ''}
        value={initialComments}
        onChange={onCommentsChange}
        style={style}
      />
    </>
  );
};

export default CommentsInput;
