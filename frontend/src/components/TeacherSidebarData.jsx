import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const TeacherSidebarData = [
  {
    title: 'Home',
    path: '/teacherdashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Mark Attendance',
    path: '/markattendance',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Give Assignments',
    path: '/giveassignments',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Courses',
    path: '/managecourses',
    icon: <FaIcons.FaFirstOrderAlt />,
    cName: 'nav-text'
  },
  {
    title: 'View Class',
    path: '/viewclass',
    icon: <FaIcons.FaBullhorn />,
    cName: 'nav-text'
  },
];