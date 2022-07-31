import { Container, List, ListItem, Badge, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="Arkanoid">
            <Container mt={6}>
                <Title>
                    Arkanoid <Badge>2022</Badge>
                </Title>
                <P>
                    Arcade, old-school 2D game. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://k009.github.io/arkanoid/">
                            https://k009.github.io/arkanoid/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Pure typescript</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Blogpost</Meta>
                        <Link href="/">
                            How I've Attracted The First 100 People To Pay For My Game <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>                                                            
                </List>

                <WorkImage src="/images/arkanoid2.png" alt="Arkanoid" />
                <WorkImage src="/images/arkanoid3.png" alt="Arkanoid" />
            </Container>
        </Layout>
    )
}

export default Work;