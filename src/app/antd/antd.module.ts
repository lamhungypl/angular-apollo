import { NgModule } from '@angular/core';

import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
@NgModule({
  exports: [
    NzSpaceModule,
    NzGridModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
  ],
})
export class AntdModule {}
