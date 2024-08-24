import { Goal, MainOdds, OddsOption, Status, TVNetwork } from "..";


export type GameInfo = {
    name: string;
    value:string;
}

type Option = {
    name: string;
    votes: number;
    percentage: number;
    vote_url: string;
}

export type Prediction = {
    bookie_id: string,
    cta_link: string,
    options: Option[],
    total_votes: number,
    odds: OddsOption[];
}

export type PlayerEvent = {
    type: number;
    time: string;
    team: number;
    texts: string[];
    player_jersey_num: number;
}

export type Events = {
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
}

export type Subctitution = {
    time: number;
    player: number;
    type: number;
}


export type Player = {
    jersey_num: number;
    name: string;
    team: string;
    text: string;
    player_short_name: string;
    position: string;
    formation_position: string;
    pitch_location: {
        x: number;
        y: number;
    };
    substitution?: Subctitution;
    events?: Events;
}

export type Team = {
    name: string;
    url_name: string;
    id: string;
    country_id: string;
    red_cards: number;
    goals: Goal[];
    status: Status;
}

export type Lineup = {
    status: string;
    formation: string;
    team_num: number;
    starting: Player[];
    bench: Player[];
}

export type Bench = {
    bench: Player[];
}

export type Players = {
    lineups: {
        teams: Lineup[];
    };
    missing_players?: [MissingPlayer[], MissingPlayer[]];
}

export type RecentForm = {
    home: number[];
    away: number[];
}

export type MissingPlayerDetails = {
    type: number,
    reason: string,
    will_play_status: number,
    will_play: string
}


export type MissingPlayer = {
    jersey_num: number,
    name: string,
    player_short_name: string,
    position: string,
    formation_position: string,
    missing_details: MissingPlayerDetails
}




export type Game = {
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
    tv_networks?: TVNetwork[];
    main_odds?: MainOdds;
    penalties?: [number, number];
    events: EventsCalendario[];
    statistics: Statistic[];
    head_to_head: HeadToHead;
    recent_form: RecentForm;
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
    league: {
        name: string;
        id: string;
        url_name: string;
        country_id: string;
        is_international: boolean;
        show_country_flags:boolean;
    };
    live_odds: LiveOdds;
}

export type HeadToHead = {
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
        main_odds: MainOdds;
    }[];
}


export type PoleProps = {
    teamsLineups: Lineup[];
    teams: Team[];
    cb?:() => void;
    activeTab?:string;
    params?: {
        id: string
    };
    showCountryFlags?:boolean;
}


export type Statistic = {
    name: string;
    values: [string, string];
    percentages: [number, number];
}

export type LiveOdds = {
    bookie_id?: string;
    cta_link?:string;
    odds?: {
        original: OddsOption[];
        live: OddsOption[];
    }
}





export type Row = {
    time: string;
    events: PlayerEvent[];
};

export type PenaltiesData = {
    name: string;
    show_stage_title: boolean;
    is_penalties_stage: boolean;
    scores: [number, number];
    rows: Row[];
};

export type EventsCalendario = {
    name: string;
    show_stage_title: boolean;
    is_penalties_stage: boolean;
    scores: [number, number];
    rows: {
        time: string;
        events: PlayerEvent[];
    }[];
}

export type CalendarioEventsProps = {
    events?: EventsCalendario[];
}






//head to head 
export type Blockh2hProps = {
    headToHead: HeadToHead;
    teams: Team[];
    showCountryFlags?:boolean;
    teamsTop?: Team[];
}

export type Blockh2hHeadContentProps = {
    headToHead: HeadToHead;
    teamsTop: Team[];
}

export type H2HItem = {
    clazz?: string;
    children: React.ReactNode;
}

//header game center 
export type HeaderGCProps = {
    teamsHeader: Team[];
    status: Status,
    startTime?: string;
    gameTime?: string;
    penalties?: [number, number] | [];
    scores?: [number, number];
    description?: string;
    showCountryFlags?:boolean;
}

//live odds
export type LiveOddsProps = {
    teams:Team[];
    showCountryFlags?: boolean;
    liveOdds?: LiveOdds;
}



//lineups player 

export type LineupsPlayerProps = {
    name: string;
    willPlay?:string;
    number:number;
    willPlayColor:string;
    size?: "max"
}

export type MissingPlayersProps = {
    missingPlayers: MissingPlayer[];
}

export type BenchProps = {
    bench: Player[];
    title:string;
}


//pole 
export type FormationProps = {
    type?: number;
    startingPlayers: Player[];
    stylesOption: number;
}

export type PolePlayerProps = {
    jersey_num: number;
    player_short_name: string;
    styles: React.CSSProperties;
    top?: boolean;
    substitution?: Subctitution;
    events?: Events;
    position?: string;
}
export type PoleCommandProps = {
    team: Team;
    distanseOffset?: string;
    formation: string;
    showCountryFlags?:boolean;
}

//prediction 

export type PredictionBlockProps = {
    prediction?: Prediction;
}

export type PredictionContainerProps = {
    id:string;
    prediction?:Prediction;
    showCountryFlags?:boolean;
    teams:Team[];
    liveOdds?: LiveOdds;
}

//statistic 
export type StatsProps = {
    statistics: Statistic[];
}

//TeamMatchHistory

export type TeamMatchHistoryProps = {
    teams: Team[];
    resentForm: RecentForm;
    showCountryFlags?:boolean;
}

export type SecondTabProps = {
    missingPlayers?: [MissingPlayer[],MissingPlayer[]];
    teams: Team[];
    teamsLineups: Lineup[];
    showCountryFlags?:boolean;
}