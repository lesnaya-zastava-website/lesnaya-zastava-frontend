interface AnnouncementPhoto {
  id: number;
  url: string;
  name: string;
  formats?: {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
  };
}

interface AnnouncementItem {
  id: number;
  title?: string;
  content?: string;
  photo: AnnouncementPhoto[];
}

export type AnnouncementResponse = AnnouncementItem[];
