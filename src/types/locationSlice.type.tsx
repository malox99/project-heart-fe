import { LatLngExpression } from "leaflet";

export type TCategory = 'BAR' | 'RISTORANTE'

export interface ILocation {
  id: string;
  name: string;
  position: LatLngExpression;
  category: TCategory[];
  tags: string[];
}

export interface ILocationsInitial {
  startPosition?: LatLngExpression;
  locations: ILocation[];
}
