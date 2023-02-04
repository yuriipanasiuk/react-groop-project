import { Link } from 'react-router-dom';
import {
  Container,
  Layout,
  Text,
  CopyIcon,
  HeartIcon,
  StyledLink,
} from './Footer.styled';

const Footer = () => {
  return (
    <Layout>
      <Container>
        <CopyIcon />

        <Text>
          2023 <span>|</span> All Rights Reserved <span>|</span> Developed with
        </Text>

        <HeartIcon />
        <Text>by </Text>
        <StyledLink to={'https://github.com/yuriipanasiuk'} target="_blank">
          Yurii Panasiuk
        </StyledLink>
      </Container>
    </Layout>
  );
};

export default Footer;
