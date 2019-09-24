export default function getParams(url) {
    url = url || window.location.href;
    let query = url.split('?')[1];
    
    let arr = query.split('&');
    let keyObj = {};
    arr.forEach(function(item){
        keyObj[item.split('=')[0]] = keyObj[item.split('=')[1]]
    })
    return keyObj;
};