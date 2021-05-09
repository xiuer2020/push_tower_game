<template>
  <div class="prepare-for-war-layout base-flex">
    <div class="view-back iconfanhui iconfont"></div>
    <div class="side-bar">
      <ul class="menu" style="padding-top: 48px">
        <li>
          <span class="sub-title">铭文</span>
        </li>
        <li @click="subShow = !subShow">
          <span
            class="sub-title active"
            @click="$router.push({ name: 'equipment' })"
            >装备</span
          >
          <ul class="sub-menu" v-show="subShow">
            <li
              class="sub-content active"
              @click.stop="$router.push({ name: 'attack' })"
            >
              攻击
            </li>
            <li class="sub-content">法术</li>
            <li class="sub-content">防御</li>
            <li class="sub-content">移动</li>
            <li class="sub-content">打野</li>
            <li class="sub-content">游走</li>
          </ul>
        </li>
        <li>
          <span class="sub-title">铭文</span>
        </li>
        <li>
          <span class="sub-title">铭文</span>
        </li>
      </ul>
      <div class="current-hero base-flex jcc fxdc aic">
        <div class="current-hero-image-layout">
          <img src="../../assets/images/夏洛特.jpg" width="42" />
          <!-- src\views\prepare_for_war\PrepareForWarLayot.vue -->
          <div class="current-hero-name-layout base-flex">
            <div class="current-hero-name">夏洛特</div>
            <span class="iconfont iconzhuanhuan"></span>
          </div>
        </div>
        <div class="mt-base suit">套装</div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({
    subShow: false,
  }),
};
</script>

<style lang="less">
.prepare-for-war-layout {
  height: 100%;
  background: #2d4969;
}
.prepare-for-war-layout .view-back {
  z-index: 999;
  height: 48px;
  width: 78px;
  position: fixed;
  left: 0;
  top: 0;
  line-height: 48px;
  text-align: center;
  background: #182a45;
  color: #fff;
}
.prepare-for-war-layout .side-bar {
  height: 100%;
  width: 78px;
  position: relative;
  flex-shrink: 0;
  background: #182a45;
  text-align: center;
}
.prepare-for-war-layout .side-bar .sub-title {
  height: 40px;
  display: inline-block;
  width: 100%;
  line-height: 40px;
}
.prepare-for-war-layout .side-bar .sub-title.active {
  background: linear-gradient(
237deg
, #1eacff, transparent);
}

.prepare-for-war-layout .side-bar .sub-content {
  height: 30px;
  line-height: 30px;
}
.prepare-for-war-layout .side-bar .sub-content.active {
  background: #0c4879;
}
.prepare-for-war-layout .side-bar .current-hero {
  position: absolute;
  height: 102px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}
.prepare-for-war-layout .side-bar .current-hero-image-layout {
  position: relative;
}

.prepare-for-war-layout .side-bar .current-hero-name-layout {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.prepare-for-war-layout .side-bar .current-hero-name{
  width: 34px;
  white-space: nowrap;
  transform: scale(0.7);
}
.prepare-for-war-layout .side-bar .iconfont{
  transform: scale(0.7);
}
.prepare-for-war-layout .side-bar .suit{
  width: 42px;
  border-radius: 2px;
  border: 1px solid #335992;
  background: linear-gradient(359deg, #1eacff, transparent);
}

</style>