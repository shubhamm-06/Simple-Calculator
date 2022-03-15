let screen = document.getElementById('screen');
let output = document.getElementById('ans-output');
let td = Array.from(document.getElementsByClassName('td'));
var a = '        ';

td.map(td => {
    td.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                screen.innerText = '';
                output.innerText = '';
                break;
            case '⌫':
                if (screen.innerText) {
                screen.innerText = screen.innerText.slice(0, -1);
            }
            break;
            case 'X':
                screen.innerText = screen.innerText + '*';
                break;
            case '÷':
                screen.innerText = screen.innerText +'/';
                break;
                
                case '❤':
                    screen.innerText = 'Thank you for using the calculator';
                    break;
            case '=':
                
                let prvtxt = screen.innerText ;
                try{ screen.innerText = eval(screen.innerText) ;
                    let preans = document.getElementById('ans-output').innerText= '';
                    let ans =  prvtxt + a + '=' + a +  screen.innerText ;
                    document.getElementById('p-input').innerHTML = ans;
            } catch{
                screen.innerText = 'Enter valid equation';
            }
                break;
                default:
                    screen.innerText += e.target.innerText;
                    document.getElementById('ans-output').innerText= eval(screen.innerText);

}

})

})