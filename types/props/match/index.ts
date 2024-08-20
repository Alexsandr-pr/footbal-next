import { Goal, Status, TVNetwork } from "@/types";
import { Game, Team } from "@/types/game-center";
import { League } from "../../home";




export interface MatchInfoProps {
    games: League;
}

export interface EventTimeProps {
    status: Status;
    startTime: string;
    gameTimeToDisplay: string;
    tv_networks?: TVNetwork[];
}

export interface EventResultProps {
    scores?: [number, number] | [];
    status: Status;
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
    spinnerSize:number;
}

export interface EventItemProps {
    country_id: string;
    name: string;
    game: Game;
    isInternationl: boolean;
    show_country_flags: boolean;
    soundLocal: boolean;
}

export interface EventGolsProps {
    goalsTeam1?: Goal[];
    goalsTeam2?: Goal[];
}

export interface EventTeamProps {
    isInternationl: boolean;
    status: Status;
    teams: Team[];
    scores: number[];
    penalties?: [number, number] | [];
    description?: string;
    show_country_flags?:boolean;
    soundLocal?:boolean;
}

export interface CommandProps {
    isInternationl?: boolean;
    team: Team;
    position?: "left" | "right";
    imagesStyles?: "command-home" | "commandGameCenter" | "commandGameCenterHeader" | "recent-form";
    reverse?: boolean;
    show_country_flags?: boolean;
    classes?: string;
    distanseOffset?: string;
    textAlign?: "left" | "right" | "center" ;
}


export interface PreGameProps {
    description?: string;
    startTime?: string | "";
    statusName?: string;
}