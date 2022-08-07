import { AnimatePresence, motion } from "framer-motion";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import i18next from '../i18n/i18n';

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
                <IconButton 
                    aria-label="Toggle theme"
                    colorScheme={useColorModeValue('purple', 'orange')}
                    icon={<RepeatIcon />}
                    onClick={() => {
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
                    }}
                />
            </motion.div>
        </AnimatePresence>
    )
}

export default ThemeToggleButton;