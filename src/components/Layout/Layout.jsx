import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { Container, Header, Nav, StyledLink } from './Layout.styled';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <StyledLink to="">Home</StyledLink>
          <StyledLink to="tweets">Tweets</StyledLink>
        </Nav>
      </Header>
      <main>
        <section>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </section>
      </main>
    </Container>
  );
};
