import { useDispatch } from 'react-redux';

import Section from 'components/Section';
import Button from 'components/Button';
import { register } from 'redux/auth/operations';
import { Form, Input, Label } from 'components/ContactForm/ContactForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
          Username
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            name="password"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{7,24}$"
            title="Password must contain lowercase and uppercase letters and digits and must have min 7 and max 24 symbols"
            required
          />
        </Label>
        {/* <button type="submit">Register</button> */}
        <Button text="Register" />
      </Form>
    </Section>
  );
};

export default RegisterForm;
