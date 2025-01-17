const agents = [
    { name: "Agent A", description: "Description of Agent A" },
    { name: "Agent B", description: "Description of Agent B" },
    { name: "Agent C", description: "Description of Agent C" },
];

function displayAgents() {
    const agentList = document.getElementById('agent-list');
    agents.forEach(agent => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${agent.name}</strong>: ${agent.description}`;
        agentList.appendChild(li);
    });
}

displayAgents(); 