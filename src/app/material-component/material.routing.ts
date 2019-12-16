import { Routes } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { BadgeComponent } from './badge/badge.component';
import { CardsComponent } from './cards/cards.component';
import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import { RipplesComponent } from './ripples/ripples.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';

export const MaterialRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'button',
        component: ButtonsComponent,
		data: {
          title: 'Buttons',
        }
      },
      {
        path: 'badge',
        component: BadgeComponent,
		data: {
          title: 'Badge',
        }
      },
      {
        path: 'cards',
        component: CardsComponent,
		data: {
          title: 'Cards',
        }
      },
      {
        path: 'grid',
        component: GridComponent,
		data: {
          title: 'Grids',
        }
      },
      {
        path: 'lists',
        component: ListsComponent,
		data: {
          title: 'Lists',
        }
      },
      {
        path: 'menu',
        component: MenuComponent,
		data: {
          title: 'Menu',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Menu' }
          ]
        }
      },
      {
        path: 'tabs',
        component: TabsComponent,
		data: {
          title: 'Tabs',
        }
      },
      {
        path: 'ripples',
        component: RipplesComponent,
		data: {
          title: 'Ripples',
        }
      },
      {
        path: 'stepper',
        component: StepperComponent,
		data: {
          title: 'Stepper',
        }
      },
      {
        path: 'expansion',
        component: ExpansionComponent,
		data: {
          title: 'Expansion',
        }
      },
      {
        path: 'chips',
        component: ChipsComponent,
		data: {
          title: 'Chips',
        }
      },
      {
        path: 'toolbar',
        component: ToolbarComponent,
		data: {
          title: 'Toolbar',
        }
      },
      {
        path: 'progress-snipper',
        component: ProgressSnipperComponent,
		data: {
          title: 'Progress Snipper',
        }
      },
      {
        path: 'progress',
        component: ProgressComponent,
		data: {
          title: 'Progress',
        }
      },
      {
        path: 'tooltip',
        component: TooltipComponent,
		data: {
          title: 'Tooltip',
        }
      },
      {
        path: 'snackbar',
        component: SnackbarComponent,
		data: {
          title: 'Snackbar',
        }
      },
      {
        path: 'slider',
        component: SliderComponent,
		data: {
          title: 'Slider',
        }
      },
      {
        path: 'slide-toggle',
        component: SlideToggleComponent,
		data: {
          title: 'Slide Toggle',
        }
      }
    ]
  }
];
