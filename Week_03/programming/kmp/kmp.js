function kmp(source, pattern) {
    if (pattern === undefined || pattern === null) {
        return false;
    }
    // calculate table 
    // 计算跳转表格
    let table = new Array(pattern.length).fill(0);
    
    {
        // 检查是否自重复
        let i = 0;
        let j = 1;

        while (j < pattern.length) {
            if (pattern[i] == pattern[j]) {
                i++;
                j++;
                table[j] = i;
            }
            else {
                if (i > 0) {
                    i = table[i];
                }
                else {
                    j++;
                }
            }
        }
    }

    {
        let i = 0;
        let j = 0;
        while (i < source.length) {
            if (j === pattern.length) {
                return true;
            }
            if (pattern[j] === source[i]) {
                i++;
                j++;

            }
            else {
                if (j > 0) {
                    j = table[j];
                }
                else {
                    i++;
                }
            }
        }
        return false;
    }

    // abcdabce
    // abababc
    // aabaaac

    // 匹配
}

console.log(kmp("Hello", "ll"));