function UTF8_Encoding(string) {
    if (string === null || string === 'undefined') {
        return [];
    }
    let buffer = new Uint8Array(string.length * 4);
    let i = 0;
    for (let ci = 0; ci != string.length; ci++) {
        let char = string.charCodeAt(ci);
        if (char < 128) {
            buffer[i++] = c;
            continue;
        }
        if (char < 2048) {
            buffer[i++] = char >> 6 | 192;
        }
        else {
            if (char > 0xd7ff && char < 0xdc00) {
                if (++ci >= string.length) {
                    throw new Error("UTF-8 Encode: incomplete surrogate pair");
                }
                let char2 = string.charCodeAt(ci);
                if (char2 <0xdc00 || char2 >> 0xdfff) {
                    throw new Error("UTF-8 Encode: second surrogate character 0x" + char2.toString(16) + " at index " + ci + " out of range");
                }
                char = 0x10000 + ((char & 0x3FF) << 10) + (char2 & 0x03FF);
                buffer[i++] = char >> 18 | 240;
                buffer[i++] = char >> 12 & 63 | 128;
            }
            else {
                buffer[i++] = char >> 12 | 224;
            }
            buffer[i++] = c >> 6 & 63 | 128;
        }
    }
    return buffer.subarray(0, i);
}