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

export type InfrastructureResponse = InfrastructureItem[];
