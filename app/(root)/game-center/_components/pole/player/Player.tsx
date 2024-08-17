import React from 'react'
import "./player.scss"
import { abbreviatePlayerName } from '@/lib/utils';
import Image from 'next/image';

const Player = ({
    player_short_name,
    jersey_num,
    styles,
    top,
    substitution,
    events
}: {
    jersey_num: number;
    player_short_name: string;
    styles: React.CSSProperties;
    top?: boolean;
    substitution?: {
        time: number;
        player: number;
        type: number;
    };
    events?: {
        goals?: {
            goals?: number;
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
}) => {

    return (
        <div style={styles} className='player'>  
            <p className="player__name">{abbreviatePlayerName(player_short_name)}</p>
            <div className="player__block">
                <span className="player__number">{jersey_num}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                    <path d="M16.086 7.84766H13.061C12.8238 7.84766 12.5963 7.94188 12.4285 8.10962C12.2608 8.27735 12.1666 8.50485 12.1666 8.74207C12.1666 8.97928 12.2608 9.20677 12.4285 9.37451C12.5963 9.54224 12.8238 9.63648 13.061 9.63648H16.086C16.3232 9.63648 16.5507 9.54224 16.7184 9.37451C16.8861 9.20677 16.9804 8.97928 16.9804 8.74207C16.9804 8.50485 16.8861 8.27735 16.7184 8.10962C16.5507 7.94188 16.3232 7.84766 16.086 7.84766Z" fill="white"/>
                    <path d="M1.28575 8.92829L0.857178 1.64258H22.7143V8.49972L19.2857 8.92829V21.3569H4.28575V8.92829H1.28575Z"  fill={top ? "#115E2A" : "#FF4848"}/>
                    <path d="M22.1016 0.245117H1.89756C1.39739 0.244978 0.91739 0.442372 0.562018 0.794352C0.206646 1.14633 0.00465728 1.62441 0 2.12457V7.9433C0 8.97932 0.858185 9.86002 1.89756 9.86002H3.50311V20.9288C3.50311 21.9245 4.29637 22.7544 5.28857 22.7544H18.6783C19.1599 22.7481 19.6199 22.5535 19.9598 22.2123C20.2997 21.8711 20.4925 21.4104 20.497 20.9288V9.86002H22.1017C23.1411 9.86002 24.0001 8.97925 24.0001 7.9433V2.12457C23.9952 1.62432 23.793 1.14621 23.4375 0.794252C23.082 0.442288 22.6019 0.244937 22.1016 0.245117ZM14.8647 2.03394C14.6837 2.65562 14.3058 3.20178 13.7879 3.59039C13.2699 3.979 12.6399 4.18908 11.9924 4.18908C11.3449 4.18908 10.7149 3.979 10.1969 3.59039C9.67899 3.20178 9.30112 2.65562 9.12007 2.03394H14.8647ZM22.2112 7.9433C22.2112 7.9787 22.1401 7.99667 22.1016 7.99667H19.562C19.3179 8.00008 19.0846 8.09817 18.9114 8.27026C18.7382 8.44235 18.6385 8.67498 18.6335 8.9191V20.9656H5.29193V8.9191C5.29346 8.67788 5.19985 8.44579 5.03141 8.27312C4.86297 8.10044 4.63326 8.00112 4.39207 7.99667H1.89756C1.85925 7.99667 1.78882 7.9787 1.78882 7.9433V2.12457C1.78882 2.09393 1.85508 2.03394 1.89756 2.03394H7.26737C7.66449 4.3445 9.63212 5.99506 11.9928 5.99506C14.3536 5.99506 16.3207 4.3445 16.7183 2.03394H22.1024C22.1449 2.03394 22.2119 2.09356 22.2119 2.12457L22.2112 7.9433Z" fill="white"/>
                </svg>
                { 
                    (events?.cards?.red && events?.cards?.yellow) 
                    ? 
                        <img className="player__card" src="/assets/icons/red-card-min.svg" alt="red-card" /> 
                    : 
                    <>
                        {
                            events?.cards?.red && <img className="player__card" src="/assets/icons/red-card-min.svg" alt="red-card" />
                        }
                        {
                            events?.cards?.yellow && <img className="player__card" src="/assets/icons/yellow-card-min.svg" alt="yellow-card" />
                        }
                    </>
                }
                {
                    substitution?.player &&  <span className="player__minute">{substitution.player}</span>
                }   
                {
                    events?.goals?.goals ? 
                    <>
                        {
                            events?.goals?.goals !== 0  ?
                                <div className="player__gol">
                                    {events?.goals?.goals}
                                    <Image
                                        width={14}
                                        height={14}
                                        src="/assets/icons/ball-white.svg"
                                        alt="ball-white"
                                    />
                                </div> : null
                        }
                    </> : null
                }
                
            </div>
        </div>
    )
}

export default Player