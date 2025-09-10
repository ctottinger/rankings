interface Team {
    rank: number;
    name: string;
    divisionRecord: string;
    conferenceRecord: string;
    overallRecord: string;
    pointsFor: number;
    icon?: string;
}

interface DivisionTableProps {
    divisionName: string;
    teams: Team[];
    theme: {
        primary: string;
        secondary: string;
        accent: string;
        border: string;
    };
}

type WL = { w: number; l: number; t?: number };
const winPct = ({w, l, t = 0}: WL): number => {
    const g = w + l + t;
    if (g === 0) return 0;
    return (w + 0.5 * t) / g; // standard win% with ties = 0.5
};

const desc = (a: number, b: number) => (a === b ? 0 : b - a);

function splitRecord(input: string) {
    const [wins, losses] = input.split("-").map(Number);
    return {w: wins, l: losses} as WL;
}

function makeTeamComparator() {
    return (a: Team, b: Team): number => {
        const aDivRec = splitRecord(a.divisionRecord);
        const bDivRec = splitRecord(b.divisionRecord);
        const byDiv = desc(winPct(aDivRec), winPct(bDivRec));
        if (byDiv) return byDiv;

        // 2) Conference record
        const aConfRec = splitRecord(a.conferenceRecord);
        const bConfRec = splitRecord(b.conferenceRecord);
        const byConf = desc(winPct(aConfRec), winPct(bConfRec));
        if (byConf) return byConf;

        // 3) Overall record
        const aAllRec = splitRecord(a.overallRecord);
        const bAllRec = splitRecord(a.overallRecord);
        const byOverall = desc(winPct(aAllRec), winPct(bAllRec));
        if (byOverall) return byOverall;

        // 4) Total points for
        const byPF = desc(a.pointsFor, b.pointsFor);
        if (byPF) return byPF;

        // 5) Deterministic final tiebreak
        return a.name.localeCompare(b.name);
    };
}

function sortTeams(teams: Team[]): Team[] {
    return [...teams].sort(makeTeamComparator());
}

function calcBestConf(teams: Team[]) {
    let bestWins = 0;
    let bestLosses = 0
    teams.forEach((team) => {
        const [wins, losses] = team.conferenceRecord.split("-").map(Number);
        if (wins > bestWins) {
            bestWins = wins;
            bestLosses = losses;
        }
    })
    if (bestWins == 0 && bestLosses == 0) return "!NaN";
    return bestWins + "-" + bestLosses;
}

function calcBestOverall(teams: Team[]) {
    let bestWins = 0;
    let bestLosses = 0

    teams.forEach((team) => {
        const [wins, losses] = team.overallRecord.split("-").map(Number);
        if (wins > bestWins) {
            bestWins = wins;
            bestLosses = losses;
        }
    })
    if (bestWins == 0 && bestLosses == 0) return "!NaN";
    return bestWins + "-" + bestLosses;
}

function calcBestDivision(teams: Team[]) {
    let bestWins = 0;
    let bestLosses = 0

    teams.forEach((team) => {
        const [wins, losses] = team.divisionRecord.split("-").map(Number);
        if (wins > bestWins) {
            bestWins = wins;
            bestLosses = losses;
        }
    })
    if (bestWins == 0 && bestLosses == 0) return "!NaN";
    return bestWins + "-" + bestLosses;
}

function calcBestPoints(teams: Team[]) {
    let bestPoints = 0;

    teams.forEach((team) => {
        const points = team.pointsFor;
        if (points > bestPoints) {
            bestPoints = points;
        }
    })
    if (bestPoints == 0) return 100_000;
    return bestPoints;
}

