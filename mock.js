const Koa = require('koa')
const Router = require('koa-router')
const cors = require('koa2-cors')
const app = new Koa()
const router = new Router({prefix: '/api'})


app.use(cors())

const tasks = ['全市郊野单元规划', '示范村郊野单元规划', '开展风貌导向培训', '指导应用风貌导则',
    '农业布局规划修编', '乡镇农业专业规划编制', '完善示范村建设计划', '指定示范村建设计划',
    '验收美丽乡村示范村', '首批乡村振兴示范村', '20个乡村振兴示范村', '落实建设用地周转指标',
    '出台相对集中居住方案', '优化集中居住方案', '指定集中居住推进计划', '建立集中居住项目库',
    '启动1万集中居住', '加强风貌引导', '加强支持政策落地', '修订住房建设管理方法'
]


router.get('/mingxi/:district', (ctx, next) => {
    const dataArray = []
    for (let i = 0; i < 77; i++) {
        const probability = Math.random() < 0.75
        if (probability) {
            dataArray.push({
                name: tasks[Math.floor(Math.random() * 20)], value: (Math.random() * 100).toFixed(2), index: i + 1
            })
        }
    }
    ctx.body = dataArray
})

router.get('/cydw', (ctx, next) => {
    ctx.body = [
        {name: '市发展改革委', value: (Math.random() * 100).toFixed(2)},
        {name: '市规划资源局', value: (Math.random() * 100).toFixed(2)},
        {name: '市交通委', value: (Math.random() * 100).toFixed(2)},
        {name: '市政委', value: (Math.random() * 100).toFixed(2)},
        {name: '市绿化市容局', value: (Math.random() * 100).toFixed(2)},
        {name: '市民政局', value: (Math.random() * 100).toFixed(2)},
        {name: '市农业农村委', value: (Math.random() * 100).toFixed(2)},
        {name: '市人力资源社会保障局', value: (Math.random() * 100).toFixed(2)},
        {name: '市水务局', value: (Math.random() * 100).toFixed(2)},
        {name: '市司法局', value: (Math.random() * 100).toFixed(2)},
        {name: '市委宣传部', value: (Math.random() * 100).toFixed(2)},
        {name: '市委政法委', value: (Math.random() * 100).toFixed(2)},
        {name: '市卫生健康委', value: (Math.random() * 100).toFixed(2)},
        {name: '市文化旅游局', value: (Math.random() * 100).toFixed(2)},
        {name: '市住房城乡建设管理委', value: (Math.random() * 100).toFixed(2)},
        {name: '市委组织部', value: (Math.random() * 100).toFixed(2)}
    ]
})
router.get('/zdrw', (ctx, next) => {
    let dataArray = []
    for (let i = 0; i < 77; i++) {
        const temp = []
        const strict = Math.random() > 0.75
        for (let j = 0; j < 10; j++) {
            if (strict) {
                temp.push(0)
                continue
            }
            const rand = Math.random()
            if (rand < 0.25) {
                temp.push(0)
            } else if (rand < 0.5) {
                temp.push(1)
            } else if (rand < 0.75) {
                temp.push(2)
            } else {
                temp.push(3)
            }
        }
        dataArray.push({name: tasks[Math.floor(Math.random() * tasks.length)], value: temp, order: i + 1})
    }
    ctx.body = dataArray
})
/**
 * 环状图的api
 *
 */
router.get('/snq/pie', (ctx, next) => {
    ctx.body = {
        finished: Math.floor(Math.random() * 100),
        processing: Math.floor(Math.random() * 100),
        delayed: Math.floor(Math.random() * 100)
    }
})

router.get('/snq/bar', (ctx,next) => {
    ctx.body = [
        {name: '奉贤', finished: Math.floor(Math.random() * 100), processing: Math.floor(Math.random() * 100), delayed: Math.floor(Math.random() * 100)},
        {name: '浦东', finished: Math.floor(Math.random() * 100), processing: Math.floor(Math.random() * 100), delayed: Math.floor(Math.random() * 100)},
        {name: '宝山', finished: Math.floor(Math.random() * 100), processing: Math.floor(Math.random() * 100), delayed: Math.floor(Math.random() * 100)},
        {name: '崇明', finished: Math.floor(Math.random() * 100), processing: Math.floor(Math.random() * 100), delayed: Math.floor(Math.random() * 100)},
        {name: '青浦', finished: Math.floor(Math.random() * 100), processing: Math.floor(Math.random() * 100), delayed: Math.floor(Math.random() * 100)},
        {name: '嘉定', finished: Math.floor(Math.random() * 100), processing: Math.floor(Math.random() * 100), delayed: Math.floor(Math.random() * 100)},
        {name: '松江', finished: Math.floor(Math.random() * 100), processing: Math.floor(Math.random() * 100), delayed: Math.floor(Math.random() * 100)},
        {name: '闵行', finished: Math.floor(Math.random() * 100), processing: Math.floor(Math.random() * 100), delayed: Math.floor(Math.random() * 100)},
        {name: '金山', finished: Math.floor(Math.random() * 100), processing: Math.floor(Math.random() * 100), delayed: Math.floor(Math.random() * 100)}
    ]
})

router.get('/snq/line', (ctx,next) => {
    ctx.body = {
        showTarget: true,
        target: Math.floor(Math.random() * 100),
        value : [
            {name: '奉贤', value: Math.floor(Math.random() * 100)},
            {name: '浦东', value: Math.floor(Math.random() * 100)},
            {name: '宝山', value: Math.floor(Math.random() * 100)},
            {name: '崇明', value: Math.floor(Math.random() * 100)},
            {name: '青浦', value: Math.floor(Math.random() * 100)},
            {name: '嘉定', value: Math.floor(Math.random() * 100)},
            {name: '松江', value: Math.floor(Math.random() * 100)},
            {name: '闵行', value: Math.floor(Math.random() * 100)},
            {name: '金山', value: Math.floor(Math.random() * 100)}
        ]
    }
})

app.use(router.routes())
    .use(router.allowedMethods());
const port = 8081
app.listen(port, () => {
    console.log(`listening on ${port} ...`)
})
