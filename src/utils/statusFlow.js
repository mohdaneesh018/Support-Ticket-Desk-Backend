const validTransitions = {
    Open: ["In Progress"],
    "In Progress": ["Resolved"],
    Resolved: ["Closed"],
    Closed: [],
};

export const isValidStatusTransition = (current, next) => {
    return validTransitions[current]?.includes(next);
};