'use client'
import styled from 'styled-components'

const Main = styled.main`
  display: flex;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default function Home() {
  return <Main></Main>
}
