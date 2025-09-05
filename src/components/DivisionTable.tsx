
import { Card } from "@/components/ui/card";
import { calculateBestStats } from "@/utils/divisionStats";

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

const DivisionTable = ({ divisionName, teams, theme }: DivisionTableProps) => {
  const bestStats = calculateBestStats(teams);

  return (
    <div className="relative">
      <div className={`bg-card border ${theme.border} shadow-glow rounded-lg relative pt-4`}>
        {/* Fieldset-style title */}
        <div className={`absolute -top-3 left-4 bg-card px-3 border ${theme.border} rounded`}>
          <h3 className={`text-lg font-bold ${theme.primary} whitespace-nowrap`}>
            {divisionName}
          </h3>
        </div>
        
        <div className="p-4 sm:p-6 pt-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="w-8 text-left py-2 px-0.2 text-muted-foreground">#</th>
                  <th className="text-left py-2 px-1 text-muted-foreground">Team</th>
                  <th className={`w-16 text-center py-2 px-1 ${theme.primary} font-semibold`}>Div</th>
                  <th className="w-20 text-center py-2 px-1 text-muted-foreground hidden sm:table-cell">Conf</th>
                  <th className="w-16 text-center py-2 px-1 text-muted-foreground hidden sm:table-cell">W/L</th>
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
                        <span className={`text-base font-semibold text-foreground truncate ${
                          team.rank === 1 ? 'font-bold border-b-2 border-yellow-400' : ''
                        }`} title={team.name}>
                          {team.name}
                        </span>
                      </div>
                    </td>
                    <td className="w-16 py-3 px-1 text-center">
                      <span className={`font-semibold ${theme.primary} px-2 py-1 rounded-md`}>
                        {team.divisionRecord}
                      </span>
                    </td>
                    <td className="w-20 py-3 px-1 text-center hidden sm:table-cell">
                      <span className={`px-2 py-1 rounded-md mx-1 ${
                        team.name === bestStats.bestConferenceTeam 
                          ? `${theme.secondary} text-white font-semibold` 
                          : 'text-muted-foreground'
                      }`}>
                        {team.conferenceRecord}
                      </span>
                    </td>
                    <td className="w-16 py-3 px-1 text-center hidden sm:table-cell">
                      <span className={`px-2 py-1 rounded-md mx-1 ${
                        team.name === bestStats.bestOverallTeam 
                          ? `${theme.secondary} text-white font-semibold` 
                          : 'text-muted-foreground'
                      }`}>
                        {team.overallRecord}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Mobile-only additional info */}
          <div className="sm:hidden mt-4 space-y-2">
            {teams.map((team) => (
              <div key={team.rank} className="flex justify-between text-xs text-muted-foreground border-b border-border/10 pb-1">
                <span className="flex items-center gap-2">
                  <img 
                    src={team.icon}
                    alt={team.name}
                    className={`w-4 h-4 rounded-full object-cover ${
                      team.rank === 1 ? 'border border-yellow-400' : ''
                    }`}
                  />
                  <span className={`text-sm ${team.rank === 1 ? 'font-bold' : ''}`}>
                    {team.name}
                  </span>
                </span>
                <span>
                  <span className={team.name === bestStats.bestConferenceTeam ? `${theme.secondary} text-white font-semibold px-1 rounded` : ''}>
                    Conf: {team.conferenceRecord}
                  </span> | 
                  <span className={team.name === bestStats.bestOverallTeam ? `${theme.secondary} text-white font-semibold px-1 rounded ml-1` : ' ml-1'}>
                    W/L: {team.overallRecord}
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
