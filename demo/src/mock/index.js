import Mock from 'mockjs'


//出入境人数数据
const { entryAndExitList } = Mock.mock({
    'entryAndExitList|12': [
        {
            // id: '@increment()',
            month: '@increment()月',
            'entrynums|0-200': 1,
            'exitnums|0-200': 1,

        }
    ]
})
Mock.mock('/api/user', 'get', () => {
    return {
        status: 200,
        msg: "获取成功",
        data: Array.from(entryAndExitList),
        total: entryAndExitList.length

    }
})