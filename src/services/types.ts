export interface YearsMultipleWinRes {
  years: {
    year: number;
    winnerCount: number;
  }[];
}

export interface StudiosWinCountRes {
  studios: {
    name: string;
    winCount: number;
  }[];
}

export interface Interval {
  followingWin: number;
  interval: number;
  previousWin: number;
  producer: string;
}

export interface MaxMinWinIntervalRes {
  max: Interval[];
  min: Interval[];
}

export type WinByYearRes = {
  id: number;
  year: number;
  title: string;
  studios: string[];
  producers: string[];
  winner: boolean;
}[];

interface Sort {
  unsorted: boolean;
  sorted: boolean;
  empty: boolean;
}

export interface ListMoviesRes {
  content: {
    id: number;
    year: number;
    title: string;
    studios: string[];
    producers: string[];
    winner: boolean;
  }[];
  pageable: {
    sort: Sort;
    offset: number;
    pageSize: number;
    pageNumber: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}
