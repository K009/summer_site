import { AnimatePresence, motion } from "framer-motion";
import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import i18next from '../pages/i18n';

const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
                style={{ display: 'inline-block' }}
                key={useColorModeValue('light', 'dark')}
                initial={{ y:-20, opacity:0 }}
                animate={{ y:0, opacity: 1 }}
                exit={{ y:20, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <Button 
                    aria-label="Toggle theme"
                    colorScheme={useColorModeValue('purple', 'orange')}
                    onClick={() => {
                        setTimeout(function(){
                            const languages = ['developer', 'tester'];
                            let languageIndex;
    
                            if(i18next.language === 'tester'){
                                languageIndex = 0;
                            } else languageIndex = 1;
    
                            i18next
                                .changeLanguage(languages[languageIndex])
                                .then((t) => {
                                    t('key'); // -> same as i18next.t
                                });
    
                            toggleColorMode()
                        },500)
                    }}
                >Who am I?
                </Button>
            </motion.div>
        </AnimatePresence>
    )
}

export default ThemeToggleButton;