import Mock from 'mockjs'
import { useStore } from 'vuex'


//出入境人数数据
const { entryAndExitList } = Mock.mock({
    'entryAndExitList|12': [
        {
            'id|+1': 1,
            'month': '@increment()月',
            'entrynums|0-200': 1,
            'exitnums|0-200': 1,

        }
    ]
})
Mock.mock('/getEntryAndExitData', 'get', () => {
    return {
        meta: {
            msg: '登录成功',
            status: 200
        },
        data: entryAndExitList,
        total: entryAndExitList.length

    }
})

Mock.mock('/editComminData', 'post', (options) => {
    const params = JSON.parse(options.body)
    // console.log(params);
    for (let i = 0; i < entryAndExitList.length; i++) {

        if (entryAndExitList[i].id == params._value.id) {
            entryAndExitList[i].entrynums = params._value.entrynums
            entryAndExitList[i].exitnums = params._value.exitnums
            console.log(entryAndExitList[i]);
        }
        else {
        }

    }
    return {
        code: 200,
        success: true,
        message: '数据修改成功'
    }
})
Mock.mock('/deleteComminData', 'post', (options) => {
    const params = JSON.parse(options.body)
    // console.log(params);
    const deleteIndex = entryAndExitList.findIndex((item) => {
        return item.id === params.id
    })
    entryAndExitList.splice(deleteIndex, 1)

    return {
        code: 200,
        success: true,
        message: '数据删除成功'
    }
})
Mock.mock('/addComminData', 'post', (options) => {
    const params = JSON.parse(options.body)
    entryAndExitList.unshift(
        params._value
    )
    return {
        code: 200,
        success: true,
        message: '数据添加成功'
    }
})


//定义用户数据
const userList = {
    data: {
        total: 6,
        //前两个用户数据分别固定设为管理员和普通用户，为后续权限设置做准备，其他用户随机生成
        userinfo: [{
            username: 'admin',
            password: '123456',
            roles: 'admin',
            name: '黄诗',
            age: 22,
            job: '前端工程师',
            usersex: 1,
            desc: '性格好，学习厉害',
            token: '000111222333444555666',
            id: '200',
        }, {
            username: 'editor',
            password: '123456',
            roles: 'editor',
            name: '测试张',
            'age|20-30': 23,
            job: '前端工程师',
            usersex: 0,
            desc: '前端工程师张，个性好',
            token: '145145145123123123111',
            id: '201',
        }, Mock.mock({
            username: '@word(3, 5)',
            password: '123456',
            roles: 'editor',
            name: '@cname',
            'age|20-30': 23,
            'usersex|0-1': 1,
            'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师'],
            desc: '@csentence',
            token: '@guid()',
            id: '202',
        }),],
        meta: {
            status: 200,
            message: 'success',
        }
    },
};

Mock.mock('/login', 'post', req => { //路径与请求方式
    const { username, password } = JSON.parse(req.body); //将传递进来的数据保存
    for (let i = 0; i < userList.data.userinfo.length; i++) {
        //判断userList中是否存在该用户并且用户密码是否正确
        if (username == userList.data.userinfo[i].username) {
            if (password == userList.data.userinfo[i].password) {
                return {
                    meta: {
                        msg: '登录成功',
                        status: 200
                    },
                    data: {
                        username: userList.data.userinfo[i].username,
                        roles: userList.data.userinfo[i].roles,
                        password: userList.data.userinfo[i].password,
                        name: userList.data.userinfo[i].name,
                        age: userList.data.userinfo[i].age,
                        usersex: userList.data.userinfo[i].usersex,
                        job: userList.data.userinfo[i].job,
                        token: userList.data.userinfo[i].token,
                        id: userList.data.userinfo[i].id,
                        desc: userList.data.userinfo[i].desc,
                    }
                }
            }
            return {
                meta: {
                    msg: '密码错误',
                    status: 401
                },

            }
        }
    }
    return {
        meta: {
            msg: '当前用户不存在，请注册',
            status: 401
        },

    }
})

