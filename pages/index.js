import NextLink from "next/link";
import { Button, Container, Box, Heading, Image, useColorModeValue, Link } from '@chakra-ui/react';
import Layout from '../components/layouts/article'
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Page = () => {
    return (
        <Layout>
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

                <Section delay={ 0.1 }>
                    <Heading as="h3" variant="section-title"> 
                        Work
                    </Heading>
                    <Paragraph>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of {' '}
                        <NextLink href="/works/arkanoid">
                            <Link>
                                Arkanoid
                            </Link>
                        </NextLink>
                        .
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={ 0.2 }>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>
                            1999
                        </BioYear>
                        Born in Poland.
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2020
                        </BioYear>
                        Started working in Blacklabel. Ahoy pirates! ♡ 
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2021
                        </BioYear>
                        Completed the bachelors degree in Computer Science at Jagiellonian University in Cracow.
                    </BioSection>
                </Section>

                <Section delay={ 0.3 }>
                    <Heading as="h3" variant="section-title">
                        I ♡
                    </Heading>
                    <Paragraph>Running, Music, Books, Design</Paragraph>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page