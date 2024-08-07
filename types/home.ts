// home.ts
export interface Goal {
  id: number;
  time_to_display: string;
  player_sname: string;
}

export interface Team {
  name: string;
  url_name: string;
  id: string;
  red_cards: number;
  goals?: Goal[];
  country_id: string;
}

export interface GameStatus {
  enum: number;
  name: string;
  short_name: string;
  symbol_name: string;
}

export interface TVNetwork {
  id: string;
  name: string;
}

export interface OddsOption {
  name: string;
  value: number;
  trend: number;
}

export interface MainOdds {
  options: OddsOption[];
}

export interface Game {
  id: string;
  teams: [Team, Team];
  scores: [number, number];
  status: GameStatus;
  start_time: string;
  game_time: number;
  game_time_to_display: string;
  TVNetworks?: TVNetwork[];
  main_odds?: MainOdds;
  penalties?: [number, number];
  description?: string;
}

export interface League {
  games: Game[];
  name: string;
  id: string;
  url_name: string;
  country_id: string;
  is_international:boolean;
  show_country_flags:boolean;
}

export interface Club {
  name: string;
  text: string;
  id: string;
}

export interface Player {
  name: string;
  team: string;
  text: string;
}

export interface Calendar {
  title: string;
  clubs: Club[];
  players: Player[];
}

export interface LeaguesResponse {
  leagues: League[];
  calendar: Calendar;
}