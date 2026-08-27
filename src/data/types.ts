export type Film = {
  title: string;
  year: number;
  director: string;
  note: string;
};

export type Era = {
  slug: string;
  name: string;
  years: string;
  kicker: string;
  body: string;
  films: Film[];
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  dek: string;
  body: string[];
};

export type MovieList = {
  slug: string;
  title: string;
  dek: string;
  entries: Film[];
};
