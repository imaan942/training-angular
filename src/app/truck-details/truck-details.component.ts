import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TruckService } from '../truck.service';

@Component({
  selector: 'app-truck-details',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './truck-details.component.html',
  styleUrl: './truck-details.component.css'
})

export class TruckDetailsComponent {
  truck:any;

  constructor(
    private route: ActivatedRoute,
    private truckService: TruckService
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if(id){
      this.truckService.getTruckById(+id).subscribe(
        (data) => {this.truck = data}
      );
    }

    throw new Error('Method not implemented.');
}
}

