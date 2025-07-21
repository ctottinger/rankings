
interface Team {
  rank: number;
  name: string;
  divisionRecord: string;
  conferenceRecord: string;
  overallRecord: string;
  pointsFor: number;
  icon?: string;
}

export const calculateBestStats = (teams: Team[]) => {
  const bestConferenceRecord = teams.reduce((best, team) => {
    const [wins, losses] = team.conferenceRecord.split('-').map(Number);
    const winPercentage = wins / (wins + losses);
    const [bestWins, bestLosses] = best.conferenceRecord.split('-').map(Number);
    const bestWinPercentage = bestWins / (bestWins + bestLosses);
    return winPercentage > bestWinPercentage ? team : best;
  });

  const bestOverallRecord = teams.reduce((best, team) => {
    const [wins, losses] = team.overallRecord.split('-').map(Number);
    const winPercentage = wins / (wins + losses);
    const [bestWins, bestLosses] = best.overallRecord.split('-').map(Number);
    const bestWinPercentage = bestWins / (bestWins + bestLosses);
    return winPercentage > bestWinPercentage ? team : best;
  });

  return {
    bestConferenceTeam: bestConferenceRecord.name,
    bestOverallTeam: bestOverallRecord.name,
  };
};
