import { LatLngExpression } from "leaflet";

export type TCategory = "BAR" | "RISTORANTE" | "USER";

export interface ILocation {
  id: string;
  name: string;
  position: LatLngExpression;
  category: TCategory[];
  tags: string[];
}

export interface IAddress {
  streetNumber: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  postalCode: string;
  primaryAddress: "Y" | "N";
  region: {
    id: number;
    region_name: string;
  };
  regionId: number;
  country: {
    id: number;
    country_name: string;
  };
  countryId: number;
  userId: null;
  id: number;
  locationId: string;
}

export interface ILocationAddress {
  location: ILocation;
  address: IAddress;
}

export interface ILocationDetail {
  id: string;
  name: string;
  position: LatLngExpression;
  category: TCategory[];
  tags: string[];
  photos: string[];
}

export interface ILocationsInitial {
  locations: ILocationAddress[];
  locationDetail: ILocationDetail | null;
  selectedLocation: ILocation | null;
  maxDistance: number;
}
