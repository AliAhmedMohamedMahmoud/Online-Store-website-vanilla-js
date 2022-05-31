//////////////inhritance
//////user.prototype=person.prototype



function person (name , age){
    this.name=name;
    this.age=age;
    person.prototype.display;

}
var r1=new person();

function user (name,age, password)
{
        this.nsme=name;
        this.age=age;
        this.password=password;
}
var r2=new  user();



class person{

    constructor(_fname,_lname){
        this.fname=_fname|| "mona"
        this.lname=_lname|| "ahmed"
    }

    display()
    {
        return this.fname+ " "+ this.lname;
    }
}
var p1=new person(mona,ahmed);

var p2=new person();
console.log(p1);
console.log(p2);
p1.name="new person";

console.log(p1.display());

///////////////////////private
class person{
    #fname;
    #lname;

    constructor(_fname,_lname){
        this.#fname=_fname|| "mona"
        this.#lname=_lname|| "ahmed"
    }

    display()
    {
        return this.fname+ " "+ this.lname;
    }
    get getfname()
    {
        return this.#fname;
    }
    set setfname (val)
    {
        this.#fname=val;
    }

}

var p1=new person(mona,ahmed);

var p2=new person();
console.log(p1);
console.log(p2);
p1.name="new person";

console.log(p1.display());

p1.#fname;///////////////////error get seter

p1.setfname="new person";//////////////////o-p  new person  
console.log(p1.getfname);geter;

/////////////////////////////////

class person 
{
    constructor(_fname,_lname)
    {
        this.fname=_fname;
        this.lname=_lname;
    }
    display()
    {
        return this.fname+ " "+ this.lname;
    }


}

/////////////////copy constructor

class user  extends person{
    constructor(_fname,_lname,_age)
    {
        super(_fname,_lname);/////////////////inhertance
        this.age=_age;
    }
    display()
    {
        return this.fname+ " "+ this.lname+" "+this.age;
    }
    
}


var ul=new user("a","b",25);
console.log(ul.display());







