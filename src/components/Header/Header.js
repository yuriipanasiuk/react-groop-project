import Box from 'components/Box';
import SearchInput from '../SearchInput';

import { StyledLink, Layout, LogoIcon, Logo, Container } from './Header.styled';

const navItems = [
  { href: '/home', text: 'Home' },
  { href: '/library', text: 'my library' },
];

const Header = () => {
  const handleSubmit = data => {
    console.log(data);
  };

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
          <SearchInput onSubmit={handleSubmit} />
        </Box>
      </Container>
    </Layout>
  );
};

export default Header;
