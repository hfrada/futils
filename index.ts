import dateParser, {
    dateFromNow,
    dateZero,
    defFormat as defDateFormat,
} from "./utils/dateParser";
import debounce from "./utils/debounce";
import {
    fileTypeCheck,
    fileReader,
    fileFromText,
    fileIsBase64,
    fileMegabyte,
    fileRemoveBase64,
} from "./utils/file";
import sleep from "./utils/sleep";

export {
    // date parser
    dateParser,
    dateZero,
    defDateFormat,
    dateFromNow,

    // debounce
    debounce,

    //file
    fileTypeCheck,
    fileMegabyte,
    fileReader,
    fileFromText,
    fileIsBase64,
    fileRemoveBase64,

    // sleep
    sleep,
};