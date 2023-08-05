import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/operations';
import Section from 'components/Section';
import Button from 'components/Button';
import { Form, Input, Label } from 'components/ContactForm/ContactForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Section>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <Button text="Log In" />
      </Form>
    </Section>
  );
};

export default LoginForm;
