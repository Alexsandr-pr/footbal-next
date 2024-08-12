import React from "react";

import { EventGolsProps } from "@/types/home";

import styles from "./gols.module.scss";

const EventGols = ({
    goalsTeam1,
    goalsTeam2
}: EventGolsProps) => {
    return (
        <div className={styles.foot}>
            <div className={styles.item}>
                {goalsTeam1?.map((item, index) => (
                    <span className={styles.block} key={item.id + index + item.player_sname}>
                        <span className="green">
                            {item.time_to_display}
                        </span>
                        <p>{item.player_sname}{index < goalsTeam1.length - 1 ? ";" : null}</p>
                    </span>
                ))}
            </div>
            <div className={styles.span}>
                <div className=""></div>
            </div>
            <div className={styles.item}>
                {goalsTeam2?.map((item, index) => (
                    <span className={styles.block} key={item.id}>
                        <span className="green">
                            {item.time_to_display}
                        </span>
                        <p>{item.player_sname}{index < goalsTeam2.length - 1 ? ";" : null}</p>
                    </span>
                ))}
            </div>
        </div>
    );
};

const arePropsEqual = (prevProps: EventGolsProps, nextProps: EventGolsProps): boolean => {
    const { goalsTeam1: prevGoalsTeam1, goalsTeam2: prevGoalsTeam2 } = prevProps;
    const { goalsTeam1: nextGoalsTeam1, goalsTeam2: nextGoalsTeam2 } = nextProps;

    if (!prevGoalsTeam1 && !nextGoalsTeam1 && !prevGoalsTeam2 && !nextGoalsTeam2) {
        return true;
    }

    if ((prevGoalsTeam1?.length || 0) !== (nextGoalsTeam1?.length || 0) || (prevGoalsTeam2?.length || 0) !== (nextGoalsTeam2?.length || 0)) {
        return false;
    }

    const goalsTeam1Equal = prevGoalsTeam1?.every((goal, index) => {
        const nextGoal = nextGoalsTeam1?.[index];
        return goal.id === nextGoal?.id && goal.time_to_display === nextGoal?.time_to_display && goal.player_sname === nextGoal?.player_sname;
    }) ?? true; 

    const goalsTeam2Equal = prevGoalsTeam2?.every((goal, index) => {
        const nextGoal = nextGoalsTeam2?.[index];
        return goal.id === nextGoal?.id && goal.time_to_display === nextGoal?.time_to_display && goal.player_sname === nextGoal?.player_sname;
    }) ?? true;

    return goalsTeam1Equal && goalsTeam2Equal;
};

export default React.memo(EventGols, arePropsEqual);
