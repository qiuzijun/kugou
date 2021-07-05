<template>
  <div class="Footer">
    <div class="footerTop">
      <div class="footerUl">
        <ul>
          <li
            v-for="item in footerTopSj"
            :key="item.id"
            @mouseover="footerTopSjOver(item.id)"
            @mouseout="footerTopSjOut()"
            @click="open(item.id)"
          >
            <a
              :href="item.url"
              target="_black"
              :class="{ aCor: index == item.id }"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footerBtn">
      <div class="footerBtnTop">
        <ul>
          <li
            v-for="item in footerBtn"
            :key="item.id"
            @mouseover="footerBtnTopOver(item.id)"
            @mouseout="footerBtnTopOut()"
          >
            <a
              :href="item.url"
              target="_black"
              :class="{ btnCor: msg == item.id }"
              >{{ item.name }}</a
            >
          </li>
        </ul>
      </div>
      <div class="footerBtnBtn">
        <p>
          我们致力于推动网络正版音乐发展，相关版权合作请联系copyrights@kugou.com
        </p>
        <p>
          信息网络传播视听节目许可证 1910564
          增值电信业务经营许可证粤B2-20060339&nbsp;&nbsp;&nbsp;
        </p>
        <p>
          广播电视节目制作经营许可证（粤）字第01270号&nbsp;&nbsp;&nbsp;&nbsp;营业性演出许可证穗天演440106026&nbsp;&nbsp;&nbsp;
        </p>
        <p>
          穗公网监备案证第44010650010167&nbsp;&nbsp;&nbsp;&nbsp;互联网药品信息服务资格证编号（粤）-非经营性-2012-0018
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;酷狗不良信息举报邮箱：jubao_music@kugou.net&nbsp;&nbsp;&nbsp;&nbsp;客服邮箱：kefu@kugou.net
        </p>
        <p>
          Copyright&nbsp;&nbsp;©&nbsp;&nbsp;2004-2021 KuGou-Inc.All Rights
          Reserved
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: -1,
      msg: -1,
      footerTopSj: [
        {
          id: 0,
          name: '关于酷狗',
          url: 'http://www.kugou.com/about/aboutus.html'
        },
        { id: 1, name: '监督举报' },
        {
          id: 2,
          name: '商务合作',
          url: 'https://www.kugou.com/about/business.html'
        },
        {
          id: 3,
          name: '广告服务',
          url: 'http://www.kugou.com/about/adservice.html'
        },
        {
          id: 4,
          name: '投诉指引',
          url: 'http://www.kugou.com/about/copyRightGuide.html'
        },
        {
          id: 5,
          name: '隐私政策',
          url: 'http://www.kugou.com/about/privacy.html'
        },
        {
          id: 6,
          name: '儿童隐私政策',
          url: 'http://www.kugou.com/about/children.html'
        },
        {
          id: 7,
          name: '用户服务协议',
          url: 'http://www.kugou.com/about/protocol.html'
        },
        { id: 8, name: '酷狗音乐人', url: 'http://www.kugou.com/imusic/' },
        { id: 9, name: '酷狗直通车', url: 'https://ztc.kugou.com' },
        {
          id: 10,
          name: '招聘信息',
          url: 'https://www.kugou.com/hr/kugouHr/dist/index.html'
        },
        {
          id: 11,
          name: '客服中心',
          url: 'https://www.kugou.com/shop/help/serviceCenter'
        },
        {
          id: 12,
          name: '用户体验计划',
          url:
            'http://survey.kugou.com/default/index/i=40CD7B8437008E65E67D82D9044C15C99C2E699859F51338'
        }
      ],
      footerBtn: [
        {
          id: 0,
          name: '白眉大侠',
          url: 'https://www.kugou.com/ts/album/4094342/'
        },
        {
          id: 1,
          name: '茅山捉鬼人',
          url: 'https://www.kugou.com/ts/album/18804082/'
        },
        {
          id: 2,
          name: '夜听FM',
          url: 'https://www.kugou.com/ts/album/2892259/'
        },
        {
          id: 3,
          name: '贝瓦故事',
          url: 'https://www.kugou.com/ts/album/6900644/'
        },
        {
          id: 4,
          name: '文武贝流行钢琴（1）',
          url: 'https://www.kugou.com/ts/album/37885807/'
        },
        {
          id: 5,
          name: '郭德纲',
          url: 'https://www.kugou.com/ts/album/38466967/'
        },
        {
          id: 6,
          name: '原创静心舒眠纯音乐',
          url: 'https://www.kugou.com/ts/album/36794329/'
        },
        {
          id: 7,
          name: '黑水公园',
          url: 'https://www.kugou.com/ts/album/9236581/'
        },
        {
          id: 8,
          name: '舒烟电台',
          url: 'https://www.kugou.com/ts/album/9239516/'
        },
        {
          id: 9,
          name: '晚安故事盒子',
          url: 'https://www.kugou.com/ts/album/3035508/'
        },
        {
          id: 10,
          name: '哄睡故事',
          url: 'https://www.kugou.com/ts/album/24771442/'
        },
        {
          id: 11,
          name: '隋唐演义',
          url: 'https://www.kugou.com/ts/album/43730639/'
        },
        {
          id: 12,
          name: '程一电台',
          url: 'https://www.kugou.com/ts/album/8090766/'
        },
        {
          id: 13,
          name: '宝宝巴土儿歌',
          url: 'https://www.kugou.com/ts/album/43588726/'
        },
        {
          id: 14,
          name: '这首歌，等你来听',
          url: 'https://www.kugou.com/ts/album/37690514/'
        },
        {
          id: 15,
          name: '斗罗大陆',
          url: 'https://www.kugou.com/ts/album/39843428/'
        },
        {
          id: 16,
          name: '水浒传',
          url: 'https://www.kugou.com/ts/album/8529420/'
        },
        {
          id: 17,
          name: '星空下的钢琴曲1',
          url: 'https://www.kugou.com/ts/album/940008/'
        },
        {
          id: 18,
          name: '盗墓笔记',
          url: 'https://www.kugou.com/ts/album/37191013/'
        },
        {
          id: 19,
          name: '抬棺匠',
          url: 'https://www.kugou.com/ts/album/18812582/'
        },
        {
          id: 20,
          name: '晚安故事盒子',
          url: 'https://www.kugou.com/ts/album/3035508/'
        },
        {
          id: 21,
          name: '无敌剑域',
          url: 'https://www.kugou.com/ts/album/10373617/'
        },
        {
          id: 22,
          name: '治疗师｜3D助眠解压沉浸式音乐',
          url: 'https://www.kugou.com/ts/album/39145099/'
        },
        {
          id: 23,
          name: '小猪佩奇',
          url: 'https://www.kugou.com/ts/album/36517838/'
        },
        {
          id: 24,
          name: '鬼吹灯经典系列',
          url: 'https://www.kugou.com/ts/album/2470525/'
        },
        {
          id: 25,
          name: '上门龙婿',
          url: 'https://www.kugou.com/ts/album/40025235/'
        },
        {
          id: 26,
          name: '超牛女婿',
          url: 'https://www.kugou.com/ts/album/39570266/'
        },
        {
          id: 27,
          name: '奇葩修真天才',
          url: 'https://www.kugou.com/ts/album/37741217/'
        },
        {
          id: 28,
          name: '治愈失眠:雷雨声',
          url: 'https://www.kugou.com/ts/album/37014995/'
        },
        {
          id: 29,
          name: '蕊希电台',
          url: 'https://www.kugou.com/ts/album/1078813/'
        }
      ]
    }
  },
  methods: {
    footerTopSjOver(index) {
      this.index = index
    },
    footerTopSjOut() {
      this.index = -1
    },
    open(index) {
      if (index == 1) {
        alert(
          '为了倡导诚信、正直、敬业、积极的企业文化，防治舞弊，欢迎您.对我司存在的舞弊行为通过邮箱进行举报。举报邮箱：jubao@kugou.com'
        )
      }
    },
    footerBtnTopOver(index) {
      this.msg = index
    },
    footerBtnTopOut() {
      this.msg = -1
    }
  }
}
</script>
<style>
.Footer {
  width: 100%;
  height: 438px;
  background-color: #2c323b;
}
.footerTop {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ccc;
}
.footerTop > .footerUl {
  width: 1100px;
  height: 50px;
  margin: 0 auto;
}
.footerTop > .footerUl ul {
  display: flex;
  justify-content: space-between;
}
.footerTop > .footerUl ul li {
  margin-top: 15px;
  font-size: 12px;
  float: left;
}
.footerTop > .footerUl ul li > a {
  color: #ccc;
  cursor: pointer;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
.footerTop > .footerUl ul li > .aCor {
  color: #0c8ed9;
}
.footerBtn {
  width: 100%;
  height: 388px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footerBtn > .footerBtnTop {
  width: 1100px;
  height: 100px;
  margin: 20px auto 0px;
}
.footerBtn > .footerBtnTop > ul li {
  font-size: 12px;
  margin-right: 30px;
  margin-bottom: 18px;
  float: left;
}
.footerBtn > .footerBtnTop > ul li > a {
  color: #ccc;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
.footerBtn > .footerBtnTop > ul li > .btnCor {
  color: #0c8ed9;
}
.footerBtn > .footerBtnBtn {
  width: 1100px;
  height: 230px;
  margin: 0 auto 10px;
}
.footerBtn > .footerBtnBtn p {
  font-size: 12px;
  color: #ccc;
  margin-bottom: 10px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
</style>
