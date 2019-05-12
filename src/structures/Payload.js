
class Payload {

    /**
     * A payload for a raw event.
     * @param {String} name the name of the payload.
     * @param {Object} data the data for the payload to handle.
     * @param {Boolean} writable if the payload is writable.
     * @param {Boolean} renamable if the payload is renamable.
     */
    constructor(name, data, writable = true, renamable = false) {
        this.data = data;
        this.name = name;
        if (!renamable) Object.freeze(this.name);
        if (!writable) Object.freeze(data);
    }

    /**
     * Get the payload's data.
     * @returns {Object}
     */
    get data() {
        return this.data;
    }

    /**
     * Embed data into the payload.
     * @param {Object} data the data to embed into the payload.
     */
    set data(data) {
        return new Promise((resolve, reject) => {
            if (Object.isFrozen(this.data)) reject(false);
            this.data = data;
            resolve(true);
        });
    }

    /**
     * Get the payload's name.
     * @returns {String}
     */
    get name() {
        return this.name;
    }

    /**
     * Set the payload's name.
     * @param {String} name the new name for the payload.
     */
    set name(name) {
        return new Promise((resolve, reject) => {
            if (Object.isFrozen(this.name)) reject(false);
            this.name = name;
            resolve(true);
        });
    }
    
}

module.exports = Payload;