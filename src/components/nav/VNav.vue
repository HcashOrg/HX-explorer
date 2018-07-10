<template>
  <div class="wrap">
    <div class="background"></div>
    <aside>
        <img class="logo" src="../../assets/img/logo.png" @click="logoClick"/>
    </aside>
    <section>
      <ul>
        <!--<li>-->
        <!--<timeago :since="time" :locale="getBusLocal" :auto-update="0.5"></timeago>-->
        <!--</li>-->
        <!--<button @click="changeLocal">-->
        <!--切换-->
        <!--</button>-->
        <router-link to="/">
          <li :class="{'choice':getChoiceIndex === 0}" @click="navChange(0)">
            {{$t('nav.home')}}
          </li>
        </router-link>
        <router-link to="/blocks">
          <li :class="{'choice':getChoiceIndex === 1}" @click="navChange(1)">
            {{$t('nav.blocks')}}
          </li>
        </router-link>
        <router-link to="/transaction">
          <li :class="{'choice':getChoiceIndex === 2}" @click="navChange(2)">
            {{$t('nav.transactions')}}
          </li>
        </router-link>
        <router-link to="/contracts">
          <li :class="{'choice':getChoiceIndex === 3}" @click="navChange(3)">
            {{$t('nav.contracts')}}
          </li>
        </router-link>
      </ul>
    </section>
  </div>
</template>

<script>
  import bus from '../../utils/bus'

  export default {
    name: "v-nav",
    data() {
      return {
        value: true,
        time: '2018-05-25'
      }
    },
    methods: {
      logoClick() {
        this.$router.push({path:'/'});
      },
      changeLang() {
        if (bus.locale === 'en') {
          this.$i18n.locale = 'cn';
          bus.local = 'cn';
        } else {
          this.$i18n.locale = 'en';
          bus.local = 'en';
        }
      },
      navChange(index) {
        bus.navChoice = index;
      }
    },
    computed: {
      getBusLocal() {
        return bus.local;
      },
      getChoiceIndex() {
        return bus.navChoice;
      }
    }
  }
</script>

<style lang="less" scoped>
  .wrap {
    position: absolute;
    width: 100%;
    box-sizing: border-box;
    height: 78px;
    padding: 0 80px;
    top: 0;
    left: 0;
    z-index: 2;
    a {
      text-decoration: none;
    }
    a:hover, a:visited, a:link, a:active {
      color: inherit;
    }
    .background {
      background-color: rgba(0, 0, 0, 0.15);
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: -1;
      /*z-index: 1;*/
    }
    aside {
      float: left;
      height: 78px;
      line-height: 78px;
      font-size: 0;
      z-index: 100;
      .logo {
        vertical-align: middle;
        cursor: pointer;
      }
    }
    section {
      float: right;
      margin-top: 39px;
      transform: translateY(-50%);
      ul {
        display: inline-block;
        vertical-align: middle;
        li {
          padding: 8px 26px;
          float: left;
          margin-left: 30px;
          color: #ffffff;
          font-size: 16px;
          cursor: pointer;
          &:hover {
            color: #6042A9;
          }
        }
        .choice {
          border: 1px solid white;
          border-radius: 8px;
        }
      }
    }
  }
</style>
