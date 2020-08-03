

const calcMean = (scoreArray) => {
    let sumScore = 0;

    for (let score of scoreArray)
        sumScore += score;

    return sumScore / scoreArray.length;
}

const judgeWinner = (scoreArray) => {
    let scoreMeanArray = [];
    for (let scoreItem of scoreArray)
        scoreMeanArray.push({teamName: scoreItem.teamName, teamMeanScore: calcMean(scoreItem.teamScore)});

    return scoreMeanArray.sort((x, y) => {
        return x.teamMeanScore - y.teamMeanScore
    })
}

let johnTeamScore = [10, 20];
let mikeTeamScore = [30, 40];
let maryTeamScore = [50, 60];
let keiTeamScore =  [60, 70];

let scoreArray = [
    {teamName: 'JohnTeam', teamScore: johnTeamScore},
    {teamName: 'MikeTeam', teamScore: mikeTeamScore},
    {teamName: 'MaryTeam', teamScore: maryTeamScore},
    {teamName: 'keiTeam',  teamScore: keiTeamScore}
]

console.log(judgeWinner(scoreArray))

