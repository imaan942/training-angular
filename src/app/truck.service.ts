import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

export interface Truck{
    id: number,
    model: string,
    status: string,
    details: string
}

export interface Maintenance {
  id: number;            // Represents the auto-incremented primary key
  truckId: number;       // Represents the ID of the truck (foreign key)
  serviceDate: Date;   // Represents the service date (use string to store date in ISO format)
  serviceType: string;   // Represents the type of service (varchar)
  details: string | null; // Represents additional details, which can be null
}

@Injectable({
    providedIn:'root'
    })

export class TruckService{
    private apiUrl = "http://localhost:8082/api/trucks";
    private apiUrl2 = "http://localhost:8082/api/maintenance";
    constructor(
        private http: HttpClient
    ){}
    getTrucks(): Observable<Truck[]>{
        return this.http.get<Truck[]>(this.apiUrl);}

    //get truck by id
    getTruckById(id: number):Observable<any>{
        return this.http.get<any>(`${this.apiUrl}/${id}`);
    }

    getTrucksWithOffset(start:number, limit:number):Observable<any>{
      return this.http.get<any>(`${this.apiUrl}?_start=${start}&_limit=${limit}`);
    }

    getTotalTrucks():Observable<number>{
      return this.http
      .get<Truck[]>(`${this.apiUrl}`)
      .pipe(
        map((trucks) => trucks.length
        )
      );
    }

    getTotalMaintenance():Observable<Maintenance[]>{
      return this.http.get<Maintenance[]>(`${this.apiUrl2}`)
    }

    // getTotalTrucks():Observable<number>{
    //   return this.http
    //   .get<any>(`${this.apiUrl}?_start=0&_limit=1`, {observe: 'response'})
    //   .pipe(
    //     map((response) => {
    //       const totalCount = Number(response.headers.get('x-total-count'));
    //       return totalCount;
    //     }
    //     )
    //   );
    // }

    
}
