class EventEmitter {
    constructor() {
        this.event = {};
    }

    on(act, fn) {
        this.event[act].push(fn)
    };
    emit(act, args) {
        if(this.event[act]) {
            this.event[act].forEach(item => {
                item.apply(this, args)
            })
        }
    }
    remove(act, listener) {
        if(this.event[act]) {
            this.event[act] = this.event[act].filter(i => i !== listener);
        }
    }
}
