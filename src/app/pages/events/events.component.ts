import { Component, OnInit } from '@angular/core';
import { EventsInterfaces } from 'src/app/core/interfaces/events.interfaces';
import { EventsService } from 'src/app/core/services/events.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {


  EventsList: Array<EventsInterfaces>;
  EventsData: EventsInterfaces;

  public search: string;

  constructor(
    private EventsService: EventsService,
  ) { }

  ngOnInit(): void {
    this.getEvents()
  }

  getEvents(): void {
    this.EventsService.getEvents()
      .subscribe(data => {
        this.EventsList = data;
      },
        error => {
          console.error(error);
        }
      );
  }

}
