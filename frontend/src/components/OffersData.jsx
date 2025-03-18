import { FaChalkboardTeacher, FaUserGraduate, FaUniversity } from 'react-icons/fa';

export const OffersData = [
    {
        id: 1,
        title: 'Teacher Management',
        description: 'Teachers can upload lessons, assignments, and track attendance.',
        icon: <FaChalkboardTeacher size={32} />,
      },
      {
        id: 2,
        title: 'Student Dashboard',
        description: 'Students can track attendance, view assignments, and monitor progress.',
        icon: <FaUserGraduate size={32} />,
      },
      {
        id: 3,
        title: 'HoD Oversight',
        description: 'HoDs can assign teachers to subjects and track performance.',
        icon: <FaUniversity size={32} />,
      },
];