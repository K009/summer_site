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
                    Arcade, old-school 2D game. One of the several ones like Breakout, Space Invaders or Brickout. For now there&apos;s a possibility to play 5 levels with the boss on the final one. During working on this project I had a lot fun of working on the game physics or creating some &apos;special bricks&apos; that drop a superpower after destroying them.
                    Also got more familiar with typescript and developed a strategic way of thinking about the code architecture.
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
                </List>

                <WorkImage src="/images/arkanoid2.png" alt="Arkanoid" />
                <WorkImage src="/images/arkanoid3.png" alt="Arkanoid" />
            </Container>
        </Layout>
    )
}

export default Work;