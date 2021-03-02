const Team = require("../../models/team");

class MockTeamDAO {
    get(id) {
        if(id != 5) throw Error("Team not found");
        return new Team(5, ["Caio Nunes", "Pedro Henrique", "Ulisses Lopes"]);
    }
}

module.exports = MockTeamDAO;
