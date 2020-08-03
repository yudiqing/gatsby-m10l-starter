import styled from "styled-components"
import LocalizedLink from "../LocalizedLink"

export const Header = styled.header`
  padding: 1rem 0 3rem;
`

export const Title = styled(LocalizedLink)`
  color: #000000;
  font-size: 3rem;
  text-decoration: none;
`

export const NavList = styled.div`
  display: flex;
  list-style-type: none;
  margin: 0;
`

export const NavItem = styled(LocalizedLink)`
  color: #999999;
  font-size: 0.9rem;
  margin-right: 1.3rem;
  text-decoration: none;

  hover {
    color: #666666;
  }

  active {
    color: #333333;
  }
`
