import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

import useRegisterUser from 'react-query/useRegisterUser';
import { notifySuccess, notifyError } from 'helpers/toastNotify';

import { Form, InputrWrapper, Input, SubmitBtn } from './AuthForm.styled';

const validationSchema = yup.object({
  name: yup.string().trim().required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .trim()
    .required('Password is required')
    .min(8, 'Password should be of minimum 8 characters length'),
});

const RegisterForm = () => {
  const navigate = useNavigate();
  const { mutateAsync: registerUser, isLoading } = useRegisterUser();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      const { name, email, password } = values;

      try {
        await registerUser(
          { name, email, password },
          {
            onSuccess: () => {
              notifySuccess('User register');
              navigate('/login');
            },
            onError: error => {
              notifyError(error.response.data.message);
            },
          }
        );
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <InputrWrapper>
          <Input
            variant="filled"
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </InputrWrapper>
        <InputrWrapper>
          <Input
            variant="filled"
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </InputrWrapper>
        <InputrWrapper>
          <Input
            variant="filled"
            fullWidth
            id="password"
            name="password"
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </InputrWrapper>

        <SubmitBtn type="submit" title="Register" disabled={isLoading} />
      </Form>
    </>
  );
};

export default RegisterForm;
