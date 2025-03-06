import styles from './index.module.css'
// import Dropdown from 'react-bootstrap/Dropdown';
// import { NavLink } from 'react-bootstrap';

export default function Index(){

    return(
        <>
            <div className={styles.topNavbar}>

                <nav className={styles.navbar}>
                    <ul>
                        <li className={styles.logo}>
                            <a href='#'>Learnzilla</a>
                        </li>
                        <li>
                            <a href='#'>Resources</a>
                        </li>
                        <li>
                            <a href='#'>Services</a>
                        </li>
                        <li className={styles.signIn}>
                            <a href='#'>Sign in</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}