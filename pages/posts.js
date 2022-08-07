import { Container, Heading } from "@chakra-ui/layout";
import Layout from "../components/layouts/article";

const Link = () => (
    <Layout title="Posts">
        <Container mt={6}>
            <Heading as="h3" fontSize={20} mb={4}>
                Popular Posts
            </Heading>
            <Heading as="h3" fontSize={50} my={44}>
                work still in progress.
            </Heading>
            {/* <Section delay={0.1}>
                <SimpleGrid columns={[ 1,1,2 ]} gap={6}>
                    <GridItem 
                        title="My workflow"
                        thumbnail={thumbWorkflow}
                        href="/"
                    />
                    <GridItem 
                        title="My workflow"
                        thumbnail={thumbWorkflow}
                        href="/"
                    />
                    <GridItem 
                        title="My workflow"
                        thumbnail={thumbWorkflow}
                        href="/"
                    />                                        
                </SimpleGrid>
            </Section> */}
        </Container>
    </Layout>
)

export default Link;