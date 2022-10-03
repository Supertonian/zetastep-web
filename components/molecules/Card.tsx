import styled from 'styled-components';

interface CardProps {
    title: string;
    description?: string;
    height?: number;
    marginRight?: number;
}

export default function Card({ title, description, height, marginRight }: CardProps) {
    return <Box style={{ height: `${height}px`, marginRight: `${marginRight}px` }}>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Box>;
}


const Box = styled.div`
    width: 100%;
    border: 1px solid #cdcdcd;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #efefef;
    }
`

const Title = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin-top: 8px;
    margin-left: 8px;
    margin-bottom: 4px;
`

const Description = styled.div`
    font-size: 12px;
    margin-left: 8px;
`

Card.defaultProps = {
    description: "",
    height: 60,
    marginRight: 0,
}