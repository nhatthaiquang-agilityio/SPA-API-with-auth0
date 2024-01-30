import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { Weather } from '../../models/weather'
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'timestamp',
    'summary',
    'temperatureC',
    'temperatureF'
  ];

  dataSource: MatTableDataSource<Weather>;
  loading: boolean;
  error?: boolean;
  weathersTotal?: number;
  noData: Weather[] = [<Weather>{}];
  window: number = 3;
  searchValue: string | null = "";
  isEdit = false;

  searchValueSubject = new Subject<Event>();
  windowSubject = new Subject<MatSelectChange>();


  constructor(private weatherService: WeatherService) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource<Weather>([]);
    this.loading = false;
  }

  ngOnInit(): void {
    this.loadWeathers();
  }

  sortData(sort: Sort) {
    const data = this.dataSource.data;
    if (!sort.active || sort.direction === '') {
      this.initializeData(data);
      return;
    }

    let sortedData = data.sort(dynamicSort(sort.active, sort.direction === 'asc'));
    this.initializeData(sortedData);
  }


  private loadWeathers() {
    // show loading
    this.loading = true;

    this.weatherService.getWeathers().subscribe(
      data => {
        console.log("data", data);
        this.onSuccessData(data);
      },

      error => {
        this.onErrorData();
      });
  }

  // Init and render data in table
  private initializeData(weathers: Weather[]): void {
    this.dataSource = new MatTableDataSource(weathers.length ? weathers : this.noData);
    this.dataSource.paginator = this.paginator;
  }

  private onSuccessData(weathers: Weather[]): void {
    // init data
    this.weathersTotal = weathers.length;
    this.initializeData(weathers);

    // hidden loading
    this.loading = false;
    this.error = false;
  }

  private onErrorData(): void {
    // hide loading
    this.loading = false;
    this.error = true;

    // init data
    this.weathersTotal = 0;
    this.initializeData([]);
  }
}

function dynamicSort(property: string, isAsc: boolean) {
  return function (a: any, b: any) {
    return (a[property] < b[property] ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
