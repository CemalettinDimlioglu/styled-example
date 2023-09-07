import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 700px) {
    flex-direction: column;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    text-align: center;
    color: blue;
    font-weight: bold;
  }
`;

export default Nav;
