export class SortObj{
    states=[];
    objectsort(states,keyid){// keyid strats from 0 to obj.length-1
        // console.log('inside objsort');
        // console.log(states);
        var keys = Object.keys(states[0])
        return states.sort((a, b)=>{ // sort object by State Name
            var nameA=a[keys[keyid]].toLowerCase(), nameB=b[keys[keyid]].toLowerCase()
            if (nameA < nameB) //sort string ascending
                return -1 
            if (nameA > nameB)
                return 1
            return 0 //default return value (no sorting)
        });
    }
}