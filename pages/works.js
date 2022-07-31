import { Container, Heading, SimpleGrid, Divider, useColorModeValue } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import { withTranslation } from 'react-i18next';

import thumbArkanoid from "../public/images/inkdrop_eyecatch.png"
import thumbRecipes from "../public/images/dominik.jpg"

const Works = ({ t }) => {
    return (
        <Container mt={6}>
            <Heading as="h3" fontSize={20} my={14} css={{textAlign: 'center'}}>
                {t('workWork')}
            </Heading>

            <Divider my={10}/>

            <SimpleGrid columns={[ 1,1,2 ]} gap={6}>
                <Section>
                    <WorkGridItem
                        id="arkanoid"
                        title={t('Role')}
                        thumbnail={useColorModeValue(thumbArkanoid, thumbRecipes)}
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

export default withTranslation()(Works);