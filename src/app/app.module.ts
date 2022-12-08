import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TotoService } from './shared/services/toto.service';
import { OtherModule } from './other/other.module';
import { ChildComponent } from './child/child.component';

@NgModule({
  imports: [BrowserModule, FormsModule, OtherModule],
  declarations: [AppComponent, ChildComponent],
  bootstrap: [AppComponent],
  providers: [TotoService],
})
export class AppModule {}
