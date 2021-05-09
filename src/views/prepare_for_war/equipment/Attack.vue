<template>
  <div class="attack">
    <div v-if="equimentDetailShow" class="detal-show">
      <div class="main base-flex jcsb">
        <div>
          <div class="item base-flex mb-md">
            <img
              src="../../../assets/images/暗影战斧.jpg"
              width="48"
              class="image"
            />
            <div class="info pt-sm">
              <div class="name">暗影战斧</div>
              <div class="description">打脆皮用</div>
              <div class="price">2090</div>
            </div>
          </div>
          <div class="item base-flex mb-md">
            <img
              src="../../../assets/images/暗影战斧.jpg"
              width="48"
              class="image"
            />
            <div class="info pt-sm">
              <div class="name">暗影战斧</div>
              <div class="description">打脆皮用</div>
              <div class="price">2090</div>
            </div>
          </div>
          <div class="item base-flex mb-md">
            <img
              src="../../../assets/images/暗影战斧.jpg"
              width="48"
              class="image"
            />
            <div class="info pt-sm">
              <div class="name">暗影战斧</div>
              <div class="description">打脆皮用</div>
              <div class="price">2090</div>
            </div>
          </div>
          <div class="item base-flex mb-md">
            <img
              src="../../../assets/images/暗影战斧.jpg"
              width="48"
              class="image"
            />
            <div class="info pt-sm">
              <div class="name">暗影战斧</div>
              <div class="description">打脆皮用</div>
              <div class="price">2090</div>
            </div>
          </div>
        </div>
        <div>
          <div class="item base-flex mb-md">
            <img
              src="../../../assets/images/暗影战斧.jpg"
              width="48"
              class="image"
            />
            <div class="info pt-sm">
              <div class="name">暗影战斧</div>
              <div class="description">打脆皮用</div>
              <div class="price">2090</div>
            </div>
          </div>
          <div class="item base-flex mb-md">
            <img
              src="../../../assets/images/暗影战斧.jpg"
              width="48"
              class="image"
            />
            <div class="info pt-sm">
              <div class="name">暗影战斧</div>
              <div class="description">打脆皮用</div>
              <div class="price">2090</div>
            </div>
          </div>
          <div class="item base-flex mb-md">
            <img
              src="../../../assets/images/暗影战斧.jpg"
              width="48"
              class="image"
            />
            <div class="info pt-sm">
              <div class="name">暗影战斧</div>
              <div class="description">打脆皮用</div>
              <div class="price">2090</div>
            </div>
          </div>
          <div class="item base-flex mb-md">
            <img
              src="../../../assets/images/暗影战斧.jpg"
              width="48"
              class="image"
            />
            <div class="info pt-sm">
              <div class="name">暗影战斧</div>
              <div class="description">打脆皮用</div>
              <div class="price">2090</div>
            </div>
          </div>
        </div>
        <div>
          <div class="item base-flex mb-md">
            <img
              src="../../../assets/images/暗影战斧.jpg"
              width="48"
              class="image"
            />
            <div class="info pt-sm">
              <div class="name">暗影战斧</div>
              <div class="description">打脆皮用</div>
              <div class="price">2090</div>
            </div>
          </div>
          <div class="item base-flex mb-md">
            <img
              src="../../../assets/images/暗影战斧.jpg"
              width="48"
              class="image"
            />
            <div class="info pt-sm">
              <div class="name">暗影战斧</div>
              <div class="description">打脆皮用</div>
              <div class="price">2090</div>
            </div>
          </div>
          <div class="item base-flex mb-md">
            <img
              src="../../../assets/images/暗影战斧.jpg"
              width="48"
              class="image"
            />
            <div class="info pt-sm">
              <div class="name">暗影战斧</div>
              <div class="description">打脆皮用</div>
              <div class="price">2090</div>
            </div>
          </div>
          <div class="item base-flex mb-md">
            <img
              src="../../../assets/images/暗影战斧.jpg"
              width="48"
              class="image"
            />
            <div class="info pt-sm">
              <div class="name">暗影战斧</div>
              <div class="description">打脆皮用</div>
              <div class="price">2090</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>else</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["equimentDetailShow"]),
  },
};
</script>

<style lang="less">
.attack {
  height: 214px;
  width: 404px;
  margin-bottom: 16px;
  padding-left: 36px;
  overflow-y: auto;
}
.attack .detal-show .main {
  height: 500px;
}
.attack .detal-show .item {
  height: 48px;
}
.attack .detal-show .image {
  border-radius: 50px;
  border: 2px solid #506f89;
}
.attack .detal-show .price {
  color: #b5b5b5;
}
.attack .detal-show .description {
  color: #8fbeef;
}
</style>