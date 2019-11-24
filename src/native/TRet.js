const TRet = {};
(function (TRet) {
    TRet[TRet["OK"] = RET_OK()] = "OK";
    TRet[TRet["OOM"] = RET_OOM()] = "OOM";
    TRet[TRet["FAIL"] = RET_FAIL()] = "FAIL";
    TRet[TRet["NOT_IMPL"] = RET_NOT_IMPL()] = "NOT_IMPL";
    TRet[TRet["QUIT"] = RET_QUIT()] = "QUIT";
    TRet[TRet["FOUND"] = RET_FOUND()] = "FOUND";
    TRet[TRet["BUSY"] = RET_BUSY()] = "BUSY";
    TRet[TRet["REMOVE"] = RET_REMOVE()] = "REMOVE";
    TRet[TRet["REPEAT"] = RET_REPEAT()] = "REPEAT";
    TRet[TRet["NOT_FOUND"] = RET_NOT_FOUND()] = "NOT_FOUND";
    TRet[TRet["DONE"] = RET_DONE()] = "DONE";
    TRet[TRet["STOP"] = RET_STOP()] = "STOP";
    TRet[TRet["SKIP"] = RET_SKIP()] = "SKIP";
    TRet[TRet["CONTINUE"] = RET_CONTINUE()] = "CONTINUE";
    TRet[TRet["OBJECT_CHANGED"] = RET_OBJECT_CHANGED()] = "OBJECT_CHANGED";
    TRet[TRet["ITEMS_CHANGED"] = RET_ITEMS_CHANGED()] = "ITEMS_CHANGED";
    TRet[TRet["BAD_PARAMS"] = RET_BAD_PARAMS()] = "BAD_PARAMS";
})(TRet);

function checkTRet(type, description){
    switch (type) {
        case TRet.OK:
            break;
        case TRet.FAIL:
            throw  "FAIL : " + description;
        default:
            console.log(type + " : " + description)
    }
}

export default TRet;
export {
    checkTRet
}
