import { Container, Heading, SimpleGrid, Divider, useColorModeValue } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import { withTranslation } from 'react-i18next';

import thumbArkanoid from "../public/images/arkanoid2.png"
import thumbInvite from "../public/images/invite.png"
import thumbHighcharts from "../public/images/highcharts.png"
import thumbHarvard from "../public/images/harvard.png"
import thumbWitronix from "../public/images/witronix.png"

const Works = ({ t }) => {
    return (
        <Container mt={6}>
            <Heading as="h3" fontSize={20} my={14} css={{textAlign: 'center'}}>
                {t('workWork')}
            </Heading>

            <Divider my={10}/>

            <Heading as="h3" fontSize={20} my={14} css={{textAlign: 'center'}}>
                Professional projects
            </Heading>

            <SimpleGrid columns={useColorModeValue([ 1,1,1 ], [ 1,1,2 ])} gap={6}>
                <Section >
                    <WorkGridItem
                        id={t('1stProjectId')}
                        title={t('1stProjectTitle')}
                        thumbnail={useColorModeValue(thumbInvite, thumbHighcharts)}
                        >
                            {t('1stProjectDescription')}
                        </WorkGridItem>
                </Section>
                <Section display={useColorModeValue('none', 'block')}>
                    {/* display if there's a text from i18n */}
                <WorkGridItem
                        id={t('2ndProjectId')}
                        title={t('2ndProjectTitle')}
                        thumbnail={useColorModeValue(thumbInvite, thumbHarvard)}
                        >
                            {t('2ndProjectDescription')}
                        </WorkGridItem>
                </Section>
                <Section display={useColorModeValue('none', 'block')}>
                    <WorkGridItem
                        id={t('3rdProjectId')}
                        title={t('3rdProjectTitle')}
                        thumbnail={useColorModeValue(thumbInvite, thumbWitronix)}
                        >
                            {t('3rdProjectDescription')}
                        </WorkGridItem>
                </Section>
            </SimpleGrid>

            <Heading as="h3" fontSize={20} my={14} css={{textAlign: 'center'}} display={useColorModeValue('none', 'block')}>
                Personal projects
            </Heading>

            <SimpleGrid columns={[ 1,1,1 ]} gap={6} display={useColorModeValue('none', 'block')}>
                <Section>
                    <WorkGridItem
                        id={t('4thProjectId')}
                        title={t('4thProjectTitle')}
                        thumbnail={useColorModeValue(thumbInvite, thumbArkanoid)}
                        >
                            {t('4thProjectDescription')}
                        </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default withTranslation()(Works);