const DivisionTable = ({divisionName, teams, theme}: DivisionTableProps) => {
    const bestDivisionRecord = calcBestDivision(teams);
    const bestConfRecord = calcBestConf(teams);
    const bestOverallRecord = calcBestOverall(teams);
    const bestPoints = calcBestPoints(teams);

    console.log(bestDivisionRecord, bestConfRecord, bestOverallRecord);

    teams = sortTeams(teams);

    teams[0].rank = 1;
    teams[1].rank = 2;
    teams[2].rank = 3;

    return (
        <div className="relative">
            <div className={`bg-card border ${theme.border} shadow-glow rounded-lg relative pt-4`}>
                <div
                    className={`absolute -top-3 left-4 bg-card px-3 border ${theme.border} rounded`}>
                    <h3 className={`text-lg font-bold ${theme.primary} whitespace-nowrap`}>
                        {divisionName}
                    </h3>
                </div>

                <div className="p-4 sm:p-6 pt-6">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                            <tr className="border-b border-border/30">
                                <th className="w-6 text-left py-2 px-0.2 text-muted-foreground">#</th>
                                <th className="text-left py-2 px-1 text-muted-foreground">Team</th>
                                <th className={`w-16 text-center py-2 px-1 ${theme.primary} font-semibold`}>Div</th>
                                <th className="w-20 text-center py-2 px-1 text-muted-foreground hidden sm:table-cell">Conf</th>
                                <th className="w-16 text-center py-2 px-1 text-muted-foreground hidden sm:table-cell">W/L</th>
                                <th className="w-16 text-center py-2 px-1 text-muted-foreground hidden sm:table-cell">PF</th>

                            </tr>
                            </thead>
                            <tbody>
                            {teams.map((team) => (
                                <tr
                                    key={team.rank}
                                    className="border-b border-border/20 hover:bg-secondary/20 transition-colors"
                                >
                                    <td className="py-3 px-0.5 font-semibold text-primary">
                                        {team.rank}
                                    </td>
                                    <td className="py-3 px-1">
                                        <div className="flex items-center gap-2">
                                            <img
                                                src={`https://images.unsplash.com/${team.icon}?w=32&h=32&fit=crop&crop=face`}
                                                alt={team.name}
                                                className={`w-6 h-6 rounded-full object-cover flex-shrink-0 ${
                                                    team.rank === 1 ? 'border-2 border-yellow-400' : ''
                                                }`}
                                            />
                                            <span
                                                className={`text-base font-semibold text-foreground truncate ${
                                                    team.rank === 1 ? 'font-bold border-b-2 border-yellow-400' : ''
                                                }`} title={team.name}>
                                              {team.name}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="w-16 py-3 px-1 text-center">
                                      <span
                                          className={`font-semibold ${theme.primary} px-2 py-1 rounded-md`}>
                                        {team.divisionRecord}
                                      </span>
                                    </td>
                                    <td className="w-20 py-3 px-1 text-center hidden sm:table-cell">
                                          <span className={`px-2 py-1 rounded-md mx-1 ${
                                              team.conferenceRecord === bestConfRecord
                                                  ? `${theme.secondary} text-white font-semibold`
                                                  : 'text-muted-foreground'
                                          }`}>
                                            {team.conferenceRecord}
                                          </span>
                                    </td>
                                    <td className="w-16 py-3 px-1 text-center hidden sm:table-cell">
                                          <span className={`px-2 py-1 rounded-md mx-1 ${
                                              team.overallRecord === bestOverallRecord
                                                  ? `${theme.secondary} text-white font-semibold`
                                                  : 'text-muted-foreground'
                                          }`}>
                                            {team.overallRecord}
                                          </span>
                                    </td>
                                    <td className="w-16 py-3 px-1 text-center hidden sm:table-cell">
                                          <span className={`px-2 py-1 rounded-md mx-1 ${
                                              team.pointsFor === bestPoints
                                                  ? `${theme.secondary} text-white font-semibold`
                                                  : 'text-muted-foreground'
                                          }`}>
                                            {team.pointsFor}
                                          </span>
                                    </td>

                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile-only stats */}
                    <div className="sm:hidden mt-4 space-y-2">
                        {teams.map((team) => (
                            <div key={team.rank}
                                 className="flex justify-between text-xs text-muted-foreground border-b border-border/10 pb-1">
                                <span className="flex items-center w-2/5 truncate">
                                  <span
                                      className={`text-sm truncate ${team.rank === 1 ? 'font-bold' : ''}`}>
                                    {team.name}
                                  </span>
                                </span>
                                <span className={"font-xs"}>
                                  <span
                                      className={team.conferenceRecord === bestConfRecord ? `${theme.secondary} text-white font-semibold px-1 rounded` : ''}>
                                    Conf: {team.conferenceRecord}
                                  </span>
                                  <span
                                      className={team.overallRecord === bestOverallRecord ? `${theme.secondary} text-white font-semibold px-1 rounded ml-1` : ''}>
                                    W/L: {team.overallRecord}
                                  </span>
                                    <span
                                        className={team.pointsFor === bestPoints ? `${theme.secondary} text-white font-semibold px-1 rounded ml-1` : ' ml-1'}>
                                    PF: {team.pointsFor}
                                  </span>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DivisionTable;
