const stringList = require('./stringList.json')

class Strings {
    constructor() {
        this.stringList = stringList;
    }
}

const strings = new Strings().stringList;
export default strings;