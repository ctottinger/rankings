import {
    IWeeklyMatchups,
    TMatchup,
    TMatchupType
} from "@/standings/types.ts";
import {
    bigdon,
    bigred,
    bo,
    chepe,
    ctottinger,
    firstwon,
    jork,
    knowsballs,
    maybe,
    supercam,
    swag,
    teams,
    touchdown
} from "@/standings/Teams.ts";
import {Record, RecordAddLoss, RecordAddWin} from "@/standings/utils.ts";

const week_one: IWeeklyMatchups = {
    week: 1,
    matchups: [
        [[ctottinger, 119.18], [maybe, 144.58]],
        [[bigred, 111.98], [bigdon, 145.44]],
        [[supercam, 121.34], [touchdown, 113.72]],
        [[swag, 140.80], [jork, 112.32]],
        [[firstwon, 92.14], [knowsballs, 119.86]],
        [[bo, 178.30], [chepe, 84.52]]
    ]
}
const week_two: IWeeklyMatchups = {
    week: 2,
    matchups: [
        [[ctottinger, 140.14], [firstwon, 131.40]],
        [[bigred, 147.98], [chepe, 130.38]],
        [[supercam, 115.72], [maybe, 144.08]],
        [[bigdon, 108.80], [knowsballs, 109.42]],
        [[swag, 134.08], [touchdown, 123.12]],
        [[bo, 125.22], [jork, 121.26]]
    ]
}

export const matchups: IWeeklyMatchups[] = [week_one, week_two]


function test() {
    const teamsData = {};
    teams.forEach(team => {
        teamsData[team.name] = team;
        teamsData[team.name]["overallRecord"] = Record(0, 0);
        teamsData[team.name]["conferenceRecord"] = Record(0, 0);
        teamsData[team.name]["divisionalRecord"] = Record(0, 0);
        teamsData[team.name]["wins"] = [];
        teamsData[team.name]["losses"] = [];
        teamsData[team.name]["PA"] = 0;
        teamsData[team.name]["PF"] = 0;

    })

    const FindWinnerLoser = function (matchup: TMatchup): [string, string] {
        if (matchup[0][1] > matchup[1][1]) return [matchup[0][0]["name"], matchup[1][0]["name"]];
        return [matchup[1][0]["name"], matchup[0][0]["name"]];
    }

    const FindMatchupType = function (matchup: TMatchup): TMatchupType {
        if (matchup[0][0]["conference"] !== matchup[1][1]["conference"]) return "OOC";
        if (matchup[0][0]["division"] !== matchup[0][0]["division"]) return "CONF";
        return "DIV";
    }

    matchups.forEach(week => {
        week.matchups.forEach((matchup) => {
            const [winner, loser] = FindWinnerLoser(matchup);
            const teamNames = [matchup[0][0]["name"], matchup[1][0]["name"]];
            const teamScores = [matchup[0][1], matchup[1][1]]

            teamsData[winner]["wins"].push(loser)
            teamsData[loser]["losses"].push(winner);

            const matchupType = FindMatchupType(matchup);
            if(matchupType === "DIV") {
                teamsData[winner]["divisionalRecord"] = RecordAddWin(teamsData[winner]["divisionalRecord"]);
                teamsData[loser]["divisionalRecord"] = RecordAddLoss(teamsData[loser]["divisionalRecord"]);
            }
            else if (matchupType === "CONF") {
                teamsData[winner]["conferenceRecord"] = RecordAddWin(teamsData[winner]["conferenceRecord"]);
                teamsData[loser]["conferenceRecord"] = RecordAddLoss(teamsData[loser]["conferenceRecord"]);
            }
            teamsData[winner]["overallRecord"] = RecordAddWin(teamsData[winner]["overallRecord"]);
            teamsData[loser]["overallRecord"] = RecordAddLoss(teamsData[loser]["overallRecord"]);


            teamsData[teamNames[0]].PF = teamScores[0];
            teamsData[teamNames[0]].PA = teamScores[1];

            teamsData[teamNames[1]].PF = teamScores[1];
            teamsData[teamNames[1]].PA = teamScores[0];
        })
    });
    return teamsData;
}

const td = test();

const x = 0;