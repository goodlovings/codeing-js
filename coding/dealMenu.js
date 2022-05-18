/**
 * @file 将一维的目录数据处理成层级分明的数据
 * 例如
 *  [
        { id: 1, name: 1, pid: 0 },
        { id: 2, name: 2, pid: 0 },
        { id: 3, name: 13, pid: 1 },
        { id: 4, name: 24, pid: 2 },
        { id: 5, name: 35, pid: 3 },
        { id: 6, name: 36, pid: 3 },
        { id: 7, name: 67, pid: 6 }
    ]

    pid为父节点的ID号，处理后为:
    [
        {
            id: 1, name: 1, pid: 0,
            children: [
                {
                    id: 3, name: 13, pid: 1, children: [
                        { id: 5, name: 35, pid: 3 },
                        {
                            id: 6, name: 36, pid: 3, children: [
                                { id: 7, name: 67, pid: 6 }
                            ]
                        },
                    ]
                },
            ]
        },
        {
            id: 2, name: 2, pid: 0, children: [
                { id: 4, name: 24, pid: 2 },
            ]
        }
    ]
 */

/**
 * 处理数据返回目录结构数据
 * @param {*} arr 传入未处理的数据
 * @returns 返回处理后数据
 */
function dealMenu(arr) {
    // 接收结果
    let result = []
    // 对传入数据进行遍历
    arr.forEach(item => {
        // 当pid为0，则认为是顶层目录
        if (item.pid === 0) {
            result.push({ ...item, children: [] })
        }
        // 如果pid不为0，说明是子目录，调用子目录处理函数，将子目录放到正确层级上
        else {
            dealItem(item, result)
        }
    });
    return result;
}

/**
 * 子目录处理函数
 * @param {*} item 子目录
 * @param {*} result 结果目录
 */
function dealItem(item, result) {
    // 遍历结果目录
    result.forEach(res => {
        // 当子目录的id为结果目录中某个目录的pid，即子目录
        if (res.id === item.pid) {
            // 将子目录放进该层级中
            res.children.push({ ...item, children: [] })
        }
        // 否则，继续派判断子目录是否在结果目录元素的子结构中
        else {
            if (res.children) {
                // 递归调用
                dealItem(item, res.children)
            }
            // 都不在结束回递归
            else {
                return;
            }
        }
    })
}

// 实例
let arr = [
    { id: 1, name: 1, pid: 0 },
    { id: 2, name: 2, pid: 0 },
    { id: 3, name: 13, pid: 1 },
    { id: 4, name: 24, pid: 2 },
    { id: 5, name: 35, pid: 3 },
    { id: 6, name: 36, pid: 3 },
    { id: 7, name: 67, pid: 6 }
]

console.log(JSON.stringify(dealMenu(arr)));
//[{"id":1,"name":1,"pid":0,"children":[{"id":3,"name":13,"pid":1,"children":[{"id":5,"name":35,"pid":3,"children":[]},{"id":6,"name":36,"pid":3,"children":[{"id":7,"name":67,"pid":6,"children":[]}]}]}]},{"id":2,"name":2,"pid":0,"children":[{"id":4,"name":24,"pid":2,"children":[]}]}]