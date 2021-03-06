export class Time{
    parseTime(time){
        time = parseFloat(time,10);
        if (isNaN(time)){
            return 999;
        } else {
            return time;
        }
    }
    constructor(clazz, name, time, number, rawTimes, car, fastestIndex){
        this.clazz = clazz;
        this.name = name;
        this.time = this.parseTime(time);
        this.number = number;
        this.rawTimes = rawTimes;
        this.car = car;
        this.fastestIndex = fastestIndex;
    }
}