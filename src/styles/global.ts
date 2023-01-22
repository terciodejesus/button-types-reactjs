import styled, { createGlobalStyle } from 'styled-components'

import movableIcon from '../assets/movable-icon.svg'
import loadingIcon from '../assets/loading-icon.svg'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme['gray-700']};
    color: ${(props) => props.theme.white};
    -webkit-font-smoothing: antialiased;
  }

  body, button {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 1rem;
  }
`

const cursorPointers = {
  movable: movableIcon,
  loading: loadingIcon,
} as const

interface ButtonProps {
  disabled?: boolean
  cursor?: keyof typeof cursorPointers
  focused?: boolean
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: ${(props) => props.theme.white};

  font-size: 0.875rem;
  line-height: 24px;
  text-transform: uppercase;

  border: none;
  border-radius: 24px;
  border: 2px solid transparent;

  padding: 0.75rem 1.5rem;

  transition: all 0.1s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.56;
  }

  cursor: url(${(props) => (props.cursor ? cursorPointers[props.cursor] : '')}),
    auto;

  svg {
    -webkit-animation: ${(props) =>
      props.cursor === 'loading' ? 'loading 2s linear infinite' : 'unset'};
  }

  @keyframes loading {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`

export const PrimaryButton = styled(Button)`
  background: ${(props) => props.theme['purple-300']};

  &:hover {
    background: ${(props) => props.theme['purple-200']};
  }

  &:focus {
    border: 2px solid ${(props) => props.theme['purple-100']};
  }

  &:disabled {
    background: ${(props) => props.theme['purple-300']};
    opacity: 0.56;

    cursor: not-allowed;
  }
`

export const SecondaryButton = styled(Button)`
  background: ${(props) => props.theme['gray-300']};

  &:hover {
    background: ${(props) => props.theme['gray-200']};
  }

  &:focus {
    border: 2px solid ${(props) => props.theme['purple-100']};
  }

  &:disabled {
    background: ${(props) => props.theme['gray-300']};
  }
`

export const TertiaryButton = styled(Button)`
  background: ${(props) => props.theme['gray-700']};

  &:hover {
    background: ${(props) => props.theme['gray-700']};
  }

  &:focus {
    border: 2px solid ${(props) => props.theme['purple-100']};
  }

  &:disabled {
    background: ${(props) => props.theme['gray-700']};
  }
`

export const Container = styled.div`
  width: 50rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;

  display: flex;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 2rem;
`
