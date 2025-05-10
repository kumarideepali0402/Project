let problems = [
    {title: "Two Sum",difficulty: "Medium", topics: ["Arrays", "Two-pointers"]},
    {title: "Dungeon Queen",difficulty: "Hard", topics: ["DP", "Matrix"]}
 
]

const problemContainer = document.getElementById("problem-set");

problems.forEach((problem)=>{
    const card = document.createElement("div");
    card.classList.add('problem-card');
    // Add content to card
    card.innerHTML=`
    <h3>${problem.title}</h3>
    <p><strong>Difficulty:</strong> ${problem.difficulty}</p>
    <p><strong>Topics:</strong> ${problem.topics.join(",")}</p>`;

    problemContainer.append(card);
})