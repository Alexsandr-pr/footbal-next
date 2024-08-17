export const getGridStyle = (totalGoals: number) => {
    if (totalGoals > 2) {
        return {
            gridTemplateColumns: 'repeat(2, 1fr)'
        };
    } else {
        return {
            gridTemplateColumns: '1fr'
        };
    }
};


export function extractTime(datetime: string | undefined): string | undefined{
    if(datetime !== undefined) {
        const dateTimeParts = datetime.split(' ');
        if (dateTimeParts.length !== 2) {
            throw new Error('Invalid datetime format');
        }
        return dateTimeParts[1];
    }
}
export function formatDateString(input?: string): string | undefined {
    if (!input) {
        return undefined;
    }

    const dateParts = input.split(" ")[0].split("-");

    if (dateParts.length < 3) {
        return undefined;
    }

    const day = dateParts[0];
    const month = dateParts[1];

    return `${day}/${month}`;
}


export function abbreviatePlayerName(fullName: string): string {
    const nameParts = fullName.split(' ');
    if (nameParts.length === 1) {
        return fullName;
    }

    const firstNameInitial = nameParts[0].charAt(0) + '.';
    const lastName = nameParts[nameParts.length - 1];

    return `${firstNameInitial} ${lastName}`;
}
