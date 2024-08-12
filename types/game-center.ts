
interface PitchLocation {
    x: number;
    y: number;
}

interface Substitution {
    time: string;
    player: string;
    type: string;
}



export interface Player {
    jersey_num: string;
    name: string;
    player_short_name: string;
    position: string;
    formation_position: string;
    pitch_location: PitchLocation;
    events?: {};
    substitution?: {};
}


interface Bench {

}

export interface TeamLineups {
    status:string;
    formation: string;
    team_num: number;
    starting: Player[];
    bench: Bench[];
}