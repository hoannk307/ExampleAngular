import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  Subtotal : number = 10;
  Tax : number = 10;
  Total : number = 10;

  @Input() count: 0;

  constructor() { }

  ngOnInit() {
  }

}
