import {
  Component,
  InjectionToken,
  Injector,
  StaticProvider,
  VERSION,
} from '@angular/core';
import { TotoService } from './shared/services/toto.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(public totoService: TotoService) {}

  ngOnInit() {
    const inj = Injector.create({
      providers: [
        {
          provide: TotoService,
          useClass: TotoService,
        },
      ],
    });
    console.log(inj.get(TotoService) === inj.get(TotoService));
  }
}
