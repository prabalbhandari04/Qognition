import { Icon } from '@iconify/react';




// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: <Icon icon="mdi:view-dashboard" width="30" height="30" />
  },
  {
    title: 'medication',
    path: '/dashboard/medication',
    icon: <Icon icon="healthicons:medicines" width="31" height="31"/>
  },
  {
    title: 'allergies',
    path: '/dashboard/allergies',
    icon: <Icon icon="mdi:flower-pollen-outline" width="31" height="31"/>
  },
  {
    title: 'immunization',
    path: '/dashboard/immunization',
    icon: <Icon icon="mdi:needle" width="31" height="31"/>
  },
  {
    title: 'doctors',
    path: '/dashboard/doctors',
    icon: <Icon icon="healthicons:doctor-male"  width="31" height="31"/>
  },
  {
    title: 'queries',
    path: '/dashboard/queries',
    icon: <Icon icon="mdi:frequently-asked-questions" width="31" height="31" />
  },
  {
    title: 'files',
    path: '/dashboard/files',
    icon: <Icon icon="mdi:folder-multiple-outline" width="31" height="31"/>
  },
  
  
  
];

export default sidebarConfig;
