import { Calendar } from "@/types/home";
import "./calendario-bottom.scss";

interface CalendarioBottomProps {
    calendar: Calendar | null;
}

const CalendarioBottom: React.FC<CalendarioBottomProps> = ({ calendar }) => {
    if (!calendar) {
        return null;
    }

    return (
        <div className="main-content__bottom-info bottom-info">
            <div className="bottom-info__title">
                <h3>{calendar.title}</h3>
            </div>
            
            <div className="bottom-info__items">
                <div className="bottom-info__item info-item">
                    <p className="bottom-info__label">Anniversaries</p>
                    {calendar.clubs.map(club => (
                        <div key={club.id} className="info-item__block">
                            <img width={32} src={`https://www.sports-stats.net/images/team/${club?.id}/4`} alt={club.name} />
                            <div className="info-item__body">
                                <p className="info-item__title">{club.name}</p>
                                <div className="info-item__text">{club.text}</div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="bottom-info__item info-item">
                    <p className="bottom-info__label">Cumpleaños</p>
                    {calendar.players.map((player, index) => (
                        <div key={index} className="info-item__block">
                            <div className="info-item__body">
                                <p className="info-item__title">{player.name}</p>
                                <div className="info-item__text">({player.team}) {player.text}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="bottom-info__buttons">
                <button className="bottom-info__button">Calendario Extendido</button>
            </div>
        </div>
    );
}

export default CalendarioBottom;
