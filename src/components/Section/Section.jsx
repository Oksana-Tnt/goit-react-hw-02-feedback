import { Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Title>
      {title}
      {children}
    </Title>
  );
};
