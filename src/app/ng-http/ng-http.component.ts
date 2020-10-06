import { CountryService } from './../services/country.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-http',
  templateUrl: './ng-http.component.html',
  styleUrls: ['./ng-http.component.scss'],
})
export class NgHttpComponent implements OnInit {

  countries: any = [];
  constructor(private countryService: CountryService) { }

  ngOnInit() {
  }

  fetchData() {
    this.countryService.getCountry().subscribe(res => {
      this.countries = res;
    });
  }

}
