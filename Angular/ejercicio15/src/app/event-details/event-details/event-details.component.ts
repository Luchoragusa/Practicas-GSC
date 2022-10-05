import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  constructor(private evento: EventsService, private route: ActivatedRoute, private router:Router ) { }

  event !: any;
  reviewed: boolean = false;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    console.log(id)
    this.event = this.evento.getOne(id)
  }

  returnToEvents() {
    this.router.navigate(['eventlist'])
  }

  reviewedEvent() {
    this.reviewed = !this.reviewed;
  }

}
