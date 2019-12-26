<template>
    <table>
      <tr>
        <td>村名</td>
        <td>镇名</td>
        <td>区名</td>
      </tr>
      <tr v-for="(s,i) in current" :key="i">
        <td>{{ s.village }}</td>
        <td>{{ s.town }}</td>
        <td>{{ s.district }}</td>
      </tr>
    </table>
</template>

<script>
  const second = [
      {village: '同心村',town: '马桥镇',district: '闵行区'},
      {village: '赵家村',town: '华漕镇',district: '闵行区'},
      {village: '连名村',town: '川沙新镇',district: '浦东新区'},
      {village: '界浜村',town: '周浦镇',district: '浦东新区'},
      {village: '长达村',town: '航头镇',district: '浦东新区'},
      {village: '大河村',town: '老港镇',district: '浦东新区'},
      {village: '公平村',town: '泥城镇',district: '浦东新区'},
      {village: '联一村',town: '华亭镇',district: '嘉定区'},
      {village: '海星村',town: '罗泾镇',district: '宝山区'},
      {village: '天平村',town: '罗店镇',district: '宝山区'},
      {village: '聚源桥村',town: '月浦镇',district: '宝山区'},
      {village: '新强村',town: '金汇镇',district: '奉贤区'},
      {village: '浦秀村',town: '庄行镇',district: '奉贤区'},
      {village: '杨王村',town: '南桥镇',district: '奉贤区'},
      {village: '沈陆村',town: '南桥道',district: '奉贤区'},
      {village: '关港村',town: '西港街道',district: '奉贤区'},
      {village: '南杨村',town: '新浜镇',district: '松江区'},
      {village: '东夏村',town: '石湖荡镇',district: '松江区'},
      {village: '新义村',town: '枫泾镇',district: '金山区'},
      {village: '待泾村',town: '朱泾镇',district: '金山区'},
      {village: '和平村',town: '吕巷镇',district: '金山区'},
      {village: '山塘村',town: '廊下镇',district: '金山区'},
      {village: '张马村',town: '朱家角镇',district: '青浦区'},
      {village: '东庄村',town: '练塘镇',district: '青浦区'},
      {village: '徐姚村',town: '重固镇',district: '青浦区'},
      {village: '北双村',town: '港西镇',district: '崇明区'},
      {village: '新安村',town: '三星镇',district: '崇明区'},
      {village: '永乐村',town: '庙镇',district: '崇明区'},
  ]
    export default {
        name: "HangpaiTable",
        props: {
          startIndex: {
              type: Number,
              default: 0
          },
          endIndex: {
              type: Number,
              default: 28
          }
        },
        data: () => ({
            second: second,
            current: second.slice(0, 14)
        }),
        created() {
            this.current = this.second.slice(this.startIndex,this.endIndex)
        }
    }
</script>

<style lang="less" scoped>
table {
  font-size: .09rem;
  border: 1px solid #04f4fb;
  width: 20vw;
  text-align: center;
  margin: .2vw 1vw;
  tr {
    &:nth-child(odd) {
      background: transparent;
    }

    &:nth-child(even) {
      background: rgba(4, 244, 251, 0.2);
    }
    &:first-child td {
      font-weight: bold;
    }

  }
  td {
    padding: .19vw;
  }
}
</style>
