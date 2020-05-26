class JsonRocketData{
    constructor(data){
        this.rocket0 = [];
        this.rocket1 = [];
        this.rocket2 = [];
        this.rocket3 = [];
        this.data = data;
    }

    extractData(){
       let rocket0 = this.rocket0.push(this.data[0]);
        this.rocket1.push(this.data[1]);
        this.rocket2.push(this.data[2]);
        this.rocket3.push(this.data[3]);
        console.log(rocket0);
        return this.rocket0, this.rocket1, this.rocket2, this.rocket3;    
    }
}