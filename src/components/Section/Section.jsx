import { Title } from "./Section.styled";

export const Section = ({ title, children }) => {
    return (
        <Title>
            {title && <h1>{title}</h1>}
            {children}
        </Title>
    );
}