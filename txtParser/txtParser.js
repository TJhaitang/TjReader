const fs= require('fs');

fs.readFile('/home/tjhaitang/文档/CODE/codes/TjReader/txtParser/红楼梦.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    // console.log(data)
    //正则表达式:/\r\n第[一二三四五六七八九十百千万零]+回\r\n/
    //获取章节标题所在位置序号列表
    // var chapterList = data.match(/\r\n第[一二三四五六七八九十百千万零]+回\r\n/g)
    var chapterList = data.match(/\r\n第[一二三四五六七八九十百千万零]+回\r\n/g)
    console.log(chapterList)
    //将换行等占位符替换为字符串
}
)