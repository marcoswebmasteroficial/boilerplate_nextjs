'use client'
import { CardContainer, Title, Content, Text } from './style'
import svgIcon from './styled_components.svg'
import ClockIcon from './styled_components.svg'
interface CardProps {
  title: string
  description: string
  icon: string
}

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <CardContainer>
      <div>
        <Title>{title}</Title>
        <Content>
          <ClockIcon />
          <Text>{description}</Text>
        </Content>
      </div>
    </CardContainer>
  )
}

export default Card
