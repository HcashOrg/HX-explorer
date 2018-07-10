<template>
  <div class="operation-details">
    <template v-if="type == 10">
      <header>
        {{$t('transferDetails.details.accountBind')}}
      </header>
      <div class="con">
        <ul>
          <li>
          <span class="name">
            {{$t('transferDetails.details.asset')}}
          </span>
            <span class="value">
            {{detail[0].asset}}
          </span>
          </li>
          <li>
          <span class="name">
            {{$t('transferDetails.details.address')}}
          </span>
            <span class="value" @click="_mixin_address_jump(detail[0].addr)">
            {{detail[0].addr}}
          </span>
          </li>
          <li>
          <span class="name">
            {{$t('transferDetails.details.tunnelAddress')}}
          </span>
            <span class="value link" @click="_mixin_address_jump(detail[0].tunnelAddress)">
            {{detail[0].tunnelAddress}}
          </span>
          </li>
          <li>
          <span class="name">
            {{$t('transferDetails.details.fee')}}
          </span>
            <span class="value">
            {{detail[0].fee}}
          </span>
          </li>
        </ul>
      </div>
    </template>
    <!--<template v-else-if="type == 84">-->
      <!--<header>-->
        <!--{{$t('transferDetails.details.guardRefundCrosschainTrx')}}-->
      <!--</header>-->
      <!--<div class="con">-->
        <!--<ul>-->
          <!--<li>-->
          <!--<span class="name">-->
            <!--{{$t('transferDetails.details.guardAddress')}}-->
          <!--</span>-->
            <!--<span class="value">-->
            <!--BTC-->
          <!--</span>-->
          <!--</li>-->
          <!--<li>-->
          <!--<span class="name">-->
            <!--{{$t('transferDetails.details.guardID')}}-->
          <!--</span>-->
            <!--<span class="value">-->
            <!--31fac37fa5c902d18fae2f55eb00b7822fe3d359c72f1-->
          <!--</span>-->
          <!--</li>-->
          <!--<li>-->
          <!--<span class="name">-->
            <!--{{$t('transferDetails.details.cancelledTxHash')}}-->
          <!--</span>-->
            <!--<span class="value">-->
            <!--0xd31fac37fa5c902d18fae2f55eb00b7822fe3d359c72f115edb19baa4b1c8f97-->
          <!--</span>-->
          <!--</li>-->
          <!--<li>-->
          <!--<span class="name">-->
            <!--{{$t('transferDetails.details.fee')}}-->
          <!--</span>-->
            <!--<span class="value">-->
            <!--20 HX-->
          <!--</span>-->
          <!--</li>-->
        <!--</ul>-->
      <!--</div>-->
    <!--</template>-->
    <template v-else-if="type == 5">
      <header>
        {{$t('transferDetails.details.accountCreate')}}
      </header>
      <div class="con">
        <ul>
          <li>
          <span class="name">
            {{$t('transferDetails.details.name')}}
          </span>
            <span class="value">
            {{detail[0].name}}
          </span>
          </li>
          <li>
          <span class="name">
            {{$t('transferDetails.details.from')}}
          </span>
            <span class="value">
            {{detail[0].from}}
          </span>
          </li>
          <li>
          <span class="name">
            {{$t('transferDetails.details.fee')}}
          </span>
            <span class="value">
            {{detail[0].fee}}
          </span>
          </li>
        </ul>
      </div>
    </template>
    <template v-else-if="type == 24">
      <header>
        {{$t('transferDetails.details.minerCreate')}}
      </header>
      <div class="con">
        <ul>
          <li>
          <span class="name">
            {{$t('transferDetails.details.name')}}
          </span>
            <span class="value">
            {{detail[0].minerName}}
          </span>
          </li>
          <li>
          <span class="name">
            {{$t('transferDetails.details.address')}}
          </span>
            <span class="value">
            {{detail[0].minerAddress}}
          </span>
          </li>
          <li>
          <span class="name">
            {{$t('transferDetails.details.fee')}}
          </span>
            <span class="value">
            {{detail[0].fee}}
          </span>
          </li>
        </ul>
      </div>
    </template>
    <template v-else-if="type == 26">
      <header>
        {{$t('transferDetails.details.minerGenerateMultiAsset')}}
      </header>
      <div class="con">
        <ul>
          <li>
          <span class="name">
            {{$t('transferDetails.details.minerName')}}
          </span>
            <span class="value">
            {{detail[0].minerName}}
          </span>
          </li>
          <li>
          <span class="name">
            {{$t('transferDetails.details.address')}}
          </span>
            <span class="value">
            {{detail[0].minerAddress}}
          </span>
          </li>
          <li>
          <span class="name">
            {{$t('transferDetails.details.fee')}}
          </span>
            <span class="value">
            {{detail[0].fee}}
          </span>
          </li>
          <li>
          <span class="name">
            {{$t('transferDetails.details.Asset')}}
          </span>
            <span class="value">
            {{detail[0].asset}}
          </span>
          </li>
          <li>
          <span class="name">
            {{$t('transferDetails.details.hotAddress')}}
          </span>
            <span class="value">
              {{detail[0].addressHot}}
          </span>
          </li>
          <li>
          <span class="name">
            {{$t('transferDetails.details.coldAddress')}}
          </span>
            <span class="value">
              {{detail[0].addressCold}}
          </span>
          </li>
        </ul>
      </div>
    </template>
    <template v-else>
      <header>
        {{typeName}}
      </header>
      <div class="con">
        <span class="other-type-json">{{detail[0]}}</span>
      </div>
    </template>
    <template v-if="detail[0].guarantee">
      <header>
        {{$t('transferDetails.details.acceptance')}}
      </header>
      <div class="con">
        <ul>
          <li>
          <span class="name">
            {{$t('transferDetails.details.id')}}
          </span>
            <span class="value">
            {{detail[0].guarantee.guaranteeId}}
          </span>
          </li>
          <li>
          <span class="name">
            {{$t('transferDetails.details.exchange')}}
          </span>
            <span class="value">
            {{detail[0].guarantee.assetOrign}}<i class="el-icon-back rotat"></i>{{detail[0].guarantee.assetTarget}}
          </span>
          </li>
          <li>
          <span class="name">
            {{$t('transferDetails.details.rate')}}
          </span>
            <span class="value">
            {{detail[0].guarantee.rate}}
          </span>
          </li>
          <li>
          <span class="name">
            {{$t('transferDetails.details.ownerAddress')}}
          </span>
            <span class="value">
            {{detail[0].guarantee.ownerAddr}}
          </span>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
  import typeObj from '../../../utils/type';
  export default {
    name: "operation-other",
    props: ['detail', 'type'],
    data() {
      return {
        typeName:''
      }
    },
    mounted() {
      this.typeName = typeObj[this.type] || 'Other Type'

    },
    watch: {
      type() {
        this.typeName = typeObj[this.type] || 'Other Type'
      }
    }
  }
</script>

<style lang="less" scoped>
.other-type-json {
  width: 100%;
  display: inline-block;
  margin: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
</style>
