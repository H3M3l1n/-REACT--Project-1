import { Link, useMatch } from 'react-router-dom';

import './customlink.sass';

const CustomLink = ({ children, to, handler }) => {
    const match = useMatch({
        path: to,
        end: to.length === 1,
    });

    return (
        <Link to={to} className="nav-link" onClick={handler}>
            <span className={`customlink ${match ? 'customlink-active' : ''}`}>
                {children}
            </span>
        </Link>
    );
};

export default CustomLink;
