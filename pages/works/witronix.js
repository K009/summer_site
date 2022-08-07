import { Container, List, ListItem, Badge, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="Witronix">
            <Container mt={6}>
                <Title>
                    Wi-tronix charts
                </Title>
                <P>
                    Custom charts prepared for Wi-tronix, who is a huge provider of locomotive management solutions. Worked on synchronization of charts, adjusting their look and also plugging them into Angular.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Highcharts library, Angular, Javascript, HTML, CSS</span>
                    </ListItem>                                                         
                </List>
            </Container>
        </Layout>
    )
}

export default Work;