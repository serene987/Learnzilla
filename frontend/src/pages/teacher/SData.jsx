import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as PiIcons from "react-icons/pi";

export const SData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'My classes',
    path: '/myclasses',
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: 'Mark Attendance',
    path: '/attendance',
    icon: <FaIcons.FaEnvelopeOpenText />,

  },
  {
    title: 'My Students',
    path: '/mystudents',
    icon: <PiIcons.PiStudentBold/>,

  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,

  }
];