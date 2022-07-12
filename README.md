# Futils
javascript utility

## List Of Utility

| Utility | Func Name |
| :-------| :-------- |
| date parser | dateParser  |

### Date Parser

```javascript
// example.js
import { dateParser } from "@hfrada/futils";

const date = new Date(2000, 2, 1, 10, 20, 30, 40);
const parse = dateParser(date, format, defResult); // 01/03/2000
```

Type of `date` is a string, number or Date. Format default is `DD/MM/YY` with result in `example.js`. Param `defResult` refers to the result of invalid date parsing with default empty string.

| Param | Type | Required | Default |
| :-----| :--- | :------- | :------ |
| `date` | `string` \| `number` \| `Date` | true | None  |
| `format` | `string` | false | `DD/MM/YY`  |
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
