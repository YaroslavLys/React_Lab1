import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 18px;
  border-radius: 30px 30px 200px 200px;
  background-color: beige;
`

export const LogoText = styled.a`
  color: black;
  text-decoration: none;
  font-size: 28px;
  
`

export const LogoImage = styled.img`
  width: 150px;
  height: 80px;
  border-radius: 2px;
`

export const Nav = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`
export const NavItem = styled.li`
  margin: 10px 30px;  
`
export const Links = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`