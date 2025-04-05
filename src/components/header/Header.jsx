import { motion } from 'framer-motion';
import Navigation from '../navigation/Navigation';
import './header.sass';

const Header = () => {
    const isMoblieDevice = window.innerWidth <= 768;

    let logoVariants = {};
    if (!isMoblieDevice) {
        logoVariants = {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        };
    }

    return (
        <header id="header" className="header">
            <div className="header-wrapper">
                <div className="header-logo">
                    <a className="header-link" href="/">
                        <motion.img
                            variants={logoVariants}
                            initial={'hidden'}
                            animate={'visible'}
                            transition={{ delay: 1, duration: 2 }}
                            className="header-logo-image"
                            src="/img/logo.png"
                            alt="logo"
                        />
                    </a>
                </div>
                <div className="header-nav">
                    <Navigation />
                </div>
            </div>
        </header>
    );
};

export default Header;
