import React from "react";
import styles from "./command.module.scss";
import Image from "next/image";



import "./command.scss";
import { _SERVER_API } from "@/config/consts";
import { CommandProps } from "@/types/props/match";

const Command = ({
    team,
    position,
    imagesStyles,
    reverse,
    isInternationl,
    show_country_flags,
    classes,
    distanseOffset,
    textAlign
}: CommandProps) => {
    const flagStyle = position === "right" ? { right: distanseOffset ? distanseOffset : "-4px" } : { left: distanseOffset ? distanseOffset : "-4px"  };

    return (
        <div className={`${styles.body} ${classes}`}>
            {!reverse && (
                <span style={{ textAlign:  textAlign ? textAlign : position  }} className={`${styles.title} comand-name__title`}>
                    {team?.name}
                </span>
            )}
            <div className={`${imagesStyles} ${styles.command}`}>
                {show_country_flags && (
                    <Image  
                        src={`${_SERVER_API}/images/country/${team.country_id}/1`}
                        height={32}
                        width={32}
                        style={flagStyle}
                        alt="country flag"
                        className="country"
                    />
                )}
                <div className="comand-imageteam">
                    <Image
                        height={64}
                        width={64}
                        src={`${_SERVER_API}/images/team/${team?.id}/4`} 
                        className="team" 
                        alt={team?.name}
                    />
                </div>
            </div>
            {reverse && (
                <span style={{ textAlign: textAlign ? textAlign : position }} className={`${styles.title} comand-name__title`}>
                    {team?.name}
                </span>
            )}
        </div>
    );
};


const arePropsEqual = (prevProps: CommandProps, nextProps: CommandProps): boolean => {
    return (
        prevProps.isInternationl === nextProps.isInternationl &&
        prevProps.position === nextProps.position &&
        prevProps.imagesStyles === nextProps.imagesStyles &&
        prevProps.reverse === nextProps.reverse &&
        prevProps.show_country_flags === nextProps.show_country_flags &&
        prevProps.team.id === nextProps.team.id &&
        prevProps.team.name === nextProps.team.name &&
        prevProps.team.country_id === nextProps.team.country_id
    );
};


export default React.memo(Command, arePropsEqual);
