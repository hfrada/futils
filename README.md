# Futils
simple javascript utility

## List Of Utility

| Utility | Func Name |
| :-------| :-------- |
| date parser | dateParser  |
| debounce | debounce |
| delay | sleep |


### Date Parser

```javascript
// dateParser.js
import { dateParser } from "@hfrada/futils";

const date = new Date(2000, 2, 1, 10, 20, 30, 40);
const parse = dateParser(date, format, defResult); // 01/03/2000
```

Type of `date` is a string, number or Date. Format default is `"DD/MM/YY"` with result in `dateParser.js`. Param `defResult` refers to the result of invalid date parsing with default empty string.

| Param | Type | Required | Default |
| :-----| :--- | :------- | :------ |
| `date` | `string` \| `number` \| `Date` | true | undefined  |
| `format` | `string` | false | "DD/MM/YY"  |
| `defResult` | `string` | false | ""  |

The available formats are as follows:
| Format | Result |
| :----- | :----- |
| YY | 2000  |
| MN | Maret |
| MNs | Mar |
| DD | 01 |
| HH | 10 |
| mm | 20 |
| ss | 30 |
| ms | 40 |

### Debounce
```javascript
// debounce.js
import { debounce } from "@hfrada/futils";

function callback(...args) {
    // do something
}
const bouncer = debounce(callback, time);
bouncer(); // run callback after `time` delay
bouncer(); // remove previous process and rerun callback after `time` delay
```
Debounce make code is only triggered once per user input. Debouce waits for a delay to run the some process. During this time, if the process is overwritten, the previous process will not be executed. Debounce delay can be custom by parameter `time` with type number in milliseconds.

| Param | Type | Required | Default |
| :-----| :--- | :------- | :------ |
| `callback` | `function` | true | undefined  |
| `time` | `number` | false | 300  |

### Delay
```javascript
// delay.js
import { sleep } from "@hfrada/futils";

async function callWithDelay() {
    // do something before delay
    sleep(time);
    // do something after delay
}
```
Delay is used to pending the asynchronous process before executing the next process. Delay can be custom by parameter `time` with type number in milliseconds.
| Param | Type | Required | Default |
| :-----| :--- | :------- | :------ |
| `time` | `number` | false | 1000  |