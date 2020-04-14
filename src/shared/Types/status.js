export const Status = function Status(orderStatus){
    this.open = orderStatus.open;
    this.process = orderStatus.process;
    this.closed = orderStatus.closed;
    this.notInterested = orderStatus.notInterested;
}

export const createStatusByKey = (key) => {
    let res;
    if(key.toLowerCase() === 'open'){
        res = new Status({open: true, process: false, closed: false, notInterested: false});
    }else if(key.toLowerCase() === 'process'){
        res = new Status({open: false, process: true, closed: false, notInterested: false});
    }else if(key.toLowerCase() == 'closed'){
        res = new Status({open:false, process: false, closed: true, notInterested: false});
    }else{
        res = new Status({open:false, process: false, closed: false, notInterested: true});
    }
    return res;
};
