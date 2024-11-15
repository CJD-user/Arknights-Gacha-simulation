<template>  
  <div class="gong-gao-modal">  
    <div class="modal-overlay" @click="$emit('close')"></div>  
    <div class="modal-content">  
      <h2 style="width: 100%; background-color: #444444; color: white;">公告</h2>  
      <p>Arknights UI Remastered：H5 + CSS + Vue 复刻明日方舟抽卡模拟器</p>  
      <p>衍生自 <a href="https://github.com/mashirozx/arknights-ui" target="_blank">mashirozx/arknights-ui</a></p>  
      <p>如果您对于我有任何建议（包括使用Github的方式、写代码的格式、命名规范等等）请不吝赐教，谢谢。</p>  
      <h3 style="width: 100%; background-color: #444444; color: white;">主要实现了抽卡的功能</h3>  
      <ul>  
        <li><strong>好友</strong>：主界面设置，可设置博士昵称、等级、ID、代币数额、对话。</li>  
        <li><strong>干员</strong>：查看已寻访到的干员</li>  
        <li><strong>编队</strong>：调整已寻访到的干员立绘位置</li>  
        <li><strong>任务</strong>：可以重置数据</li>  
        <li><strong>干员寻访</strong>：抽卡抽卡抽卡.....(调高了出货率? ～ (∠・ω< )⌒★)</li>  
        <ul>  
          <li>抽卡ing You can：</li>  
          <li><strong>兑换合成玉</strong></li>  
          <li><strong>更换寻访干员</strong></li>  
          <li><strong>查看寻访记录</strong></li>  
          <li><strong>清除寻访记录</strong></li>  
          <li><strong>概率详情</strong></li>  
          <li><strong>单抽/十连抽</strong></li>  
        </ul>  
      </ul>  
      <p>Github page：<a href="https://github.com/CJD-user?tab=repositories" target="_blank">CJD-user</a></p>  
      <h3 style="width: 100%; background-color: #444444; color: white;">版权相关</h3>  
      <p>界面贴图素材都是游戏逆向出来的，仅供学习使用，请勿商用！</p>  
      <p>卡牌, UI素材都是自己PS的，仅供学习使用，请勿商用！</p>  
      <p>干员立绘素材都是明日方舟Wiki网拿的，仅供学习使用，请勿商用！</p>  
    </div>  
  </div>  
</template>  

<script>  
export default {  
  name: 'GongGao'  
}  
</script>  

<style scoped>  
.gong-gao-modal {  
  position: fixed;  
  top: 0;  
  left: 0;  
  right: 0;  
  bottom: 0;  
  display: flex;  
  justify-content: center;  
  align-items: center;  
  z-index: 1000;  
}  

.modal-overlay {  
  position: absolute;  
  top: 0;  
  left: 0;  
  right: 0;  
  bottom: 0;  
  background: rgba(0, 0, 0, 0.7);  
  
}  

.modal-content {  
  background: rgba(255, 255, 255, 0.8);  
  padding: 20px;  
  z-index: 1001;  
  max-width: 600px;  
  width: 100%;  
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);  
}  
</style>  