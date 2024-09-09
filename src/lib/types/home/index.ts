import { Game, Player } from "@/lib/types/game-center";


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

export interface Calendar {
	title: string;
	clubs: Club[];
	players: Player[];
}