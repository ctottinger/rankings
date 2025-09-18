import {IRecord} from "@/standings/types.ts";

export function Record(wins: number, losses: number) {
    const record: IRecord = {
        wins: wins,
        losses: losses,
    }
    return record;
}

export function RecordAddLoss(record: IRecord): IRecord {
    record.losses = record.losses + 1;
    return record;
}

export function RecordAddWin(record: IRecord): IRecord {
    record.wins = record.wins + 1;
    return record;
}