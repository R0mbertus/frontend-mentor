var tipValues = {
    bill: 0,
    tipPercent: 0.15,
    people: 1
}

document.addEventListener('DOMContentLoaded', (event) => {
    tipCalculator();
    
    const calculator = document.querySelector('.calc');
    const tipButtons = calculator.querySelectorAll('button');
    for (const button of tipButtons) {
        button.addEventListener('click', (event) => {
            for (const button of tipButtons) {
                button.classList.remove('selected');
            }
            button.classList.add('selected')
            var tipPercent = button.getAttribute("id");
            tipValues.tipPercent = tipPercent/100;
            tipCalculator();
        });
    }
    const reset = document.querySelector('#reset');
    reset.addEventListener('click', (event) => {
        tipValues.bill = 0;
        tipPercent = 0.15;
        people = 1;
        
        var fields = document.getElementsByTagName('input'),
        length = fields.length;
        while (length--) {
            fields[length].value = '';
        }
        for (const button of tipButtons) {
            button.classList.remove('selected');
        }
        document.getElementById('15').classList.add('selected');
        tipCalculator();
    });

    const inputs = document.querySelectorAll('input');
    for (const input of inputs) {
        input.addEventListener('keyup', (event) => {
            var value = input.value
            if (!(value.length == 0 || value == 0)) {
                switch (input.getAttribute("id")) {
                    case "bill":
                        for (const button of tipButtons) {
                            button.classList.remove('selected');
                        }
                        input.classList.remove('not-zero');
                        tipValues.bill = value / 1;
                        tipCalculator();
                        break;
                    case "custom-tip":
                        input.classList.remove('not-zero');
                        tipValues.tipPercent = value / 100;
                        tipCalculator();
                        break;
                    case "people":
                        input.classList.remove('not-zero');
                        tipValues.people = value / 1;
                        tipCalculator();
                        break;
                }
            }
            else if (value == 0 && value.length != 0) {
                input.classList.add('not-zero')
            }
            else {
                input.classList.remove('not-zero');
            }
        });
    }
});

function tipCalculator() {
    var tipAmount = (tipValues.bill / tipValues.people) * tipValues.tipPercent;
    var totalAmount = (tipValues.bill / tipValues.people) + tipAmount;
    tipAmount = tipAmount.toFixed(2);
    totalAmount = totalAmount.toFixed(2);
    document.getElementsByClassName("tip")[0].innerHTML = `&dollar;${tipAmount}`;
    document.getElementsByClassName("total")[0].innerHTML = `&dollar;${totalAmount}`;
}