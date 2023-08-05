import Section from 'components/Section';
import { Name, Text } from 'components/Section/Section.styled';

const Home = () => {
  return (
    <Section title="Welcome">
      <Name>to Phonebook Manager!</Name>
      <Text>We can help you to organize your contacts</Text>
    </Section>
  );
};

export default Home;
