import { Comments } from './CommentsInput.styled';

const CommentsInput = ({
  placeholder,
  // initialComments,
  value,
  onChange,
  className,
  style,
}) => {
  return (
    <>
      <Comments
        aria-label="empty textarea"
        placeholder={placeholder}
        className={className || ''}
        name="comments"
        // value={initialComments}
        value={value}
        onChange={onChange}
        style={style}
      />
    </>
  );
};

export default CommentsInput;
