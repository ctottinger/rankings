
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
          { rank: 1, name: "BigSwagooo713", divisionRecord: "0-0", conferenceRecord: "0-0", overallRecord: "0-0", pointsFor: 0, icon: "https://sleepercdn.com/uploads/2e7f665ae8fdd452701ddcc5affb4026.jpg" },
          { rank: 2, name: "Touchdown Syndrome", divisionRecord: "0-0", conferenceRecord: "0-0", overallRecord: "0-0", pointsFor: 0, icon: "https://sleepercdn.com/avatars/thumbs/51385ba57cd089261f6de9ce483b8716" },
          { rank: 3, name: "ctottinger", divisionRecord: "0-0", conferenceRecord: "0-0", overallRecord: "0-0", pointsFor: 0, icon: "photo-1466721591366-2d5fba72006d" }
        ]
      },
      division2: {
        name: "NorthWest", 
        teams: [
          { rank: 1, name: "BigRedAlec", divisionRecord: "0-0", conferenceRecord: "0-0", overallRecord: "0-0", pointsFor: 0, icon: "https://sleepercdn.com/avatars/thumbs/2e48853a410664afc428e1d857457988" },
          { rank: 2, name: "1st & Won", divisionRecord: "0-0", conferenceRecord: "0-0", overallRecord: "0-0", pointsFor: 0, icon: "https://sleepercdn.com/avatars/thumbs/905dcd140bd1468f9d2ec439fb7915c4" },
          { rank: 3, name: "YungChepe13", divisionRecord: "0-0", conferenceRecord: "0-0", overallRecord: "0-0", pointsFor: 0, icon: "https://sleepercdn.com/avatars/thumbs/dc3246268ec076fa6cd93686e3887757" }
        ]
      }
    },
    conference2: {
      name: "South",
      division1: {
        name: "SouthEast",
        teams: [
          { rank: 1, name: "Call me maye-be", divisionRecord: "0-0", conferenceRecord: "0-0", overallRecord: "0-0", pointsFor: 0, icon: "https://sleepercdn.com/avatars/thumbs/565600b9d8ed377ca605ac45b9d2875d" },
          { rank: 2, name: "The Bo Lievers", divisionRecord: "0-0", conferenceRecord: "0-0", overallRecord: "0-0", pointsFor: 0, icon: "https://sleepercdn.com/avatars/thumbs/8eb8f8bf999945d523f2c4033f70473e" },
          { rank: 3, name: "$uperCam & Smittys 1ceBox", divisionRecord: "0-0", conferenceRecord: "0-0", overallRecord: "0-0", pointsFor: 0, icon: "https://sleepercdn.com/uploads/323fd1cc64d33310474a6c0fec91a13b.jpg" }
        ]
      },
      division2: {
        name: "SouthWest",
        teams: [
          { rank: 1, name: "knowsball8", divisionRecord: "0-0", conferenceRecord: "0-0", overallRecord: "0-0", pointsFor: 0, icon: "https://sleepercdn.com/avatars/thumbs/7572250c2fb084c434fed0e82229e183" },
          { rank: 2, name: "JockstrapJorker", divisionRecord: "0-0", conferenceRecord: "0-0", overallRecord: "0-0", pointsFor: 0, icon: "https://sleepercdn.com/avatars/thumbs/5b4b572c2c502fc1d9a2fae954c34153" },
          { rank: 3, name: "8igDonDada", divisionRecord: "0-0", conferenceRecord: "0-0", overallRecord: "0-0", pointsFor: 0, icon: "https://sleepercdn.com/avatars/thumbs/795b9fbb3fed8225b992cb04e2dba54a" }
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
            {names["subTitle"]}
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
