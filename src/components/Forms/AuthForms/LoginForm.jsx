import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useFormik } from 'formik';
import * as yup from 'yup';

import useLoginUser from 'react-query/useLoginUser';
import { notifySuccess, notifyError } from 'helpers/toastNotify';

import queryClient from '../../../react-query/queryClient';

import {
  Form,
  InputrWrapper,
  Input,
  SubmitBtn,
  ButtonForgot,
} from './AuthForm.styled';

const validationSchema = yup.object({
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

const LoginForm = () => {
  const navigate = useNavigate();
  const { mutateAsync: loginUser, isLoading } = useLoginUser();

  const formik = useFormik({
    initialValues: {
      email: 'qwerty@mail.com',
      password: 'qwerty123',
      // email: '',
      // password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      const { email, password } = values;

      try {
        await loginUser(
          { email, password },
          {
            onSuccess: response => {
              Cookies.set('token', response.token, {
                expires: 7,
                secure: true,
                sameSite: 'strict',
                // httpOnly: true,
              });
              notifySuccess('Successful login');
              navigate('/album-list');
              queryClient.invalidateQueries();

              return response;
            },
            onError: error => {
              notifyError(error.response.data.message);
            },
          }
        );
      } catch (error) {
        console.log(error);
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
        <SubmitBtn type="submit" title="Log In" disabled={isLoading} />

        {/* TODO кнопка чи посилання??? */}
        <ButtonForgot type="button">Forgot password?</ButtonForgot>
      </Form>
    </>
  );
};

export default LoginForm;
