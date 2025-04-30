function createIdGenerator() {
    let currentId = 0;

    return {
        generateId: function() {
            currentId += 1;
            return currentId;
        },
        reset: function() {
            currentId = 5;
        }
    };
}

const idGenerator = createIdGenerator();
export default idGenerator;
