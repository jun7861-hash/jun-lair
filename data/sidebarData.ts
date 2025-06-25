import { basePath } from '@/next.config';

export const sidebarData = [
  {
    id: 1,
    icon: `${basePath}/img/svg/home-run.svg`,
    menuName: 'Lair',
    routePath: '/',
  },
  {
    id: 2,
    icon: `${basePath}/img/svg/avatar.svg`,
    menuName: 'About',
    routePath: '/about',
  },
  {
    id: 3,
    icon: `${basePath}/img/svg/briefcase.svg`,
    menuName: 'Gigs',
    routePath: '/gigs',
  },
  {
    id: 4,
    icon: `${basePath}/img/svg/setting.svg`,
    menuName: 'Quests',
    routePath: '/quests',
  },
  {
    id: 5,
    icon: `${basePath}/img/svg/paper.svg`,
    menuName: 'News',
    routePath: '/news',
  },
  {
    id: 6,
    icon: `${basePath}/img/svg/mail.svg`,
    menuName: 'Contact',
    routePath: '/contact',
  },
];
