'use client'
import { CardContainer, Title, Content, Text } from './style'
import Image from 'next/image'
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
          <Image
            src="/icons/styled_components.svg"
            alt="svg"
            width="100"
            height="50"
          />
          <Text>{description}</Text>
        </Content>
      </div>
    </CardContainer>
  )
}

export default Card
