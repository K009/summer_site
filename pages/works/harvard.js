import { Container, List, ListItem, Badge, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="Harvard">
            <Container mt={6}>
                <Title>
                    Harvard charts
                </Title>
                <P>
                    Custom medical charts prepared for the client using some basic WEB technologies that are listed below. Worked on adjusting the charts look to the client's designs. 
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Highcharts library, HTML, CSS, Javascript</span>
                    </ListItem>                                                         
                </List>
            </Container>
        </Layout>
    )
}

export default Work;