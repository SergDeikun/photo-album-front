import {
  UploadBox,
  Image,
  LabelUpload,
  IconWrapper,
  Icon,
} from './FileInput.styled';

const FileInput = ({
  uploadFile,
  src,
  alt,
  title,
  name,
  onChange,
  onClick,
  className,
  isVisible,
  isLoading,
}) => {
  return (
    <>
      <UploadBox className={className || ''}>
        <LabelUpload onClick={onClick}>
          <IconWrapper isVisible={isVisible}>
            <Icon /> {title}
          </IconWrapper>

          <input
            name={name}
            accept=".jpg, .jpeg, .png"
            onChange={onChange}
            type="file"
            hidden
            disabled={isLoading}
          />
        </LabelUpload>
        {uploadFile && (
          <>
            <Image src={uploadFile ? src : ''} alt={alt} />
          </>
        )}
      </UploadBox>
    </>
  );
};

export default FileInput;
