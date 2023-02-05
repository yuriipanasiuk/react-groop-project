import { StyledButton } from './Button.styled';

const Button = ({ type = 'button', children, color }) => {
  return (
    <StyledButton type={type} color={color}>
      {children}
    </StyledButton>
  );
};

export default Button;
