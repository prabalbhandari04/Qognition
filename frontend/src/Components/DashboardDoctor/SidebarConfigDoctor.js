import { Icon } from '@iconify/react';




// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashdoctor',
    icon: <Icon icon="mdi:view-dashboard" width="30" height="30" />
  },  
  {
    title: 'queries',
    path: '/dashdoctor/queries',
    icon: <Icon icon="mdi:frequently-asked-questions" width="31" height="31" />
  }, 
  {
    title: 'files',
    path: '/dashdoctor/filesdoctor',
    icon: <Icon icon="mdi:folder-multiple-outline" width="31" height="31"/>
  }, 
  
];

export default sidebarConfig;
