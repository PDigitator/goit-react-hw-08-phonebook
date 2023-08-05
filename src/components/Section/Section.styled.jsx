import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 20px 0;
`;

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 32px 16px;

  border: 1px solid #e5eaf1;
  border-radius: 8px;
  overflow: hidden;

  background-color: #f3f6f9;
  box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

const Title = styled.h1`
  margin-bottom: 20px;

  color: #112236;
  text-align: center;
  font-size: 28px;
  line-height: calc(36 / 32);
  letter-spacing: 0.02em;
`;

const Name = styled.h2`
  margin-bottom: 24px;

  color: #112236;
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  line-height: calc(28 / 24);
  letter-spacing: 0.02em;
`;

const Text = styled.p`
  color: #516174;
  text-align: center;
  font-size: 20px;
  line-height: calc(24 / 20);
  letter-spacing: 0.02em;
`;

export { SectionWrapper, Container, Title, Name, Text };
