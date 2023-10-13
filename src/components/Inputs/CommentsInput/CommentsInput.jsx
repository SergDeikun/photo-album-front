import { Comments } from './CommentsInput.styled';

const CommentsInput = ({
  placeholder,
  value,
  onChange,
  onBlur,
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
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        style={style}
      />
    </>
  );
};

export default CommentsInput;
