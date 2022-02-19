var show = document.getElementById('show');

display = (input)=>{
    show.value += input;

    if (input === 'C') {
        show.value = "";
        return false;
    }
}

calculate = ()=>{
    let string = show.value;
    if (string != "") {
        try {
            string = eval(string);
            show.value = string;
        } catch (error) {
            show.value = "Syntax Error";
        }
    }
  }