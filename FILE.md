## List Of File Utility

| Utility | Func Name |
| :-------| :-------- |
| check type file | fileTypeCheck  |
| get file size in megabyte | fileMegabyte |
| file reader | fileReader |
| get file from text | fileFromText |
| check file is base 64 | fileIsBase64 |
| remove base 64 from file | fileRemoveBase64 |

### File Type Check

```javascript
// file.js
import { fileTypeCheck } from "@hfrada/futils";

const isValid = fileTypeCheck(file, checker); // true/false
```
Type of `file` is a File. Type of `checker` is a Array with value in index 0 is type file in MIME types and index 1 is optional allowable format in string. Result will be a boolean.

| Param | Type | Required | Default |
| :-----| :--- | :------- | :------ |
| `file` | `File` \| `number` \| `Date` | true | undefined  |
| `checker` | `[type: string, accept?: string]` | true | undefined  |

### File Megabyte

```javascript
// file.js
import { fileMegabyte } from "@hfrada/futils";

const megabyte = fileMegabyte(file); // 1
```
Type of `file` is a File. Result will be a number/float.

### File Reader

```javascript
// file.js
import { fileReader } from "@hfrada/futils";

fileReader(file).then((reader) => {
    reader // string
});
```
Type of `file` is a Blob. Result will be a base64 file in string.

### File From Text

```javascript
// file.js
import { fileFromText } from "@hfrada/futils";

fileFromText(fileText).then((file) => {
    file // File
});
```
Type of `fileText` is a base64 file in string. Result will be a File.

### File Is Base64

```javascript
// file.js
import { fileIsBase64 } from "@hfrada/futils";

const isBase64 = fileIsBase64(fileText); // true/false
```
Type of `fileText` is a base64 file in string. Result will be a boolean.

### File Remove Base64

```javascript
// file.js
import { fileRemoveBase64 } from "@hfrada/futils";

const fileWithoutBase64 = fileRemoveBase64(fileText); // string
```
Type of `fileText` is a base64 file in string. Result will be a string, but remove base64 encoding from original.