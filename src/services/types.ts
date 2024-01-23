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
