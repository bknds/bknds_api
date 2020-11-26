import { StringUtil } from '../common/util/string_util'

module.exports = {
  /**
   * @api {get} /foxue/
   * @apiDescription 佛学辞典列表
   * @apiGroup 【佛学辞典】
   * @apiVersion 0.0.0
   */
  async ['/']({ res, request, cheerio }) {
    const html = await request.send(`http://www.tool5.com/foxue/`)
    const $ = cheerio.load(html)
    const result = $('ul.l4 li').toArray().map((item: any) => {
      const regx = /\.\/list_(.*?)\.html/
      return {
        id: $(item).find('a').attr('href').match(regx)[1],
        name: $(item).text().trim().replace(/\n/g,''),
      }
    })

    res.send({
      code: 200,
      data: {
        result
      },
    })
  },

  /**
   * @api {get} /weather/air/detail
   * @apiDescription 空气质量城市详情
   * @apiGroup 【天气】
   * @apiParam {string} id 城市id
   * @apiVersion 0.0.0
   */
  async ['/detail']({ req, res, request, cheerio }) {
    const { id } = req.query
    const html = await request.send(`http://m.86pm25.com/city/${id}.html`)
    const $ = cheerio.load(html)
    const index = $('.main_aqi').first().text().replace(/(-|\+).*/g, '').trim()
    const date = $('.main_aqi').eq(1).text().match(/(.{2})-(.{2}) (.{2}):(.{2})/)[0]
    const city = $('.main_title').text()
    const week = $('.list2').last().find('li').toArray().map((item: any) => {
      return {
        date: $(item).find('div').eq(0).text(),
        aqi: $(item).find('div').eq(1).text(),
        level: $(item).find('div').eq(2).text(),
      }
    })
    
    res.send({
      code: 200,
      data: {
        city,
        date,
        index,
        week
      },
    })
  },

  /**
   * @api {get} /weather/air/search
   * @apiDescription 通过城市名搜索
   * @apiGroup 【天气】
   * @apiParam {string} city 城市名
   * @apiVersion 0.0.0
   */
  async ['/search']({ req, res, request, cheerio }) {
    const { city } = req.query
    const html = await request.send(`http://www.86pm25.com/paiming.htm`)
    const $ = cheerio.load(html)
    const result = $('#goodtable tbody tr').toArray().map((item: any) => {
      const regx = /\/city\/(.*?)\.html/
      return {
        id: $(item).find('td').eq(1).find('a').attr('href').match(regx)[1],
        sort: $(item).find('td').eq(0).text().trim(),
        city: $(item).find('td').eq(1).text(),
        provinces: $(item).find('td').eq(2).text(),
        index: $(item).find('td').eq(3).text(),
        level: $(item).find('td').eq(4).text().replace(/\n/g,'').replace('污染',''),
      }
    })

    const arr = result.filter(item => {
      return item.city.indexOf(city) > -1
    })
    
    res.send({
      code: 200,
      data: {
        result: arr
      },
    })
  },

  /**
   * @api {get} /weather/air/pm25List
   * @apiDescription 获取PM2.5新闻列表
   * @apiGroup 【天气】
   * @apiVersion 0.0.0
   */
  async ['/pm25List']({ req, res, request, cheerio }) {
    const html = await request.send(`https://m.tianqi.com/zhuanti/PM25`)
    const $ = cheerio.load(html)
    const result = $('.ocetwo').eq(1).find('.diandian').toArray().map((item: any) => {
      const regx = /\/news\/(.*?)\.html/
      return {
        id: $(item).attr('href').match(regx)[1],
        title: $(item).text().replace(/\n/g,''),
      }
    })
    
    res.send({
      code: 200,
      data: {
        result
      },
    })
  },

  /**
   * @api {get} /weather/air/pm25Detail
   * @apiDescription 获取PM2.5新闻详情
   * @apiGroup 【天气】
   * @apiVersion 0.0.0
   */
  async ['/pm25Detail']({ req, res, request, cheerio }) {
    const { id } = req.query
    const html = await request.send(`https://m.tianqi.com/news/${id}.html`)
    const $ = cheerio.load(html)
    const title = $('.news_read h1').text().replace(/\n/g,'')
    const content = $('.news_read #readtxt').html()
    
    res.send({
      code: 200,
      data: {
        title,
        content: StringUtil.formatUnicode(content).replace('全国污染指数查询：http://www.tianqi.com/air/', ''),
      },
    })
  },
}
