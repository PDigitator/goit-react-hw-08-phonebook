import styled from 'styled-components';
import { Report } from 'notiflix/build/notiflix-report-aio';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin: 0 auto;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 80%;

  font-size: 20px;

  color: #516174;
`;

const Input = styled.input`
  padding: 10px;

  border: 1px solid #e5eaf1;
  border-radius: 8px;

  font-size: 20px;
  color: #112236 !important;
`;

Report.init({
  backgroundColor: '#e5eaf1',
  titleFontSize: '24px',
  messageFontSize: '18px',
  info: {
    svgColor: '#112236',
    titleColor: '#112236',
    messageColor: '#112236',
    buttonBackground: '#516174',
    buttonColor: '#112236',
    backOverlayColor: 'rgb(118, 134, 150, 0.8)',
  },
});

export { Form, Label, Input };
