const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval( () => {
    let day = new Date();
let hh = day.getHours() *30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;


hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`
mn.style.transform = `rotateZ(${mm}deg)`
sc.style.transform = `rotateZ(${ss}deg)`

})


function updateClock() {
    var now = new Date;
    var dname = now.getDay();
        mo = now.getMonth();
        dnum = now.getDate();
        yr = now.getFullYear();
        hou = now.getHours();
        min = now.getMinutes();
        sec = now.getSeconds();
        pe = "AM"

        if(hou == 0) {
            hou = 12;
        }if(hou > 12) {
            pe = 'PM';
        }

        var months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        var week = ['Domingo', 'Segunda', 'Terça', 'Quarta-feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado'];
        var ids = ['dayname', 'month', 'daynum', 'year', 'timerhour', 'timermin', 'timersec', 'period'];
        var values = [week[dname], months[mo], dnum, yr, hou, min, sec, pe];
        for(var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];

}

function initClock(){
    updateClock();
    window.setInterval('updateClock()', 1);
}


