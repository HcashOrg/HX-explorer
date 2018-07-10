<template>
  <div class="wrap">
    <input :placeholder="$t('search.placeholder')" v-model="keyWord" @keyup.enter="search"/>
    <span class="search-btn" @click="search">
        <i class="iconfont icon-sousuo"></i>
      </span>
  </div>
</template>

<script>
  export default {
    name: "search",
    data() {
      return {
        keyWord: ''
      }
    },
    methods: {
      search() {
        this.keyWord = this.keyWord.trim();//去首尾空格
        let that = this;
        let regS=/(^\s+)|(\s+$)|\s+/g;
        let reg = /^[0-9]+[0-9]*$/;
        if (regS.test(this.keyWord)) {
          this.$message({
            message: this.$t('alert.noSpace'),
            type: 'warning'
          });
        } else if (this.keyWord === '') {
          this.$message({
            message: this.$t('alert.enterContent'),
            type: 'warning'
          });
        } else if (this.keyWord.length === 40) {
          this.$axios.post('queryTransactionList',{trxId:this.keyWord,page:1,rows:10}).then(function (res) {
            let data = res.data.data;
            if (data.total > 0) {
              that.$router.push({ path: '/transaction', query: { txHash: that.keyWord }});
            } else {
              that.$message({
                message: that.$t('alert.notSearch'),
                type: 'warning'
              });
            }
          })
        } else if (this.keyWord.startsWith('CLN')) {
          this.$axios.post('/getContractStatis', {contractId: this.keyWord}).then(function (res) {
            if (res.data.data) {
              that.$router.push({ path: `/contractOverview/${that.keyWord}` });
            } else {
              that.$message({
                message: that.$t('alert.notSearch'),
                type: 'warning'
              });
            }
          });
        } else if (reg.test(this.keyWord)) {
          this.$axios.post('/queryBlockByNum',{blockNum:this.keyWord}).then(function (res) {
            if (res.data.data) {
              that.$router.push({ path: `/blockDetails/${that.keyWord}` });
            } else {
              that.$message({
                message: that.$t('alert.notSearch'),
                type: 'warning'
              });
            }
          });
        } else {
          this.$axios.post('/addrStatis',{address:this.keyWord}).then(function (res) {
            if (res.data.data) {
              that.$router.push({ path: '/address', query: { address: that.keyWord }});
            } else {
              that.$message({
                message: that.$t('alert.notSearch'),
                type: 'warning'
              });
            }
          })
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .wrap {
    width: 474px;
    height: 30px;
    position: relative;
    input {
      width: 100%;
      height: 100%;
      line-height: 30px;
      box-sizing: border-box;
      background: transparent;
      border-bottom: 2px solid white;
      color: white;
      outline: none;
      padding: 0 30px 0 10px;
      &::placeholder {
        color: white;
        font-size: 13px;
      }
    }
    .search-btn {
      display: block;
      position: absolute;
      right: 0;
      top: 0;
      /*width: 60px;*/
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: white;
      cursor: pointer;
      .iconfont {
        font-size: 24px;
      }
    }
  }
</style>
