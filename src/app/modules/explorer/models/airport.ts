export enum AirportType {
  Heliport = 'heliport',
  SmallAirport = 'smallAirport',
  MediumAirport = 'mediumAirport',
  LargeAirport = 'largeAirport',
  SeaPlaneBase = 'seaplaneBase',
  BalloonPort = 'balloonport',
  Closed = 'closed',
}
export interface IAirport {
  id: number;
  name: string;
  type: AirportType;
  latitude: number;
  longitude: number;
  icao?: string;
  iata?: string;
  homeUrl?: string;
  wikiUrl?: string;
}
