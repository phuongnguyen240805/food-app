import PropTypes from 'prop-types';

import Navbar from "~/components/Navbar";

function DefaultLayout({ children }) {
    return (
        <>
            <Navbar />
            <div>{children}</div>
        </>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default DefaultLayout;