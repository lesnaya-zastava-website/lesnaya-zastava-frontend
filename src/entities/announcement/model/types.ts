interface AnnouncementItem {
  title: string;
  content: string;
  photo: {
    url: string;
  };
}

export type AnnouncementResponse = AnnouncementItem[];
