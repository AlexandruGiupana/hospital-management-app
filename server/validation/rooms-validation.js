export const validateRoomType = (typeField) => {
    if(typeField === null) {
        return false;
    }
    if(typeField === undefined) {
        return false;
    }

    if(typeField != "OPERATIE" && typeField != "CABINET") {
        return false
    }
    return true;
}