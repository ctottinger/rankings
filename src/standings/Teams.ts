import {IConference, IDivision, ITeam} from "./types"

export const swag: ITeam = {
    name: "BigSwagoo713",
    id: 1,
    conference: "N",
    division: "NE",
    icon: "photo-1582562124811-c09040d0a901"
}
export const touchdown: ITeam = {
    name: "Touchdown Syndrome",
    id: 2,
    conference: "N",
    division: "NE",
    icon: "photo-1618160702438-9b02ab6515c9"
}
export const ctottinger: ITeam = {
    name: "ctottinger",
    id: 3,
    conference: "N",
    division: "NE",
    icon: "photo-1466721591366-2d5fba72006d"
}

export const bigred: ITeam = {
    name: "BigRedAlec",
    id: 4,
    conference: "N",
    division: "NW",
    icon: "photo-1535268647677-300dbf3d78d1"
}
export const firstwon: ITeam = {
    name: "1st & Won",
    id: 5,
    conference: "N",
    division: "NW",
    icon: "photo-1452960962994-acf4fd70b632"
}
export const chepe: ITeam = {
    name: "YungChepe13",
    id: 6,
    conference: "N",
    division: "NW",
    icon: "photo-1582562124811-c09040d0a901"
}

export const maybe: ITeam = {
    name: "Call me maye-be",
    id: 7,
    conference: "S",
    division: "SE",
    icon: "photo-1618160702438-9b02ab6515c9"
}
export const bo: ITeam = {
    name: "The Bo Lievers",
    id: 8,
    conference: "S",
    division: "SE",
    icon: "photo-1466721591366-2d5fba72006d"
}
export const supercam: ITeam = {
    name: "$uperCam & Smittys 1ceBox",
    id: 9,
    conference:"S",
    division: "SE",
    icon: "photo-1535268647677-300dbf3d78d1"
}

export const knowsballs: ITeam = {
    name: "knowsball8",
    id: 10,
    conference: "S",
    division: "SW",
    icon: "photo-1452960962994-acf4fd70b632"
}
export const jork: ITeam = {
    name: "JorkstrapJorker",
    id: 11,
    conference: "S",
    division: "SW",
    icon: "photo-1582562124811-c09040d0a901"
}
export const bigdon: ITeam = {
    name: "8igDonDada",
    id: 12,
    conference: "S",
    division: "SW",
    icon: "photo-1618160702438-9b02ab6515c9"
}

export const teams: ITeam[] = [swag, touchdown, ctottinger, bigdon, supercam, knowsballs, bigdon, bigred, firstwon, chepe, maybe, bo, jork]


const NorthEast: IDivision = {
    name: "NorthEast",
    id: "NE",
    conference: "N",
}
const NorthWest: IDivision = {
    name: "NorthWest",
    id: "NW",
    conference: "N",
}
const SouthEast: IDivision = {
    name: "SouthEast",
    id: "SE",
    conference: "S",
}
const SouthWest: IDivision = {
    name: "SouthWest",
    id: "SW",
    conference: "S",
}

export const divisions: IDivision[] = [NorthEast, NorthWest, SouthEast, SouthWest]


const North: IConference = {
    name: "North",
    id: "N",
    divisions: [NorthEast, NorthWest],
}
const South: IConference = {
    name: "South",
    id: "S",
    divisions: [SouthEast, SouthWest],
}

export const conferences: IConference[] = [North, South]