import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles =  {
    global: props => ({
        body: {
            //bg: mode('#f0e7db', '#202023')(props)
            bg: mode('#301A4B', '#202023')(props)
            
        },
        p: {
            color: mode('#FFEAEC', 'blue')(props)
        },
        span: {
            color: mode('#FFEAEC', 'blue')(props)
        },
        div: {
            color: mode('#6DB1BF', 'blue')(props)
        },
        h5: {
            color: mode('#6DB1BF', 'blue')(props)
        },
        h3: {
            color: mode('#6DB1BF', 'blue')(props)
        },
        h2: {
            color: mode('#6DB1BF', 'blue')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    heading: "'M PLUS Rounded 1c'"
}

const colors = {
    glassTeal: '#88ccca'
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({
    config,
    styles,
    components,
    colors,
    fonts
})

export default theme;