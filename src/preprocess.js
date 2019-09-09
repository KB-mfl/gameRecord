import httpService from './service'

export default () => new Promise((resolve, reject) => {
    window.roles = [
        {id:'0', alias:'tourist',name:'游客'},
        {id:'1', alias:'admin', name:'管理员'},
    ];
    httpService.get('/auth/auth').then(r => {
        console.log(r.data);
        resolve();
    }).catch(e => {
        window.role = 'tourist';
        reject();
        console.log("err")
    });
});
