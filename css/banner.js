<script>
// JavaScript Document
var m=12; //随机显示图片的总数量
var n=Math.floor(Math.random()*m+1)
document.write ("<img src='/img/1"+n+".jpg' border=0 galleryimg=no>");
//图片保存在/banner/文件夹下，根据设置的图片总数量，分别放入10张从banner_01.gif到banner_10.gif的图片
//在执行这个JS时，它会随机显示从banner_01.gif到banner_10.gif的图片。
</script>