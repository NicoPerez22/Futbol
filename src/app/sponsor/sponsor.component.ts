import { Component, OnInit } from '@angular/core';
import { SponsorService } from './sponsor.service';
import { Sponsor } from './sponsorObj';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit {

  sponsors: Sponsor[];
  sponsor: Sponsor;
  
  constructor(private sponsorsService: SponsorService) { }

  ngOnInit() { 
    this.sponsorsService.getJugador()
    .subscribe(res => {
      this.sponsors = res;
    });
  }
}
