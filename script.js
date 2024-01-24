function Sort() {
    const InputAngka = document.getElementById('angkaInput').value;
    const arrayNum = InputAngka.split(',').map(Number);

    const ascOr = document.getElementById('asc').checked;

    if(ascOr){
        arrayNum.sort((a, b) => a - b)
    } else {
        arrayNum.sort((a, b) => b - a);
    }

    const Result = document.getElementById('Result');
    Result.innerHTML = "<tr><th> Angka </th></tr>";

    arrayNum.forEach(element => {
       const row = Result.insertRow(-1);
       const cell = row.insertCell(0);
       cell.textContent = element;
    });

    document.getElementById('ascOrder').disabled = true;
    document.getElementById('descOrder').disabled = true;
}