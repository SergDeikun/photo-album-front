import {
  UploadBox,
  // ClearButton,
  Image,
  LabelUpload,
  Icon,
} from './FileInput.styled';

const FileInput = ({
  uploadFile,
  clearInput,
  src,
  alt,
  title,
  name,
  onChange,
  onClick,
}) => {
  return (
    <>
      <UploadBox>
        <LabelUpload onClick={onClick}>
          {!uploadFile && (
            <>
              <Icon /> {title}
            </>
          )}
          <input
            name={name}
            accept=".jpg, .jpeg, .png"
            onChange={onChange}
            type="file"
            hidden
          />
        </LabelUpload>
        {uploadFile && (
          <>
            {/* <ClearButton type="button" onClick={clearInput}>
              X
            </ClearButton> */}
            <Image src={src} alt={alt} />
          </>
        )}
      </UploadBox>
    </>
  );
};

export default FileInput;
