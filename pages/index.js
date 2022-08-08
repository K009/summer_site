import NextLink from "next/link";
import { Button, Container, Box, Heading, Image, useColorModeValue, Link, List, ListItem, Icon, Grid, GridItem } from '@chakra-ui/react';
import Layout from '../components/layouts/article'
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import Role from "../components/role";
import { BioSection, BioYear } from "../components/bio";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { IoLogoLinkedin, IoLogoGithub, IoBook, IoVideocamSharp, IoWalkSharp } from 'react-icons/io5';
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
                    <ThemeToggleButton />
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
                    <Grid
                        templateAreas={`"nav main"`}
                        gridTemplateRows={'50px 1fr 30px'}
                        gridTemplateColumns={'150px 1fr'}
                        h='350px'
                        gap='1'
                        color='blackAlpha.700'
                        fontWeight='bold'
                    >
                        <GridItem pl='2' bg={useColorModeValue('transparent', 'orange.300')} area={'nav'}>
                            <Section>
                                <Role flag={useColorModeValue('tester', 'developer')}>
                                    {t('Role')}
                                </Role>
                            </Section>
                        </GridItem>
                        <GridItem pl='2' area={'main'}>
                            <Section>
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
                                        2006
                                    </BioYear>
                                    Started my education.
                                </BioSection>
                                <BioSection>
                                    <BioYear>
                                        2015
                                    </BioYear>
                                    Became a lifeguard and began my first job.
                                </BioSection>                 
                                <BioSection>
                                    <BioYear>
                                        2018
                                    </BioYear>
                                    Started my IT studies at Jagiellonian University (Cracow).
                                </BioSection>                                          
                                <BioSection>
                                    <BioYear>
                                        2020
                                    </BioYear>
                                    Started working in Blacklabel as JS Developer. Ahoy pirates!
                                </BioSection>
                                <BioSection>
                                    <BioYear>
                                        2021
                                    </BioYear>
                                    Completed my bachelors degree in Computer Science at Jagiellonian University in Cracow.
                                </BioSection>
                            </Section>
                        </GridItem>
                    </Grid>
                </Section>

                <Section delay={ 0.2 }>
                    <Heading as="h3" variant="section-title" mt={{ base: '450px', sm: '60px', md:'0px', lg: '0px' }}> 
                        Work
                    </Heading>
                    <Paragraph>
                        {t('mainWork')}
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
                    <List>
                        <ListItem>
                            <Link href="https://en.wikipedia.org/wiki/Running" target="_blank">
                                <Button 
                                    variant="ghost"                     
                                    leftIcon={<Icon as={IoWalkSharp} />}
                                >
                                    Running (from 5k to mountain running)
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://en.wikipedia.org/wiki/Book" target="_blank">
                                <Button 
                                    variant="ghost"                     
                                    leftIcon={<Icon as={IoBook} />}
                                >
                                    Books (biographies, fantasy, sci-fi)
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://en.wikipedia.org/wiki/Film" target="_blank">
                                <Button 
                                    variant="ghost"                     
                                    leftIcon={<Icon as={IoVideocamSharp} />}
                                >
                                    Movies (of each species)
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>

                <Section delay={ 0.4 }>
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