import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

const MENUITEMS = [
  { state: 'button', type: 'link', name: 'Buttons', icon: 'crop_7_5'},
  { state: 'grid', type: 'link', name: 'Grid List', icon: 'view_comfy' },
  { state: 'lists', type: 'link', name: 'Lists', icon: 'view_list' },
  { state: 'menu', type: 'link', name: 'Menu', icon: 'view_headline' },
  { state: 'tabs', type: 'link', name: 'Tabs', icon: 'tab' },
  { state: 'stepper', type: 'link', name: 'Stepper', icon: 'web' },
  { state: 'expansion', type: 'link', name: 'Expansion Panel', icon: 'vertical_align_center'},
  { state: 'chips', type: 'link', name: 'Chips', icon: 'vignette' },
  { state: 'toolbar', type: 'link', name: 'Toolbar', icon: 'voicemail' },
  { state: 'progress-snipper', type: 'link', name: 'Progress snipper', icon: 'border_horizontal'},
  { state: 'progress', type: 'link', name: 'Progress Bar', icon: 'blur_circular'},
  { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant' },
  { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb' },
  { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode' },
  { state: 'slide-toggle', type: 'link', name: 'Slide Toggle', icon: 'all_inclusive'},
  { state: 'dashboard', name: 'Dashboard', type: 'sub', icon: 'av_timer', children: [
    {
        state: 'Menu1',                       // i.e dashboard1
        name: 'Menu1',      // i.e Dashboard 1
        type: 'link'
    },
    {
        state: 'Menu2',                       // i.e dashboard2
        name: 'Menu1',      // i.e Dashboard 2
        type: 'link'
    }]  
  }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
