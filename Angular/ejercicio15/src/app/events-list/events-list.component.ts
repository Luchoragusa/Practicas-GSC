import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

 events !: any[];

  constructor(private service: EventsService) { }

  ngOnInit() {
    this.events = this.service.getEvents();
  }

}
