import Navigation from '@component/Navigation/Navigation.tsx';
import { NavigationMenu } from '@component/Navigation/NavigationMenu.tsx';

import type { Menu } from '@type';

interface NavigationContainerProps {
  title: string;
  menus: readonly Menu[];
  tableHandler: (title: string) => void;
}

function NavigationContainer({ title, menus, tableHandler }: NavigationContainerProps) {
  return (
    <Navigation title={title}>
      <NavigationMenu menus={menus} onClick={tableHandler} />
    </Navigation>
  );
}

export default NavigationContainer;
