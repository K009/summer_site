import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import thumbArkanoid from "../public/images/inkdrop_eyecatch.png"

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[ 1,1,2 ]} gap={6}>
                <Section>
                    <WorkGridItem
                        id="arkanoid"
                        title="Arkanoid"
                        thumbnail={thumbArkanoid}
                        >
                            Arcade, old-school 2D game.
                        </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        id="arkanoid"
                        title="Arkanoid"
                        thumbnail={thumbArkanoid}
                        >
                            Arcade, old-school 2D game.
                        </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        id="arkanoid"
                        title="Arkanoid"
                        thumbnail={thumbArkanoid}
                        >
                            Arcade, old-school 2D game.
                        </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works;