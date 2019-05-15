
// function compare(y){
//     let rep = []
//     defArry(6).forEach((ele,index) => {
//         if(ele == y[index]){
//             rep.push(index)
//         }
//     });
    
//     console.log(rep,y)
//     if(rep.length != 0){
//         compare(ranArray(defArry(6)))
//     }
//     return y, defArry()
// }

// const defArry = function (x){
//     let arr = Array(x).fill(0,0,x);
//     let len = arr.length;
//     arr=arr.map((ele,index)=>{
//         return index
//     })
//     return arr
// }


// let ranAray = function (arr) {
//     let i = arr.length;
//     while (i) {
//         let j = Math.floor(Math.random()*i--);
//         [arr[j], arr[i]] = [arr[i], arr[j]];
//     }
//     return arr
//     console.log(arr)
// }




export class RandArry{
    constructor(len){
        //默认属性 数组长度
        this.len = Number(len)
        //初始化数组从小到大排列
        this.defArry = this.arryInit()
        //洗牌算法得到的一系列数组，只有一个数组是不和原始数组重复的0.0
        this.ranArrs = []
    }
    
    arryInit(){
        let arr = Array(this.len).fill(0,0,this.len);
        arr=arr.map((ele,index)=>{
            return index
        })
        //输出从小大排序
        return arr
    }


    ranArray() {
        let i = this.len;
        let arr = this.arryInit()
        while (i) {
            let j = Math.floor(Math.random()*i--);
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        //洗牌算法
        return arr
    }

     compare(y=this.ranArray()){
        let rep = []
        // console.log(defArry(6),y)
        this.defArry.forEach((ele,index) => {
            if(ele == y[index]){
                rep.push(index)
            }
        });
        
        // console.log(rep,y)
        //判断是否跟上一个位置相同，如果相同则again
        //数字大性能也很棒...更不容易跟上一个位置相同
        if(rep.length != 0){
            this.compare(this.ranArray())
        }
        this.ranArrs.push(y)
        return this.ranArrs[0]
    }
    
}
// let myDate = new Date();

// let now;
// let pass;
// let arr6 = new  RandArry(100000);
// now = myDate.getTime()
// console.log(arr6.compare(arr6.ranArray()))
// pass = myDate.getTime()

// console.log(pass-now)