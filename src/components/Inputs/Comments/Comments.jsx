import { Textarea } from './Comments.styled';

const Comments = ({ value, onChange, className }) => {
  return (
    <>
      <Textarea
        aria-label="empty textarea"
        placeholder="Add comments"
        value={value}
        onChange={onChange}
        className={className || ''}
      />
    </>
  );
};

export default Comments;
