import React from 'react'
import styles from "./command.module.scss";
import "./command.scss";
import { _SERVER_API } from '@/config/consts';

interface CommandImageProps {
    imagesStyles?: "command-home" | "commandGameCenter" | "commandGameCenterHeader" | "recent-form" | "h2h" | "lineupsTab";
    showCountryFlags?: boolean;
    countryId?:string;
    teamId?:string;
    teamName:string;
    position?: "left" | "right";
    distanseOffset?: string;
}

const CommandImage = ({
    imagesStyles, 
    showCountryFlags,
    countryId,
    teamId,
    teamName,
    position,
    distanseOffset
} : CommandImageProps) => {

    const flagStyle = position === "right" ? { right: distanseOffset ? distanseOffset : "-4px" } : { left: distanseOffset ? distanseOffset : "-4px"  };
    return (
        <div className={`${imagesStyles} ${styles.command}`}>
            {showCountryFlags && (
                <img
                    src={`${_SERVER_API}/images/country/${countryId}/1`}
                    height={32}
                    width={32}
                    style={flagStyle}
                    alt="country flag"
                    className="country"
                />
            )}
            <div className="comand-imageteam">
                <img
                    height={64}
                    width={64}
                    src={`${_SERVER_API}/images/team/${teamId}/4`} 
                    className="team" 
                    alt={teamName}
                />
            </div>
        </div>
    )
}

export default CommandImage