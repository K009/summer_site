import NextLink from "next/link";
import { Button, Container, Box, Heading, Image, useColorModeValue, Link, SimpleGrid, List, ListItem, Icon } from '@chakra-ui/react';
import Layout from '../components/layouts/article'
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';
import ThemeToggleButton from '../components/theme-toggle-button';

// the hook
import { withTranslation } from 'react-i18next';

const Page = ({ t }) => {
    return (
        <Layout>
            <Container>
                <Box display={{ md: 'flex' }} mt={10}>
                    <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Dominik Chudy
                    </Heading>
                    <p>{t('Role')}</p>
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

                <ThemeToggleButton />

                <Section delay={ 0.1 }>
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

                <Section delay={ 0.2 }>
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
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="green">
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={ 0.3 }>
                    <Heading as="h3" variant="section-title">
                        I ♡
                    </Heading>
                    <Paragraph>Running, Music, Books, Design</Paragraph>
                </Section>

                <Section delay={ 0.3 }>
                    <Heading as="h3" variant="section-title">
                        On the web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/K009" target="_blank">
                                <Button 
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoGithub} />}
                                >@K009</Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://pl.linkedin.com/in/dominik-chudy" target="_blank">
                                <Button 
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoLinkedin} />}
                                >@Dominik_Chudy</Button>
                            </Link>
                        </ListItem>                        
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default withTranslation()(Page);