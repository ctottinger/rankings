
import DivisionTable from "./DivisionTable";

const FantasyStandings = () => {
  const names = {
    "mainTitle": "Fourth and Forever",
    "subTitle": "Season standings"
  }
  
  // Theme configurations for each division
  const divisionThemes = {
    "NorthEast": {
      primary: "text-blue-400",
      secondary: "bg-blue-500",
      accent: "bg-blue-500/10",
      border: "border-blue-500/30"
    },
    "NorthWest": {
      primary: "text-red-400",
      secondary: "bg-red-500",
      accent: "bg-red-500/10",
      border: "border-red-500/30"
    },
    "SouthEast": {
      primary: "text-orange-400",
      secondary: "bg-orange-500",
      accent: "bg-orange-500/10",
      border: "border-orange-500/30"
    },
    "SouthWest": {
      primary: "text-purple-400",
      secondary: "bg-purple-500",
      accent: "bg-purple-500/10",
      border: "border-purple-500/30"
    }
  };

  // Sample data for the fantasy football league
  const sampleData = {
    conference1: {
      name: "North",
      division1: {
        name: "NorthEast",
        teams: [
          { rank: 1, name: "The Crushers", divisionRecord: "4-1", conferenceRecord: "6-3", overallRecord: "8-3", pointsFor: 1247, icon: "photo-1582562124811-c09040d0a901" },
          { rank: 2, name: "Gridiron Gods", divisionRecord: "3-2", conferenceRecord: "5-4", overallRecord: "7-4", pointsFor: 1189, icon: "photo-1618160702438-9b02ab6515c9" },
          { rank: 3, name: "End Zone Elite", divisionRecord: "1-4", conferenceRecord: "2-7", overallRecord: "3-8", pointsFor: 1034, icon: "photo-1466721591366-2d5fba72006d" }
        ]
      },
      division2: {
        name: "NorthWest", 
        teams: [
          { rank: 1, name: "Thunder Bolts", divisionRecord: "5-0", conferenceRecord: "7-2", overallRecord: "9-2", pointsFor: 1298, icon: "photo-1535268647677-300dbf3d78d1" },
          { rank: 2, name: "Pigskin Pro", divisionRecord: "2-3", conferenceRecord: "4-5", overallRecord: "5-6", pointsFor: 1156, icon: "photo-1452960962994-acf4fd70b632" },
          { rank: 3, name: "Touchdown Titans", divisionRecord: "1-4", conferenceRecord: "3-6", overallRecord: "4-7", pointsFor: 1089, icon: "photo-1582562124811-c09040d0a901" }
        ]
      }
    },
    conference2: {
      name: "South",
      division1: {
        name: "SouthEast",
        teams: [
          { rank: 1, name: "Blitz Brigade", divisionRecord: "4-1", conferenceRecord: "6-3", overallRecord: "8-3", pointsFor: 1223, icon: "photo-1618160702438-9b02ab6515c9" },
          { rank: 2, name: "Field Generals", divisionRecord: "3-2", conferenceRecord: "5-4", overallRecord: "6-5", pointsFor: 1178, icon: "photo-1466721591366-2d5fba72006d" },
          { rank: 3, name: "Pocket Passers", divisionRecord: "2-3", conferenceRecord: "3-6", overallRecord: "4-7", pointsFor: 1067, icon: "photo-1535268647677-300dbf3d78d1" }
        ]
      },
      division2: {
        name: "SouthWest",
        teams: [
          { rank: 1, name: "Red Zone Raiders", divisionRecord: "4-1", conferenceRecord: "7-2", overallRecord: "9-2", pointsFor: 1334, icon: "photo-1452960962994-acf4fd70b632" },
          { rank: 2, name: "Fourth & Goal", divisionRecord: "3-2", conferenceRecord: "6-3", overallRecord: "7-4", pointsFor: 1201, icon: "photo-1582562124811-c09040d0a901" },
          { rank: 3, name: "Hail Mary Heroes", divisionRecord: "0-5", conferenceRecord: "1-8", overallRecord: "2-9", pointsFor: 987, icon: "photo-1618160702438-9b02ab6515c9" }
        ]
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-foreground">
      <div className="container mx-auto px-4 py-8">
        {/* Main Title with Pattaya font and increased size */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="font-pattaya text-6xl sm:text-7xl lg:text-8xl font-bold mb-2 bg-gradient-title bg-clip-text text-transparent">
            {names["mainTitle"]}
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 bg-gradient-subtitle bg-clip-text text-transparent">
            {names["subTitle"]} - Placeholders will be updated
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Conference Standings Grid with Visual Divider */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
          {/* Visual Divider - Vertical on desktop, horizontal on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent transform -translate-x-1/2"></div>
          
          {/* North Conference */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl sm:text-4xl font-bold text-center mb-6 bg-gradient-conference bg-clip-text text-transparent">
              {sampleData.conference1.name}
            </h3>
            <div className="space-y-8">
              <DivisionTable 
                divisionName={sampleData.conference1.division1.name}
                teams={sampleData.conference1.division1.teams}
                theme={divisionThemes["NorthEast"]}
              />
              <DivisionTable 
                divisionName={sampleData.conference1.division2.name}
                teams={sampleData.conference1.division2.teams}
                theme={divisionThemes["NorthWest"]}
              />
            </div>
          </div>

          {/* Mobile Horizontal Divider */}
          <div className="lg:hidden w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-4"></div>

          {/* South Conference */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl sm:text-4xl font-bold text-center mb-6 bg-gradient-conference bg-clip-text text-transparent">
              {sampleData.conference2.name}
            </h3>
            <div className="space-y-8">
              <DivisionTable 
                divisionName={sampleData.conference2.division1.name}
                teams={sampleData.conference2.division1.teams}
                theme={divisionThemes["SouthEast"]}
              />
              <DivisionTable 
                divisionName={sampleData.conference2.division2.name}
                teams={sampleData.conference2.division2.teams}
                theme={divisionThemes["SouthWest"]}
              />
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            Standings are based on divisional records • Updated weekly
          </p>
        </div>
      </div>
    </div>
  );
};

export default FantasyStandings;
