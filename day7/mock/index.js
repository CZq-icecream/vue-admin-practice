import Mock from 'mockjs'

//模拟网络延时，1000ms后返回结果
Mock.setup({
    timeout: 1000
})

Mock.mock(
    'http://localhost:8080/vue-admin-template/user/login',
    'post',
    function(options){
        let username = options.body.username;
        let password = options.body.password;
        console.log('options');
        console.log(options);
        if (username && password){
            return{
                msg: 'login success'
            }
        }else{
            return{
                msg: 'login failure'
            }
        }
    }
)
