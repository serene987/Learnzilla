import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/myhome',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Annoucements',
    path: '/annoucements',
    icon: <FaIcons.FaBullhorn />,
    cName: 'nav-text'
  },
  {
    title: 'Attendance',
    path: '/myattendance',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Assignments',
    path: '/assignments',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Grades',
    path: '/grades',
    icon: <FaIcons.FaFirstOrderAlt />,
    cName: 'nav-text'
  },
];