import { Component, OnInit } from '@angular/core';
import { TotoService } from '../shared/services/toto.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [TotoService],
})
export class ChildComponent implements OnInit {
  constructor(public totoService: TotoService) {}

  ngOnInit() {}
}
