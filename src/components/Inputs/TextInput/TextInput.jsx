import { TxtField } from './TextInput.stled';

const TextInput = ({ required, label, name, value, onChange }) => {
  return (
    <>
      <TxtField
        required={required}
        label={label}
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        variant="standard"
      />
    </>
  );
};

export default TextInput;
