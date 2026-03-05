import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.header`
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const StyledLink = styled(Link)`
  font-size: var(--font-sm);
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledLink to="/">{siteTitle}</StyledLink>
  </StyledHeader>
)

export default Header
