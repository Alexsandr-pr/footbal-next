// home.ts
export interface Goal {
  id: number;
  time_to_display: string;
  time?: number;
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
  tv_networks?: TVNetwork[];
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

/*******PROPS Match info********************** */


export interface EventTeamProps {
  isInternationl: boolean;
  status: {
      enum: number;
  };
  teams: Team[];
  scores: number[];
  penalties?: [number, number] | [];
  description?:string;
  show_country_flags?:boolean;
  soundLocal?:boolean;
}

export interface EventItemProps {
  country_id: string;
  name: string;
  game: Game;
  isInternationl: boolean;
  show_country_flags: boolean;
  soundLocal: boolean;
}


export interface MatchInfoProps {
  games: League;
}

export interface EventTimeProps {
  status: {
      enum: number;
      name: string;
  };
  startTime: string;
  gameTimeToDisplay: string;
  tv_networks?: TVNetwork[];
}

export interface EventResultProps {
  scores?: number[];
  status: {
      enum: number;
      name?: string;
  };
  redCards1: number;
  redCards2: number;
  penalties?: [number, number] | [];
  description?: string ;
  soundLocal?: boolean;
  type?: "gamecenter";
  startTime?: string;
  gameTime?: string;
}
export interface EventHeaderProps {
    cb: () => void;
    show: boolean;
    name: string;
    leagueId: string;
    toggleSoundLocal: () => void;
    soundLocal:boolean;
}
export interface FallbackImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface EventGolsProps {
  goalsTeam1?: Goal[];
  goalsTeam2?: Goal[];
}


export interface CommandProps {
  isInternationl?: boolean;
  team: Team;
  position?: "left" | "right";
  imagesStyles?: "command-home" | "commandGameCenter" | "commandGameCenterHeader";
  reverse?: boolean;
  show_country_flags?: boolean;
  classes?: string;
  distanseOffset?: string;
  textAlign?: "left" | "right" | "center" ;
}

