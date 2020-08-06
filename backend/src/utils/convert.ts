export default function convertHourToMin(time: string) {
    var hour = Number(time.split(":")[0]);
    var min =  Number(time.split(":")[1]);
    
    hour = hour * 60;

    return hour + min;
}