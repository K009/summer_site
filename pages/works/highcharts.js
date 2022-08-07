import { Container, List, ListItem, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="Highcharts">
            <Container mt={6}>
                <Title>
                    Highcharts
                </Title>
                <P>
                    The Highcharts library has been built on JavaScript and TypeScript, it works with any back-end database or server stack. This is the place where my professional career began. Worked on bugfixes, features and also created plenty of custom charts to the clients. 
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/highcharts">
                            https://github.com/highcharts <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Typescript</span>
                    </ListItem>                                                         
                </List>
                <Text mb={4}>Example chart:</Text>
                <WorkImage src="/images/highcharts2.png" alt="Highcharts" />
            </Container>
        </Layout>
    )
}

export default Work;