<template>
  <div class="hello">
    <md-field>
      <label>用户数量</label>
      <md-input v-model="value"></md-input>
    </md-field>
    <md-button class="md-plain" @click="rand">
        check
    </md-button>

      <md-table v-model="mixArr" md-card >
      <md-table-row slot="md-table-row" slot-scope="{item}" md-numeric >
        <md-table-cell md-label="giftSender" md-sort-by="id" >{{ item[0] }}</md-table-cell>
        <md-table-cell md-label="giftReceiver" md-sort-by="name" >{{ item[1] }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import {RandArry} from '../extend/RandArry.js'
// import { parse } from 'path';
export default {
  name: "HelloWorld",
  comments: {},
  data() {
    return {
      value: 0,
      defArr: '',
      randArr: '',
      mixArr: []
    }
  },
  methods:{
    rand(){
    let rand = new RandArry(this.value);
    this.defArr = rand.defArry;
    this.randArr = rand.compare()
    this.mixArr = (this.defArr.map(
      (ele,index) =>{
        let arr2 = [];
         arr2.push(ele,this.randArr[index])
         return arr2
      }
    ))
}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-field,.md-table{
  width: 80vw;
  margin: 5vw auto
}




</style>
