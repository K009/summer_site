import { Container, List, ListItem, Badge, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="Invite">
            <Container mt={6}>
                <Title>
                    Invite
                </Title>
                <P>
                    Invite is an Iot project regarding rental business. Hotel management system, integrated with booking providers and many IoT devices. I've been working on keeping high quality of the product by writing dozens of automated tests and also keeping an eye on the whole test architecture.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.visitinvite.com/en/intin-with-new-partner/">
                            https://www.visitinvite.com/en/intin-with-new-partner/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux/iOS/Android</span>
                    </ListItem>                                           
                </List>

                <WorkImage src="/images/invite.png" alt="Invite" />
            </Container>
        </Layout>
    )
}

export default Work;