import Box from 'components/Box';
import Button from 'components/Button';

import {
  StyledLink,
  Layout,
  LogoIcon,
  Logo,
  Container,
  // Button,
} from './MyLibraryHeaderstyled';

const navItems = [
  { href: '/home', text: 'Home' },
  { href: '/library', text: 'my library' },
];

const Header = () => {
  // const [color, setColor] = useState();
  // const handleClick = () => {
  //   setColor('orange');
  // };

  return (
    <Layout>
      <Container>
        <Box as="nav">
          <Box display="flex" alignItems="center" mb={60}>
            <Logo to="/home">
              <LogoIcon size={20} />
              Filmoteka
            </Logo>

            <Box ml="auto">
              {navItems.map(({ href, text }) => (
                <StyledLink key={href} to={href}>
                  {text}
                </StyledLink>
              ))}
            </Box>
          </Box>
        </Box>

        <Box display="flex" justifyContent="center">
          <Button color="#ffffff">Watched</Button>
          <Button color="#ffffff">queue</Button>
        </Box>
      </Container>
    </Layout>
  );
};

export default Header;
