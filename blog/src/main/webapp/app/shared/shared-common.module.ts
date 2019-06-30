import { NgModule } from '@angular/core';

import { BlogSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [BlogSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [BlogSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class BlogSharedCommonModule {}
