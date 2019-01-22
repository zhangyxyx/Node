const fs=require('fs')
//获取txt文件数据,并且将数据放到一个新的txt文件中 适用于全部的的文件 
function txtFile(){
    fs.readFile('1.txt',(err,data)=>{
        console.log(data)
        if(err){
            console.log('获取数据错误')
        }else{
            fs.writeFile('2.txt',data,(err)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log('复制文件成功')
                    fs.appendFile('2.txt','这是追加的数据','utf8',(err)=>{
                        if(err){
                            console.log(err)
                        }else{
                            console.log('追加数据成功')
                        }
                    })
                }
            })
        }
    })
}
//获取execl中数据
function getSetXLSX(){
    const xlsx=require('node-xlsx')
    const workSheetsFromBuffer=xlsx.parse(fs.readFileSync('1.xlsx'))
    console.log(workSheetsFromBuffer)
    const data=[[1,2,3],[true,false,null]]
    const buffer=xlsx.build([{name:'Sheet1',data:data}])
    console.log(buffer)
    fs.writeFileSync('2.xlsx',buffer,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('添加数据成功')
        }
    })
}

const textract=require('textract')
const text=textract.fromFileWithPath('1.xlsx',(err,data)=>{
    if(err){
        console.log('获取文件数据失败')
    }else{
        console.log(data)
    }
})