Mock.mock('/addUser', 'post', (options) => {
    const params = JSON.parse(options.body)
    // params.id = Mock.mock({ 'id|+1': 205 })
    const { adduserinfo } = Mock.mock({
        adduserinfo: {
            'id|0-10000': 1,
            token: '@guid()',
        }
    })
    params.id = adduserinfo.id;
    params.token = adduserinfo.token


    for (let i = 0; i < userList.data.userinfo.length; i++) {
        if (userList.data.userinfo[i].username == params.username) {
            return {
                code: 400,
                success: false,
                message: '当前用户已存在'
            }
        }
    }
    userList.data.userinfo.push(params)
    return {
        code: 200,
        success: true,
        message: '注册成功！快去登录吧'
    }
})

Mock.mock('/editUser', 'post', (options) => {

    const params = JSON.parse(options.body)
    console.log(params);
    for (let i = 0; i < userList.data.userinfo.length; i++) {
        if (userList.data.userinfo[i].username == params.username) {

            userList.data.userinfo[i].name = params.name
            userList.data.userinfo[i].job = params.jobType
            userList.data.userinfo[i].roles = params.roles
            userList.data.userinfo[i].desc = params.userDesc
            userList.data.userinfo[i].usersex = (params.usersex == '男' ? 1 : 0)
            return {
                data: userList.data.userinfo[i],
                code: 200,
                success: true,
                message: '修改信息成功'
            }
        }
    }

    return {
        code: 401,
        success: false,
        message: '失败'
    }
})


//分层管理数据
const { stratifiedManagementList } = Mock.mock({
    'stratifiedManagementList': [
        {
            id: 0,
            level: '1-4层',
            'nums|500-1000': 1
        },
        {
            id: 1,
            level: '5-8层',
            'nums|500-1000': 1
        },
        {
            id: 2,
            level: '9-12层',
            'nums|500-800': 1
        },
        {
            id: 3,
            level: '13-18层',
            'nums|500-1000': 1
        }
    ]
})


Mock.mock('/stratifiedManagementData', 'get', () => {

    return {
        meta: {
            msg: '获取数据成功',
            status: 200
        },
        data: stratifiedManagementList,
        total: stratifiedManagementList.length

    }
})


Mock.mock('/editManData', 'post', (options) => {
    const params = JSON.parse(options.body)
    for (let i = 0; i < stratifiedManagementList.length; i++) {

        if (stratifiedManagementList[i].id == params._value.id) {
            stratifiedManagementList[i].nums = params._value.nums
            // console.log(stratifiedManagementList[i]);
        }
        else {
        }

    }
    return {
        code: 200,
        success: true,
        message: '数据修改成功'
    }

})

Mock.mock('/deleteManData', 'post', (options) => {
    const params = JSON.parse(options.body)
    // console.log(params);
    const deleteIndex = stratifiedManagementList.findIndex((item) => {
        return item.id === params.id
    })
    stratifiedManagementList.splice(deleteIndex, 1)

    return {
        code: 200,
        success: true,
        message: '数据删除成功'
    }
})
Mock.mock('/addManData', 'post', (options) => {
    const params = JSON.parse(options.body)
    // console.log(params);
    stratifiedManagementList.unshift(
        params._value
    )
    return {
        code: 200,
        success: true,
        message: '数据添加成功'
    }
})



//分层管理数据
const { HeadDataList } = Mock.mock({
    'HeadDataList':
    {
        'totalPeople|2000-8000': 1,
        'intoTheCountryToday|0-1000': 1,
        'outboundToday|0-1000': 1,
        'administrator': 100

    }

})
Mock.mock('/GetHeadData', 'get', () => {

    return {
        meta: {
            msg: '获取数据成功',
            status: 200
        },
        data: HeadDataList,
        total: HeadDataList.length

    }
})




