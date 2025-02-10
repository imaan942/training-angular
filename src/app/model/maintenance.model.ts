export interface Maintenance {
    id: number;            // Represents the auto-incremented primary key
    truckId: number;       // Represents the ID of the truck (foreign key)
    serviceDate: Date;   // Represents the service date (use string to store date in ISO format)
    serviceType: string;   // Represents the type of service (varchar)
    details: string | null; // Represents additional details, which can be null
  }