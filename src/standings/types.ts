export interface IRecord {
    wins: number,
    losses: number,
}

export interface IConference {
    name: string,
    id: string,
    divisions: IDivision[],
}

export interface IDivision {
    name: string,
    id: string,
    conference: TConference,
}

export interface ITeam {
    name: string,
    id: number,
    conference: TConference,
    division: TDivision,
    icon: string,
    overallRecord?: IRecord,
    conferenceRecord?: IRecord,
    divisionalRecord?: IRecord,
    wins?: [string],
    losses?: [string],
    PF?: number,
    PA?: number,
}

export interface IWeeklyMatchups {
    week: number,
    matchups: TMatchup[],
}

export type TConference = "S" | "N";
export type TDivision = "SE" | "SW" | "NE" | "NW";
export type TMatchup = [
    [ITeam, number],
    [ITeam, number]
]
export type TMatchupType = "DIV" | "CONF" | "OOC"