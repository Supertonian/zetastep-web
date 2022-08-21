import styled from 'styled-components';

interface CardProps {
    title: string;
    description?: string;
}

export default function Card({ title, description }: CardProps) {
    return <Box>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Box>;
}


const Box = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid #cdcdcd;
    border-radius: 5px;
    margin-right: 10px;
`

const Title = styled.div`
    font-size: 16px;
    font-weight: bold;
`

const Description = styled.div`
    font-size: 12px;
`

Card.defaultProps = {
    description: "",
}