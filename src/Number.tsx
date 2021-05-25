import React from 'react'
import styled from 'styled-components'

const Container = styled.span``

interface IProps {
    count: number
}

// 이해 안함 .. 다시 들엉 ^^ 
const Number: React.FunctionComponent<IProps> = ({count}) => <Container>{count}</Container>

export default Number