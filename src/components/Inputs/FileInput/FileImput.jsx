import { Box, Image, LabelUpload, Icon } from './FileInput.styled';

const FileInput = ({ uploadFile, src, alt, title, name, onChange }) => {
  return (
    <>
      <Box>
        {uploadFile ? (
          <Image src={src} alt={alt} />
        ) : (
          <LabelUpload>
            <Icon />
            {title}
            <input
              name={name}
              accept=".jpg, .jpeg, .png"
              onChange={onChange}
              type="file"
              hidden
            />
          </LabelUpload>
        )}
      </Box>
    </>
  );
};

export default FileInput;
