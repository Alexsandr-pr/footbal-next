import React from "react";
import Link from "next/link";
import styles from "./command.module.scss";
import "./command.scss";
import { Team } from "@/types/home";

interface CommandProps {
    isInternationl: boolean;
    team: Team;
    position: "left" | "right";
    imagesStyles?: "command-home" | "commandGameCenter" | "commandGameCenterHeader";
    reverse?: boolean;
    show_country_flags?: boolean;
}

const Command = ({
    team,
    position,
    imagesStyles,
    reverse,
    isInternationl,
    show_country_flags
}: CommandProps) => {
    const flagStyle = position === "right" ? { right: "-4px" } : { left: "-4px" };

    return (
        <Link href="#" className={styles.body}>
            {!reverse && (
                <span style={{ textAlign: position }} className={styles.title}>
                    {team?.name}
                </span>
            )}
            <div className={`${imagesStyles} ${styles.command}`}>
                {show_country_flags && (
                    <img
                        style={flagStyle}
                        src={`https://www.sports-stats.net/images/country/${team.country_id}/1`}
                        alt="flag"
                        className="country"
                    />
                )}
                <div className="comand-imageteam">
                    <img src={`https://www.sports-stats.net/images/team/${team?.id}/4`} className="team" />
                </div>
            </div>
            {reverse && (
                <span style={{ textAlign: position }} className={styles.title}>
                    {team?.name}
                </span>
            )}
        </Link>
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
