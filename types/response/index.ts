import { Game } from "../game-center";
import { Calendar, League } from "../home";

import { Category, MenuItem } from "../props/menu/menu";



export interface LeaguesResponse {
    leagues: League[];
    calendar: Calendar;
    ttl: number;
}


export interface GameCenterResponse {
    TTL: number;
    game: Game;
}


export interface MenuResponse {
    categories: Category[];
    general: MenuItem[]; 
}
