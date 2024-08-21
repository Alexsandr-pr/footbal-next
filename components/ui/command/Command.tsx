import React from "react";
import styles from "./command.module.scss";
import "./command.scss";
import { _SERVER_API } from "@/config/consts";
import { CommandProps } from "@/types/props/match";
import CommandImage from "./CommandImage";

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

    return (
        <div className={`${styles.body} ${classes}`}>
            {!reverse && (
                <span style={{ textAlign:  textAlign ? textAlign : position  }} className={`${styles.title} comand-name__title`}>
                    {team?.name}
                </span>
            )}
            <CommandImage
                imagesStyles={imagesStyles}
                showCountryFlags={show_country_flags}
                countryId={team?.country_id}
                teamId={team?.id}
                teamName={team?.name}
                distanseOffset={distanseOffset}
            />
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
