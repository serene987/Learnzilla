import styles from './index.module.css'
// import Dropdown from 'react-bootstrap/Dropdown';
// import { NavLink } from 'react-bootstrap';

// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
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
                    </ul>
                    <ul className={styles.signIn}>
                        {/* on click of sign in, card opens with student or teacher option */}
                        <li>
                            <AiIcons.AiOutlineUser/> <a href='#'>Sign in</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}