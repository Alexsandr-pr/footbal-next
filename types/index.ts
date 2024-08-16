


export interface Status {
    enum: number;
    name: string;
    short_name: string;
    symbol_name:string;
}

export interface Goal {
	player_name: string;
	id: number;
	time_to_display: string;
	time?: number;
	player_sname: string;
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