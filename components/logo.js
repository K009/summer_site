import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

&:hover img {
    transform: rotate(20deg);

}
`
const Logo = () => {
    
    return (  
        <Link href="/" scroll={false}>
            <a>
                <LogoBox>
                    <Text 
                        color={useColorModeValue('whiteAlpha.900', '#FFEAEC')}
                        fontFamily='M PLUS Rounded 1c", sans-serif'
                        fontWeight="bold"
                        ml={3}>
                            Dominik Chudy
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo