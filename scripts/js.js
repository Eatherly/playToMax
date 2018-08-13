window.onload = function () {
    let fieldArr = document.getElementsByTagName("td");
    let table = document.getElementsByTagName("table")[0];
    for (i = 0; i <= fieldArr.length - 1; i++) {
        fieldArr[i].addEventListener('click', function () {
            let vertX = table.rows.length;
            let horzY = table.rows[0].cells.length;
            let x = this.parentElement.rowIndex;
            let y = this.cellIndex;
            let lear = this.innerHTML;


            table.rows[x].cells[y].setAttribute("class", "checked");
            table.rows[x].cells[y].innerHTML = "";

            if (1 <= x) {
                setTimeout(function () {
                    if ((table.rows[x - 1].cells[y].innerHTML == lear) && (!(table.rows[x - 1].cells[y].classList.contains('checked')))) {
                        table.rows[x - 1].cells[y].click();
                    }
                }, 50)
            }
            if (x <= vertX - 2) {
                setTimeout(function () {
                    if ((table.rows[x + 1].cells[y].innerHTML == lear) && (!(table.rows[x + 1].cells[y].classList.contains('checked')))) {
                        table.rows[x + 1].cells[y].click();
                    }
                }, 50)
            }
            if (1 <= y) {
                setTimeout(function () {
                    if ((table.rows[x].cells[y - 1].innerHTML == lear) && (!(table.rows[x].cells[y - 1].classList.contains('checked')))) {
                        table.rows[x].cells[y - 1].click();
                    }
                }, 50)
            }
            if (y <= horzY - 2) {
                setTimeout(function () {
                    if ((table.rows[x].cells[y + 1].innerHTML == lear) && (!(table.rows[x].cells[y + 1].classList.contains('checked')))) {
                        table.rows[x].cells[y + 1].click()

                    }
                }, 50)
            }

        }, false);


    }




    document.getElementById("reset").addEventListener('click', fieldFill);



    function fieldFill() {

        function randomInteger(min, max) {
            var rand = min - 0.5 + Math.random() * (max - min + 1)
            rand = Math.round(rand);
            return rand;
        }

        let newFieldArr = document.getElementsByTagName("td");
        for (i = 0; i <= newFieldArr.length - 1; i++) {
            newFieldArr[i].classList.remove("checked");


            switch (randomInteger(1, 4)) {
                case 1:
                    newFieldArr[i].innerHTML = "&spades;";
                    break;
                case 2:
                    newFieldArr[i].innerHTML = "&clubs;";
                    break;
                case 3:
                    newFieldArr[i].innerHTML = "&#9825;";
                    break;
                case 4:
                    newFieldArr[i].innerHTML = "&#9826;";
                    break;
            }
        }
    }
}
