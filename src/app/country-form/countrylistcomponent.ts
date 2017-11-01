import { Component,OnInit } from '@angular/core';
import { DataService } from './dataservice';
import { Country } from './country';
import { State } from './state';

@Component({
  selector: 'my-country-list',
  moduleId: module.id,
  templateUrl: 'countrylistcomponent.html',
  styleUrls: ['./countrylistcomponent.css'],
  providers: [DataService]
})
export class CountryListComponent {
  selectedCountry:Country = new Country(0, 'India'); 
  countries: Country[];
  states: State[];

  constructor(private _dataService: DataService) {
    this.countries = this._dataService.getCountries();
  }
  
  onSelect(countryid) {
    this.states = this._dataService.getStates().filter((item)=> item.countryid == countryid);
  }
  // ngOnInit() {
  // }
}
