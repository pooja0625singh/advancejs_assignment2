class QueenAttack {
    constructor( pos1 , pos2){
        this.Q1=pos1;
        this.Q2=pos2;
    }
canAttack(){
    return this.Q1.qR == this.Q2.oR || this.Q1.qC == this.Q2.oC || Math.abs(this.Q2.qR - this.Q1.oR)==Math.abs(this.Q2.qC - this.Q1.oC);
    }
}

let Queen1= {qR:2, qC:5}

let Queen2={oR:3, oC:0}

let queen = new QueenAttack(Queen1 , Queen2)

if (queen.canAttack()) {
    console.log("Yes, Queen can attack the opponent");
} else {
    console.log("No, Queen can't attack the opponent");
}
