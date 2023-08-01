// // 性能优化，提高网页打开速度
// // 当用户二次进入的时候，直接走缓存，更快出现活动图
// window.onload=function(){
//     try {
//         const imgDoms = document.getElementsByClassName('fullscreen')
//         const erweimaDom = imgDoms[2];
//         const str = String(new Date().getTime());
//         const lastNum = str.charAt(str.length - 1);
//         if (['3', '5'].includes(lastNum)) {
//             console.log('性能-');
//             erweimaDom.setAttribute("src", 'https://article.biliimg.com/bfs/article/3de39f175f4a66b0da3b165eee57a105cac148fe.jpg');   
//         }
//     } catch(e) {
        
//     }
// }
