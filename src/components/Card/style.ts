import styled from 'styled-components'

const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  max-width: 400px;
  margin: 16px;
`

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 12px;
`

const Content = styled.div`
  display: flex;
  align-items: center;
`

const Text = styled.p`
  margin-left: 16px;
  font-size: 1rem;
  color: #333;
`

export { CardContainer, Title, Content, Text }
