
class Widget {

    constructor() {
        this._x = 0;
    };

    
    get x(){
        console.log("进来了")
        return this._x;
    }

    set x(value){
        console.log("进来了  22")
        this._x = value;
    }
}

const widget = new Widget();
console.log(widget.x)
widget.x = 100;
console.log(widget.x)
