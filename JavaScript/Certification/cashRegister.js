/* Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second 
argument (cash), and cash-in-drawer (cid) as the third argument. "cid" is a 2D array listing available currency.
The checkCashRegister() function should always return an object with a status key and a change key.
Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of 
the change key.

Currency Unit	                Amount
    Penny	                $0.01 (PENNY)
    Nickel	                $0.05 (NICKEL)
    Dime	                $0.1 (DIME)
    Quarter	                $0.25 (QUARTER)
    Dollar	                $1 (ONE)
    Five Dollars	        $5 (FIVE)
    Ten Dollars	            $10 (TEN)
    Twenty Dollars	        $20 (TWENTY)
    One-hundred Dollars	    $100 (ONE HUNDRED)

See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
] */

function checkCashRegister(price, cash, cid) {

    let Change = {

        status: "",
        change: []
    };

    const Values = {

        penny: 0.01,
        nickel:	0.05,
        dime: 0.1,
        quarter: 0.25,
        dollar: 1,
        five: 5,
        ten: 10,
        twenty:	20,
        hundred: 100 
    }

    const totalPayback = cash - price;
    let payback = totalPayback;
// hay que hacer una copia profunda de "cid" porque sino al modificar los elementos dentro de "Cash" tambien lo hacías los de "cid"
    const Cash = JSON.parse(JSON.stringify(cid)); 
    const totalCash = Cash.reduce((total, value) => total + value[1], 0).toFixed(2);
    let back = [];

    // console.log(`Devolucion: ${payback}`);
    // console.log(cid);
    // console.log(`Fondo: ${totalCash}`);
    

    for (let i = Cash.length -1; i >= 0; i--) {
        
        // console.log((Cash[i][1]));
        
        let valArr = Object.values(Values);
        // console.log(`${Cash[i][0]}: ${valArr[i]}`);     

            if (valArr[i] <= payback && Cash[i][1] > 0 /*&& Cash[i][1] > payback*/) {

                // console.log(payback%valArr[i]);
                let countReturn = Math.min(payback - (payback % valArr[i]), Cash[i][1]);
                // console.log(countReturn);
                back.push([Cash[i][0], countReturn]);
                Cash[i][1] -= countReturn;// Cash[i][1] -= valArr[i];
                // console.log(`Cantidad moneda: ${Cash[i][1]}`);
                payback -= countReturn;// payback -= valArr[i];
                payback = payback.toFixed(2);
                // console.log(`Resto: ${payback}`);

                // if (Cash[i][1] >= 0) {
                                        
                //     i++;
                    
                // }                
            }  
    }    

    if (totalCash > totalPayback && payback == 0) {

        // console.log("Hay dinero");
        Change.status = "OPEN";
        Change.change = back;
        
    } else if (totalCash == totalPayback) {

            // console.log("Ta justo");
            Change.status = "CLOSED";
            Change.change = cid;

    } else { // totalCash < totalPayback || payback > 0

            // console.log("No hay dinero");
            Change.status = "INSUFFICIENT_FUNDS";
        
    }

    return Change;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55],
                                            ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], 
                                            ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], 
                                            ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], 
                                            ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], 
                                            ["TWENTY", 0], ["ONE HUNDRED", 0]]));



