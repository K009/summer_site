import { Container, Heading, SimpleGrid, Divider, useColorModeValue } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import { withTranslation } from 'react-i18next';

import thumbArkanoid from "../public/images/arkanoid2.png"
import thumbInvite from "../public/images/invite.png"

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
                        id={t('1stProjectId')}
                        title={t('1stProjectTitle')}
                        thumbnail={useColorModeValue(thumbInvite, thumbArkanoid)}
                        >
                            {t('1stProjectDescription')}
                        </WorkGridItem>
                </Section>
                <Section>
                <WorkGridItem
                        id={t('1stProjectId')}
                        title={t('1stProjectTitle')}
                        thumbnail={useColorModeValue(thumbInvite, thumbArkanoid)}
                        >
                            {t('1stProjectDescription')}
                        </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default withTranslation()(Works);