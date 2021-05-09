<template>
  <div class="equipment base-flex">
    <div class="show-equipment">
      <div class="head base-flex jcsb aic">
        <div class="module-title">
          装备<span class="iconfont iconyiwen ml-xs"></span>
        </div>
        <div class="iconfont iconshujujuzhen"></div>
      </div>
      <router-view />
      <div class="equipment-bar pt-sm pb-sm base-flex jcsa">
        <div class="epuipment-image-layout">
          <img
            src="../../../assets/images/暗影战斧.jpg"
            class="epuipment-image"
            width="48"
          />
        </div>
        <div class="epuipment-image-layout">
          <img
            src="../../../assets/images/暗影战斧.jpg"
            class="epuipment-image"
            width="48"
          />
        </div>
        <div class="epuipment-image-layout">
          <img
            src="../../../assets/images/暗影战斧.jpg"
            class="epuipment-image"
            width="48"
          />
        </div>
        <div class="epuipment-image-layout">
          <img
            src="../../../assets/images/暗影战斧.jpg"
            class="epuipment-image"
            width="48"
          />
        </div>
        <div class="epuipment-image-layout">
          <img
            src="../../../assets/images/暗影战斧.jpg"
            class="epuipment-image"
            width="48"
          />
        </div>
        <div class="epuipment-image-layout">
          <img
            src="../../../assets/images/暗影战斧.jpg"
            class="epuipment-image"
            width="48"
          />
        </div>
        <div class="see my-btn-layout">
          <span class="iconfont iconchakan my-btn"></span>
        </div>
      </div>
    </div>
    <div class="decription mr-md">
      <div class="head">
        <span class="iconfont iconkaidianbaodian pr-base"></span>装备宝典
      </div>
      <div class="main">
        <div class="base-flex jcsb">
          <div class="name">龙鳞利剑</div>
          <div class="base-flex">
            <div class="pr-base base-flex fxdc aic">
              <div class="my-btn-layout">
                <span class="iconfont iconarrow- my-btn"></span>
              </div>
              <div>详情</div>
            </div>
            <div class="pr-base base-flex fxdc aic">
              <div class="my-btn-layout">
                <span class="iconfont iconarrow- my-btn"></span>
              </div>
              <div>合成</div>
            </div>
          </div>
        </div>
        <div><span class="iconfont iconbaojian"></span>+85物理攻击</div>
        <div><span class="iconfont icon1007"></span>+85物理攻击</div>
        <div><span class="iconfont iconjiao"></span>+85物理攻击</div>

        <div class="passive pt-sm pb-md">
          <div>被动-切割</div>
          <div class="passive-description">增加58-170点物理穿透</div>
        </div>

        <div class="passive pt-sm pb-md">
          <div>被动-切割</div>
          <div class="passive-description">
            增加58-170点物理穿透<span class="passive-take-effect-description"
              >(远程英雄效果翻倍)</span
            >
          </div>
        </div>
      </div>
      <div class="mt-xl">
        <div class="mb-base programme-btn base-flex aic my-btn2">
          <div class="iconfont iconliebiao fx1"></div>
          <div class="my-btn2-text fx9">装备方案</div>
        </div>
        <div class="modify-btn my-btn2 base-flex aic">
          <div class="my-btn2-text fx1">修改</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    emit: false,
  }),
  computed: {
    ...mapGetters(["moduleTitle"]),
  },
};
</script>

<style lang="less">
.equipment {
  padding-left: 12px;
}

.equipment .show-equipment .head {
  width: 424px;
  height: 48px;
}
.equipment .show-equipment .equipment-bar {
  padding-left: 54px;
  padding-right: 54px;
  position: relative;
  background: #1d2748;
}
.equipment .show-equipment .epuipment-image {
  border: 2px solid #506f89;
  border-radius: 50%;
}
.equipment .show-equipment .my-btn-layout {
  padding: 1px;
  transform: rotate(45deg);
  border: 1px solid #126ca0;
  background: linear-gradient(313deg, #1eacff, #136798);
}
.equipment .show-equipment .my-btn::before {
  display: block;
  width: 12px;
  height: 12px;
  transform: rotate(-45deg);
}
.equipment .show-equipment .see {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(50%, -50%) rotate(45deg);
  color: #d4c4c4;
}

.equipment .decription {
  margin-left: 20px;
  width: 156px;
}
.equipment .decription .head {
  height: 48px;
  line-height: 48px;
}
.equipment .decription .name {
  font-size: 16px;
}
.equipment .decription .my-btn-layout {
  padding: 1px;
  transform: rotate(45deg);
  border: 1px solid #126ca0;
  background: linear-gradient(313deg, #1eacff, #136798);
}
.equipment .decription .my-btn::before {
  display: block;
  width: 12px;
  height: 12px;
  transform: rotate(-45deg);
}
.equipment .decription .main {
  height: 216px;
  overflow-y: auto;
}
.equipment .decription .passive-description {
  color: #b5b5b5;
}
.equipment .decription .passive-take-effect-description {
  color: #8a8989;
}

.equipment .decription .my-btn2 {
  position: relative;
  padding: 0 8px;
  height: 24px;
  line-height: 20px;
  border-radius: 2px;
}
.equipment .decription .my-btn2::before {
  position: absolute;
  left: 2px;
  top: 2px;
  right: 2px;
  bottom: 2px;
  content: "";
  background: linear-gradient(180deg, #63626296, transparent);
}
.equipment .decription .my-btn2-text {
  text-align: center;
}
.equipment .decription .programme-btn {
  background: #5188c3;
}
.equipment .decription .modify-btn {
  background: #bb9e5f;
}
</style>