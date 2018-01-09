import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-force',
  templateUrl: './force.component.html',
  styleUrls: ['./force.component.css']
})
export class ForceComponent implements OnInit {
  @Input() force: number;
  @Output() forceStrengthClicked: EventEmitter<string> = new EventEmitter<string>();
  divWidth: number;

  constructor() { }

  ngOnInit() {
    this.divWidth = this.force * 28;
  }

  onForceClicked(){
    this.forceStrengthClicked.emit('This is a message that someone clicked this force component');
  }

}
