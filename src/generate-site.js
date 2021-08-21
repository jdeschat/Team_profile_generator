const generateTeam = (team) => {
    // console.log(team);
    // return "<p>hello</p>";
    // return ${promptManager(team)}
}
// export function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">


<body>
     ${generateTeam(team)}
</body>
</html>
    `;
}
