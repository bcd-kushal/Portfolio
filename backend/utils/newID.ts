import { v4 } from "uuid";
import ERROR_CODES from "./errors";

function newID(pre:string){

    if(pre.length<=0 || pre===undefined || pre==="")
        return ERROR_CODES.SYNTAX_ERROR;
    
    pre = (pre.length == 2)? pre : ( (pre.length < 2)? pre+"x" : pre.substring(0,2) );
    
    // Get individual components
    let day = new Date().getDate().toString().padStart(2, '0');
    let month = (new Date().getMonth() + 1).toString().padStart(2, '0');
    let year = new Date().getFullYear().toString();
    let hours = new Date().getHours().toString().padStart(2, '0');
    let minutes = new Date().getMinutes().toString().padStart(2, '0');
    let seconds = new Date().getSeconds().toString().padStart(2, '0');
    let milliseconds = new Date().getMilliseconds().toString().padStart(3, '0');

    const uid = v4();

    // day = 10,12
    // month = 16,18
    // year = 22,24
    // hours = 28,30
    // mins = 34,36
    // secs = 40,42
    // millis = 46,...

    const time = `${day}-${month}-${year},${hours}:${minutes}:${seconds}:${milliseconds}`;
    const id = pre + uid.substring(0,8) + day + uid.substring(9,13) + month + uid.substring(14,18) + year + uid.substring(19,23) + hours + uid.substring(24,28) + minutes + uid.substring(28,32) + seconds + uid.substring(32,36) + milliseconds;
       //      01    23456789             01    2345                  67      8901                   23     4567                   89      0123                   45        6789                   01        2345                   678
       //      0                          1                                     2                                                          3                                                       4                                
    
    
    return { id: id, time: time };
    
} 

export default newID;