export type GalleryImage = {
  id: number;
  photos: Photo[];
};

export type Photo = {
  id: number;
  url: string;
  name:string;
};

export type InfrastructureItem = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  photos: Photo[];
};

export interface SafetyImage {
  id: number;
  photo: Array<{
    id: number;
    name: string;
    url: string;
  }>;
}


export type InfrastructureResponse = InfrastructureItem[];
