import { Component } from '@angular/core';
import { TruckService, Maintenance } from '../truck.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maintenance-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './maintenance-list.component.html',
  styleUrl: './maintenance-list.component.css'
})
export class MaintenanceListComponent {

  maintenances: Maintenance[] = [];
  constructor( private truckService: TruckService) {}

  ngOnInit(): void {
    this.truckService.getTotalMaintenance().subscribe(
      (data) => (this.maintenances = data)
    )
  }
}
