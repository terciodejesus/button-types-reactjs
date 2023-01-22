import { CircleNotch, List } from 'phosphor-react'
import { ThemeProvider } from 'styled-components'
import {
  ButtonsContainer,
  Container,
  GlobalStyle,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <ButtonsContainer>
          <PrimaryButton>Default Primary</PrimaryButton>
          <PrimaryButton disabled>Disabled Primary</PrimaryButton>
          <PrimaryButton cursor="loading">
            <CircleNotch size={24} />
            Movable Primary
          </PrimaryButton>
          <PrimaryButton cursor="movable">
            <List size={24} />
            Movable Primary
          </PrimaryButton>
        </ButtonsContainer>
        <ButtonsContainer>
          <SecondaryButton>Default Secondary</SecondaryButton>
          <SecondaryButton disabled>Disabled Secondary</SecondaryButton>
          <SecondaryButton cursor="loading">
            <CircleNotch size={24} />
            Movable Primary
          </SecondaryButton>
          <SecondaryButton cursor="movable">
            <List size={24} />
            Movable Primary
          </SecondaryButton>
        </ButtonsContainer>
        <ButtonsContainer>
          <TertiaryButton>Default Primary</TertiaryButton>
          <TertiaryButton disabled>Disabled Primary</TertiaryButton>
          <TertiaryButton cursor="loading">
            <CircleNotch size={24} />
            Movable Primary
          </TertiaryButton>
          <TertiaryButton cursor="movable">
            <List size={24} />
            Movable Primary
          </TertiaryButton>
        </ButtonsContainer>
      </Container>

      <GlobalStyle />
    </ThemeProvider>
  )
}
