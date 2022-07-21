import { Container, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.800','whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I&apos;m a developer.
            </Box>
            
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Dominik Chudy
                </Heading>
                <p>Developer / Designer</p>
                </Box>
                <Box 
                    flexShrink={ 0 }
                    mt={{ base: 4, md:0 }}
                    ml={{ md:6 }}
                    align="center"
                >
                    <Image 
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        borderRadius="full"
                        maxWidth="100px"
                        display="inline-block "
                        src="/images/dominik.jpg"
                        alt="Profile image"
                    />
                </Box>
            </Box>
        </Container>
    )
}

export default Page