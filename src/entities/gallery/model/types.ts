export type GalleryImage = {
  id: number;
  photo: Photo[];
};

export type Photo = {
  id: number;
  url: string;
  name:string;
};

type InfrastructureItem = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  photo: Photo[];
};

export type InfrastructureResponse = InfrastructureItem[];
