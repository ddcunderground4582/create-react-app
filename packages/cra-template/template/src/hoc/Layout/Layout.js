import React from 'react';
import styles from './Layout.module.css';
// import AppBar from '../../components/AppBar/AppBar';

const Layout = props => {
    return(
        <>
            {/* <AppBar /> */}
            <main className={styles.Content}>
                {props.children}
            </main>
        </>
    );
};

export default Layout;