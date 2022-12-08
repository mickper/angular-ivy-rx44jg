import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotoComponent } from './toto/toto.component';
import { OtherDIService } from './other-di.service';

@NgModule({
  imports: [CommonModule],
  declarations: [TotoComponent],
  exports: [TotoComponent],
  providers: [OtherDIService],
})
export class OtherModule {}
