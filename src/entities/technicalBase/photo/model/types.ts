export interface TechnicalBasePhoto {
  id: number;
  photo: Array<{
    id: number;
    url: string;
    name: string;
  }>;
}
