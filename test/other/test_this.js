class Parent {

    constructor(){
        this.type = "parent"
    }

    static test(){
        console.log("wenyui test")
    }
    print(){
        console.log("Parent",this);
    }
}

class Children extends Parent{
    testPrint(){
        this.print();
        Parent.test();
    }
}

new Children().testPrint();

