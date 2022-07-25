import { Container, Heading, SimpleGrid } from "@chakra-ui/layout";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";

import thumbWorkflow from "../public/images/inkdrop_eyecatch.png"

const Link = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Popular Posts
            </Heading>
            <Section delay={0.1}>
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
            </Section>
        </Container>
    </Layout>
)

export default Link;