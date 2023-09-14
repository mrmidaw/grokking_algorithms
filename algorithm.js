//* node algorithm.ts
var personIsSeller = function (name) {
    return name.endsWith("m");
};
var graph = {};
graph.you = ["alice", "bob", "claire"];
graph.bob = ["anuj", "peggy"];
graph.alice = ["peggy"];
graph.claire = ["thom", "jonny"];
graph.anuj = [];
graph.peggy = [];
graph.thom = [];
graph.jonny = [];
var search = function (name) {
    var searchQueue = graph[name];
    //* С помощью этого массива вы можете отслеживать, каких людей вы искали раньше.
    var searched = [];
    console.log(searchQueue);
    while (searchQueue.length > 0) {
        var person = searchQueue.shift();
        //* Ищите этого человека, только если вы еще не искали его
        if (!searched.includes(person)) {
            if (personIsSeller(person)) {
                console.log("".concat(person, " is a mango seller!"));
                return true;
            }
            else {
                searchQueue = searchQueue.concat(graph[person]);
                // Marks this person as searched
                searched.push(person);
            }
        }
    }
    return false;
};
search("you");
// ************************************************************
