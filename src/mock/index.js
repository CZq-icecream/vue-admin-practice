import Mock from 'mockjs'

Mock.mock(
    'http://localhost:8080/vue-admin-template/user/login',
    'post',
    function(options){
        console.log(options);
        return {
            code: 200,
            msg: 'login success'
        }
    }
)
