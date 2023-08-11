import Navigation from '@component/Navigation/Navigation.tsx';
import { NavigationMenu } from '@component/Navigation/NavigationMenu.tsx';

import type { Menu } from '@type';

interface NavigationContainerProps {
  title: string;
  menus: Menu[];
}

function NavigationContainer({ title, menus }: NavigationContainerProps) {
  return <Navigation title={title} children={<NavigationMenu menus={menus} />} />;
}

export default NavigationContainer;
