module.exports = {
  /**
   * @api {get} /base/baoan/
   * @apiDescription 保安日记
   * @apiGroup 【base】
   * @apiParam {string} num 第几个
   * @apiVersion 0.0.0
   */
  async ['/']({ res, req, request, cheerio }) {
    const { num } = req.query
    const _note = note[parseInt(num) > note.length ? note.length - 1 : parseInt(num)]
    res.send({
      code: 200,
      data: {
        ..._note,
        week: ['日', '一', '二', '三', '四', '五', '六'][
          new Date(_note.date).getDay()
        ],
        weather: ['晴', '阴', '下雨了', '好大的风', '晴', '好多云', '阴'][
          new Date(_note.date).getDay()
        ],
      },
    })
  },
}

const note = [
  {
    title: '你对我真好',
    date: '2020-04-30',
    note:
      '看到你和一个帅哥吃饭，看起来关系很亲密的样子，你从来没告诉我你还有这么好的朋友，一定是怕我多想，你总是为我着想，你对我真好。',
  },
  {
    title: '万通筋骨贴',
    date: '2020-04-29',
    note:
      '你想我了吧？可以回我消息了吗？我买了万通筋骨贴，你运动一个晚上腰很疼吧？今晚早点回家，我炖了排骨汤，累了一个晚上吧，没事我永远在家等你。',
  },
  {
    title: '微信',
    date: '2020-04-28',
    note:
      '今天微信提醒我内存不足，我一个一个清理，只有和你的聊天记录还保留着，生怕不小心删掉。清理后，微信占用内存从16G变成36K。嗯，很好。36K里面有你的“早安个屁，滚”。',
  },
  {
    title: '星期八',
    date: '2020-04-27',
    note:
      '今天我问你，啥时候能主动找一下我，你说星期八，我的天啊 ，我异常的兴奋，等32号也没有关系，13月份也行，25点钟也是没有问题的，因为只要是你都可以的，毕竟有机会了嘛，开心，今天又是元气满满的一天！',
  },
  {
    title: '夜班',
    date: '2020-04-26',
    note:
      '今天我是夜班值班人员，去小区宵夜店买馒头做早餐，买了三个馒头加一碗免费的稀饭感觉很幸福，付钱的时候老板娘对我笑了笑，她可能觉得保安很有安全感吧。',
  },
  {
    title: '微博',
    date: '2020-04-25',
    note:
      '想你想得睡不着，把你微博从头到尾看了一遍，发现好几次你回复了别人 ，就没回复我，一想到你对待我的方式跟别人不一样 我就躲在被子里偷笑， 下个月也是依旧当舔狗的一天噢！加油 奥力给！',
  },
  {
    title: '充点卷',
    date: '2020-04-24',
    note:
      '昨天就为你充了710点卷，虽然知道你不会玩不知去向，但你说好看，你刚才说小号想要还想要一个，爱你的我还是满心欢喜的把剩下的100元伙食费又给你充了710，然后看到你小号并没有买，而是你送给了你的一个弟弟，你对弟弟真好，好有爱心，我感觉对你陷得很深了',
  },
  {
    title: '小熊饼干',
    date: '2020-04-22',
    note:
      '我跟保安队的小谢吵架了，因为他背着我把我的小熊饼干拿去给他女朋友吃了，其实我跟小谢关系挺好的，我完全舍得为他的爱情助攻，可他却背着我偷偷摸摸，有点委屈，小熊饼干是留给你吃的。over。 ​​​',
  },
  {
    title: '奶奶的手机',
    date: '2020-04-21',
    note:
      '这是我用我奶奶的手机给你发的信息.不要再拉黑我了.我真的没有手机联系你了.',
  },
  {
    title: '黄焖鸡',
    date: '2020-04-20',
    note:
      '她说，她想吃黄焖鸡。看了10个小时的视频教学，去给她做。后面，她告诉我晚上和同事一起去吃饭，不吃了。她果然是爱我的，还叫我先吃',
  },
  {
    title: '朋友圈点赞',
    date: '2020-04-19',
    note:
      '她终于给我发消息了“朋友圈第一条点赞谢谢”，我点开发现，她没有发朋友圈啊，页面上只有一条杠，她在试探我吗？这种神秘的期待感真是刺激。',
  },
  {
    title: '追剧',
    date: '2020-04-18',
    note:
      '以前每次找你你都说在打游戏，今天所有游戏都停服了，你可以和我聊天了吧？ 但是你说你还有剧要追。',
  },
  {
    title: '清明节快乐',
    date: '2020-04-17',
    note:
      '今天你找我玩游戏，连着输了10把。虽然你脸上看着不开心，但是还是对我说了句:”你个辣鸡，祝你清明节快乐！”。太开心了，这是你第一次送给我节日祝福。',
  },
  {
    title: '愚人节',
    date: '2020-04-16',
    note:
      '昨天是愚人节，你一整天都没有说你喜欢我，只是告诉我离你远一点。你一定是喜欢我，所以才不会在愚人节说你喜欢我。让我离你远一点，肯定也是反话。真伪我着想，我更爱你了。',
  },
  {
    title: '李新星是谁',
    date: '2020-04-15',
    note:
      '今天要写新的值班表了，我和队长倒班值班，我负责白天，他负责晚上，物业经理下午来的时候，看了看值班表，痴笑的问我：这个李新星是谁？真是可笑，那不就是我么？我都来好几天了，竟然还不知道我是谁？',
  },
  {
    title: '愚人节',
    date: '2020-04-14',
    note:
      '今天是愚人节，你和我说就算是愚人节我也不会说喜欢你的，你不配。 你对我真好，一句谎话都不肯和我说，我更喜欢你了',
  },
  {
    title: '蓝月亮',
    date: '2020-04-13',
    note:
      '今天看到你从超市拎了一大堆东西回来，我赶紧上前要帮你拎，你死活不肯。然后袋子破了，你拿蓝月亮洗衣液扔我，让我滚。蓝月亮，你是在告诉我，月亮代表你的心，然后你把心给了我么。真开心呢',
  },
  {
    title: '借钱',
    date: '2020-04-12',
    note:
      '今天你问我借了两千块钱，说要做个手术，你果然还是爱我的，不是我的孩子，你不要。',
  },
  {
    title: '穿睡衣的你',
    date: '2020-04-11',
    note:
      '12点队长过来准时交班，出去的车辆按喇叭我也没听到，只因我在监控中看到了穿睡衣出来倒垃圾的你，望你望的入神不由的傻笑了起来，队长过来骂我扣了我一天工资。我委屈，想抱你。你送的泡面真好吃。',
  },
  {
    title: '快餐',
    date: '2020-04-10',
    note:
      '今天队长骂我蠢，因为他问我哪有三百块的快餐，我平时最多吃十块钱的小面我想不通队长为什么吃那么好。不过他没太怪我，说以后带我去见见世面，我不知道快餐为什么那么贵，我只想下班后学完字典里的一百个字，那样我就可以给你写情书了。',
  },
  {
    title: '一卡车舔狗',
    date: '2020-04-09',
    note:
      '今天别人骂我了，说舔狗不配写日记，其实这个不算最难受的，最难受的是“你觉得她很有趣，她的一卡车舔狗也觉得”，突然好想问你我是第几号，但我害怕问了你就把我删了。',
  },
  {
    title: '量体温',
    date: '2020-04-08',
    note:
      '今天有个外来人拒绝量体温，我就不让他进，那个人带着口罩骂我，队长听见了，又罚了我五十，我委屈，我又想你了。',
  },
  {
    title: '学习',
    date: '2020-04-07',
    note:
      '我不知道为什么，小区整顿说要提升员工文化素质，于是让大家每天练习英语并打卡，可是我会说的只有几句，I like you，I love you ，I miss you very much.我会好好学英语的，然后说给你听，想你了，over。',
  },
  {
    title: '简介',
    date: '2020-04-06',
    note:
      '我是一个保安，爱吃小熊饼干，工资只够早餐，上班为了下班，整天郁郁寡欢， 一个看门的大憨憨。',
  },
  {
    title: '巡逻',
    date: '2020-04-05',
    note:
      '巡逻经过十七栋八单元的时候碰到一个业主背影很像你 好啦 其实是骗人的 十七栋没有八单元 但我心里一直都有你 我真的好想你',
  },
  {
    title: '按喇叭',
    date: '2020-04-04',
    note:
      '今天天气很好，晚上可以看到星星，看到星星的时候我总想到你，一想到你就入了迷，忘了开车闸，刚才一个业主要进来冲我按喇叭，还骂骂咧咧的，城里人怎么这样。我委屈，我想你。',
  },
  {
    title: '偷吃',
    date: '2020-04-03',
    note:
      '今天北京阳光挺好，保安亭还是冷冷的，值班站岗的时候我偷吃小熊饼干被队长看到了，他罚了我半天工资。好委屈，我想你！',
  },
  {
    title: '聊天',
    date: '2020-04-02',
    note:
      '你好像只会说一句话，我看了一下聊天记录，我们的聊天记录里，无论我说什么，你都只回一句：对方已开启好友验证，你还不是他(她)朋友',
  },
  {
    title: '动情',
    date: '2020-04-01',
    note: '今天想你想得有点走神，队长说动情的人不配当保安。我委屈，我想你。',
  },
  {
    title: '扛不住',
    date: '2020-03-31',
    note:
      '今天帮业主搬家，业主分了包烟给我并跟我说：“你挺有力量啊，啥都能扛呢！”我拍了拍自己的胳膊说“害，我还能扛水桶扛大米扛……”说着说着流下了泪水，是啊我什么都能扛，却扛不住想你… ​',
  },
  {
    title: '入职',
    date: '2020-03-30',
    note:
      '在我保安入职的那天，队长问我“你知道你要保护谁吗？” 我嘴上说的是业主，心里却是你',
  },
]
