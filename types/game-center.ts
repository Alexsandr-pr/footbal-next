import { OddsOption } from "./home";

export interface GameInfo {
    name: string;
    value:string;
}


interface Status {
    enum: number;
    name: string;
    short_name: string;
    symbol_name:string;
}
interface Players {

}

interface Option {
    name: string;
    votes: number;
    percentage: number;
    vote_url: string;
}
interface Options {
    options: Option[];
}

interface Prediction {
    bookie_id: string,
    cta_link: string,
    options: Options,
    total_votes: number,
    odds: OddsOption[];
}

interface PlayerEvent {
    type: number;
    time: string;
    team: number;
    texts: string[];
    player_jersey_num: number;
}

interface Player {
    jersey_num: number;
    name: string;
    player_short_name: string;
    position: string;
    formation_position: string;
    pitch_location: {
        x: number;
        y: number;
    };
    substitution?: {
        time: number;
        player: number;
        type: number;
    };
    events?: {
        goals?: {
            goals: number;
            own_goals: number;
        };
        cards?: {
            yellow: boolean;
            red: boolean;
            red_type: number;
        };
        substitution?: {
            has_substitution: boolean;
            time: number;
        };
    };
}

export interface Team {
    name: string;
    url_name: string;
    id: string;
    country_id: string;
    red_cards: number;
    goals: {
        player_name: string;
        player_sname: string;
        time?: number;
        time_to_display: string;
        id: number;
    }[];
    status: {
        enum: number;
        name: string;
        short_name: string;
        symbol_name: string;
    };
}

interface Lineup {
    status: string;
    formation: string;
    team_num: number;
    starting: Player[];
    bench: Player[];
}

interface Players {
    lineups: {
        teams: Lineup[];
    };
}

interface Game {
    id: string;
    winner: number;
    teams: Team[];
    scores: [number, number];
    agg_scores: [number, number];
    description: string;
    status: Status;
    start_time: string;
    game_time?: number;
    game_time_to_display: string;
    players: Players;
    prediction?: Prediction;
    game_info: GameInfo[];
    penalties?: [number, number];
    events: {
        name: string;
        show_stage_title: boolean;
        is_penalties_stage: boolean;
        scores: [number, number];
        rows: {
            time: string;
            events: PlayerEvent[];
        }[];
    }[];
    statistics: {
        name: string;
        values: [string, string];
        percentages: [number, number];
    }[];
    head_to_head: {
        home_wins: number;
        away_wins: number;
        draws: number;
        games: {
            id: string;
            winner: number;
            teams: Team[];
            scores: [number, number];
            agg_scores?: [number, number];
            description: string;
            status: Status;
            start_time: string;
            main_odds: {
                options: {
                    name: string;
                    value: number;
                    trend: number;
                }[];
            };
        }[];
    };
    recent_form: {
        home: number[];
        away: number[];
    };
    standings: {
        columns: {
            key: string;
            display_name: string;
            is_bold: boolean;
        }[];
        rows: {
            num: number;
            entity: {
                type: number;
                object: {
                    name: string;
                    url_name: string;
                    id: string;
                    country_id: string;
                };
            };
            values: {
                key: string;
                value: string;
            }[];
        }[];
    };
}

export interface GameCenterResponse {
    TTL: number;
    game: Game;
}


