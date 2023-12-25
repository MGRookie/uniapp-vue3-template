<template>
  <view class="content" p-2>
    <div>图标</div>
    <icon type="success" size="26" />
    <text>按钮</text>
    >
    <button type="reset" disabled>
      add line
    </button>
    <text class="mr-10">
      <text text-pink>轮播图</text>
      <uni-badge text="1"> </uni-badge>
    </text>
    <view class="uni-margin-wrap">
      <swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="2000" :duration="1000">
        <swiper-item>
          <view class="swiper-item uni-bg-red">A</view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item uni-bg-green">B</view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item uni-bg-blue">C</view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script setup lang="ts"></script>

<style></style>
