
//alert("Bienvenidos");
//swal("Bienvenidos");

function updateInput(newvalue, clear = false) {
    var div = document.getElementById("data");

    div.value = clear ? newvalue : `${div.value}${newvalue}`;

    /*if (clear){
        div.value = newvalue;
    }else{
        div.value = `${div.value}${newvalue}`

        // div.value + newvalue
    }*/ 
}

    function operador(data) {
        updateInput(` ${data.value} `);
    }

    function printnumber(data){
        updateInput(data.value);
    }

    function Clearinput() {
        updateInput('', true); 
    }

    function printoperation(){
        var data = document.getElementById('data').value;
        var array = validateoperator(data.split(' '));
        updateInput(array,true);
        
    }

    function validateoperator(arraydata){
        var resultado; 
        var numero1,numero2;
        
        numero1 = Number(arraydata[0]);
        numero2 = Number(arraydata[2]);

        switch (arraydata[1]){
            case '+':
                resultado = numero1 + numero2;
                break;
            case '-':
                resultado = numero1 - numero2;
                break;
            case '*':
            resultado = numero1 * numero2;
            break;
            case '/':
            resultado = numero1 / numero2;                
            break;
        }

        return resultado;   
    }