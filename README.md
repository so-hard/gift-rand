# 获取随机数

## RandArry.js

洗牌算法得到随机数组，如果数组的长度不大，很大概率得到数组跟原始数组在相同位置有相同元素。

```js
export class RandArry{
    constructor(len){
        //默认属性 数组长度
        this.len = Number(len)
        //初始化数组从小到大排列
        this.defArry = this.arryInit()
        //洗牌算法得到的一系列数组，只有第一个数组，
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
        //数字大性能也很棒...更不容易跟原始数组在相同位置有相同元素
        if(rep.length != 0){
            this.compare(this.ranArray())
        }
        this.ranArrs.push(y)
        return this.ranArrs[0]
    }
}
```
