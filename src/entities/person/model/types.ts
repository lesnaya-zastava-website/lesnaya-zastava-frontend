export type TeamMember = {
  id: number;
  fullName: string;
  job: string;
  photo: {
    url: string;
  };
};

export type Teacher = {
  id: number;
  fullName: string;
  qualification: string;
  specialization: string;
  photo: {
    url: string;
  };
};
