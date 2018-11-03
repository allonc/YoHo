<template>
<dir>
    <div slot="content" v-if="channel===0">
      <div class="left-panel">
        <cube-scroll>
          <cube-tab-bar v-model="selectedLabel" :data="tabs" @change="changeHandler"></cube-tab-bar>
        </cube-scroll>
      </div>
      <div class="right-panel">
        <cube-scroll ref="scroll">
          <ul>
            <li v-for="(hero, index) in scrollData" :key="index">
              <span>{{hero.name}}</span>
            </li>
          </ul>
        </cube-scroll>
      </div>
    </div>
    <div slot="content" v-if="channel===1">
      <!-- <div class="left-panel">
        <cube-scroll>
          <cube-tab-bar>123213213</cube-tab-bar>
        </cube-scroll>
      </div> -->
      <div class="right-panel" >
        <cube-scroll ref="scroll">
          <ul>
            <li >
              <span>343441414</span>
            </li>
             <li >
              <span>343441414</span>
            </li>
             <li >
              <span>343441414</span>
            </li>
             <li >
              <span>343441414</span>
            </li>
          </ul>
        </cube-scroll>
      </div>
    </div>
</dir>
</template>

<script type="text/ecmascript-6">
import * as DATAS from "../js/tab-bar";
const DATA_MAP = {
  全部: DATAS.ALL_HEROES,
  近战: DATAS.MELEE_HEROES,
  远程: DATAS.REMOTE_HEROES,
  辅助: DATAS.SUPPORT_HEROES,
  法师: DATAS.MAGIC_HEROES,
  打野: DATAS.JUNGLE_HEROES,
  坦克: DATAS.TANK_HEROES,
  隐身: DATAS.INVISIBLE_HEROES,
  后期: DATAS.CARRY_HEROES,
  闪烁: DATAS.BLINK_HEROES,
  爆发: DATAS.HIGH_DAMAGE_HEROES,
  召唤: DATAS.INVOKE_HEROES,
  眩晕: DATAS.DIZZY_HEROES,
  治疗: DATAS.HEALER_HEROES
};
const genTabLabels = Object.keys(DATA_MAP).map(label => ({
  label
}));
export default {
  data() {
    return {
      selectedLabel: "全部",
      scrollData: [],
      tabs: genTabLabels,
      arr:[{
        shirt:"上衣",

      }]
    };
  },
  computed: {
    channel() {
      return this.$store.getters.getChannel;
    }
  },
  created() {
    this.scrollData = DATA_MAP[this.selectedLabel];
  },
  methods: {
    changeHandler(label) {
      this.scrollData = DATA_MAP[label];
      this.$nextTick(() => {
        // reset better-scroll'postion
        this.$refs.scroll.scrollTo(0, 0);
        // you need to caculate scroll-content height when your dom has changed in nextTick
        this.$refs.scroll.refresh();
      });
    },
    setChannel() {
      var path = this.$route.path;
      var nav = 0;
      switch (path) {
        case "/mlist/boys":
          nav = 0;
          break;
        case "/mlist/girls":
          nav = 1;
          break;
        case "/mlist/kids":
          nav = 2;
          break;
        case "/mlist/lifestyle":
          nav = 3;
          break;
        default:
          nav = 0;
      }
      this.$store.dispatch("doChannel", nav);
    }
  },
  watch: {
    selectedLabel(newV) {
      console.log(newV);
    },
    $route() {
      this.setChannel();
    }
  },
  mounted() {
    this.setChannel();
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.cube-scroll-list-wrapper {
  .cube-tab-bar {
    flex-wrap: wrap;

    .cube-tab {
      width: 200%;
      flex-basis: unset;
      height: 80px;
      line-height: 80px;
      font-size: 28px;
      color: #000;
      transition: all 0.3s ease-in;
      padding: 0 !important;

      &.cube-tab_active {
        color: #fff;
        font-size: 32px;
        background-color: black;
      }
    }
  }
}

.left-panel {
  position: absolute;
  top: 150px;
  left: 0;
  bottom: 0;
  width: 150px;
  background-color: #fff;
}

.right-panel {
  position: absolute;
  top: 150px;
  left: 240px;
  right: 0;
  bottom: 0;
  background-color: #fff;

  li {
    height: 80px;
    display: flex;
    align-items: center;
    background-color: #fff;

    img {
      width: 102px;
      margin: 0 10px 0 20px;
      border: 1px solid #ff9f38;
      border-radius: 3px;
      box-shadow: 0 1px 5px 0 #000;
    }

    span {
      color: #000;
    }
  }
}
</style>