import DivisionTable from "./DivisionTable";

/* CHANGE TO REFLECT UPDATED STANDINGS BY WEEK */
import {WeekTwoStandings as CurrentStandings} from "../standings/WeekTwo.tsx";

const FantasyStandings = () => {

    const standings = CurrentStandings;

    const names = {
        "mainTitle": "Fourth and Forever",
        "subTitle": "Week 3 standings"
    }

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

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-foreground">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-8 animate-fade-in">
                    <h1 className="font-pattaya text-6xl sm:text-7xl lg:text-8xl font-bold mb-2 bg-gradient-title bg-clip-text text-transparent">
                        {names["mainTitle"]}
                    </h1>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 bg-gradient-subtitle bg-clip-text text-transparent">
                        {names["subTitle"]}
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
                    <div
                        className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent transform -translate-x-1/2"></div>

                    <div className="space-y-6 animate-fade-in">
                        <h3 className="text-3xl sm:text-4xl font-bold text-center mb-6 bg-gradient-conference bg-clip-text text-transparent">
                            {standings.conference1.name}
                        </h3>
                        <div className="space-y-8">
                            <DivisionTable
                                divisionName={standings.conference1.division1.name}
                                teams={standings.conference1.division1.teams}
                                theme={divisionThemes["NorthEast"]}
                            />
                            <DivisionTable
                                divisionName={standings.conference1.division2.name}
                                teams={standings.conference1.division2.teams}
                                theme={divisionThemes["NorthWest"]}
                            />
                        </div>
                    </div>

                    <div
                        className="lg:hidden w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-4"></div>

                    <div className="space-y-6 animate-fade-in">
                        <h3 className="text-3xl sm:text-4xl font-bold text-center mb-6 bg-gradient-conference bg-clip-text text-transparent">
                            {standings.conference2.name}
                        </h3>
                        <div className="space-y-8">
                            <DivisionTable
                                divisionName={standings.conference2.division1.name}
                                teams={standings.conference2.division1.teams}
                                theme={divisionThemes["SouthEast"]}
                            />
                            <DivisionTable
                                divisionName={standings.conference2.division2.name}
                                teams={standings.conference2.division2.teams}
                                theme={divisionThemes["SouthWest"]}
                            />
                        </div>
                    </div>
                </div>

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
