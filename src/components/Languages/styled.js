import styled from "styled-components"

export const LanguageButton = styled.button`
  border: none;
  background-color: #ffffff;
  color: #666666;
  text-align: center;
  font-size: 0.8rem;
  float: right;
  outline: none;

  :hover {
    color: #333333;
    cursor: pointer;
  }

  :active {
    box-shadow: 0 2px #666666;
    transform: translateY(4px);
    outline: none;
  }

  span.is-active {
    font-weight: bold;
  }
`
