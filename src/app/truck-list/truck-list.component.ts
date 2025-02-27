import { Component, OnInit } from '@angular/core';
import { TruckService , Truck} from '../truck.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-truck-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './truck-list.component.html',
  styleUrl: './truck-list.component.css'
})

export class TruckListComponent implements OnInit {

  trucks: Truck[] = [];
  start: number = 0;
  limit: number = 5; // items per page

  totalItmes: number = 0; // total items from api
  totalPages: number = 0; // Total pages
  currentPage: number = 1; //Current page

  pages: number[] = []; // Pages array for pagination

  constructor( private truckService: TruckService) {}

  // ngOnInit(): void {
  //   this.fetchTrucks(this.currentPage);
  // }

  // fetchTrucks(page: number): void {

  //   const start = (page - 1) * this.limit; //calculate offset

  //   this.truckService.getTrucksWithOffset(
  //     this.start, this.limit
  //   ).subscribe(

  //     (data) => {

  //       this.trucks = data

  //       //Fetch the total count from the servers response handlers
  //       this.truckService.getTotalTrucks().subscribe(
  //         (totalCount) => {
  //           this.totalItmes = totalCount;
  //           this.totalPages = Math.ceil( this.totalItmes / this.limit);

  //           this.pages = Array.from({ length: this.totalPages}, (_, i) => i + 1)
  //         }) 
  //     });

  //     this.currentPage = page; // Update the current page
  // }

  // goToPage(page: number):void {
  //   if(page === 0 || page <1 || page > this.totalPages){
  //     return;
  //   }
  //   this.fetchTrucks(page)
  // }

  /** fetching trucks by limit
   * ngOnInit(): void {
    this.fetchTrucks();
  }

  fetchTrucks(): void {
    this.truckService.getTrucksWithOffset(
      this.start, this.limit
    ).subscribe(
      (data) => {
        this.trucks = [...this.trucks, ...data ];
        this.start += this.limit// increment offset for next load
      }
    );
  }
  loadMore(): void {
    this.fetchTrucks();
  }
   */


    //get all trucks, default screen
  ngOnInit(): void {
    this.truckService.getTrucks().subscribe(
      (data) => (this.trucks = data)
    )
  }

  
}
