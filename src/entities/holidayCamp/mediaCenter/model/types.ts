export interface MediaCenterImage {
  id: number;
  photo: Array<{
    id: number;
    name: string;
    url: string;
  }>;
}
