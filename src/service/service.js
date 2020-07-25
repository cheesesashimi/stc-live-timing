import {Time} from './time';
const axios = require('axios');


export const getTiming = async (url) => {
    let res = await axios.get(url);

    let parser = new DOMParser();
    let doc = parser.parseFromString(res.data.contents, "text/html");
    let data = {};
    let currentClass = "";
    doc.querySelectorAll("body > a > table:nth-child(4) > tbody > tr").forEach(tr=> {
        if (tr.querySelector("th")){
            currentClass = tr.querySelector("a").name;
            data[currentClass] = []
        } else {
            let clazz = tr.querySelector("td:nth-child(2)").innerText;
            let number = tr.querySelector("td:nth-child(3)").innerText;
            let name = tr.querySelector("td:nth-child(4)").innerText;
            let times = Array.prototype.slice.call(tr.querySelectorAll("td:nth-child(n+7)"));
            times = times.slice(0,times.length-2);

            let actualTimes = [];
            times.forEach(timeHtml => {
                let time = timeHtml.innerText.split("+").map(s=>s.trim());
                if (time.length === 1){
                    if (time[0] === ""){
                        return;
                    }
                    actualTimes.push(parseFloat(time,10));
                } else if (time.length === 2) {
                    if (time[1] === "dnf" || time[1] === "dns" ){
                        actualTimes.push(999);
                        return;
                    }
                    let cones = parseFloat(time[1],10);
                    actualTimes.push(parseFloat(time,10) + cones * 2);
                    return;
                }
            });
            let time = actualTimes.sort((a,b)=>a-b)[0];
            data[currentClass].push(new Time(clazz,name,time, number));
        }
    });

    
    return data;
}