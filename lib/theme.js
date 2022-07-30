import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles =  {
    global: props => ({
        body: {
            //bg: mode('#f0e7db', '#202023')(props)
            bg: mode('#301A4B', '#261C15')(props)
            
        },
        p: {
            color: mode('#FFEAEC', '#F7F7F2')(props)
        },
        span: {
            color: mode('#FFEAEC', '#F7F7F2')(props)
        },
        div: {
            color: mode('#6DB1BF', '#E4E6C3')(props)
        },
        h5: {
            color: mode('#6DB1BF', '#E4E6C3')(props)
        },
        h3: {
            color: mode('#6DB1BF', '#E4E6C3')(props)
        },
        h2: {
            color: mode('#6DB1BF', '#E4E6C3')(props)
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
            },
            'role-title': {
                fontSize: 40,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#F39A9D', '#F05D23')(props),
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