<template>
  <div>
    <h4 class="title">执行用例</h4>
    <hr/>
    <el-form ref="edit" label-width="8em">
      <el-form-item label="用例名称:">
        {{name}}
      </el-form-item>
      <el-form-item style="margin-left: -3em;">
        <v-runner ref='runner' :width="width" :height="height" style="line-height: 20px; "
                  :finished="finished" :prepared="finished"></v-runner>
      </el-form-item>
      <el-form-item>
        <el-button type="info" @click="$router.go(-1)" icon="el-icon-back">返回</el-button>
        <el-input v-model="times" placeholder="运行次数" type="number" :max="1000" style="width: 88px"></el-input>
        <el-button type="success" @click="run(false)" :icon="disabled?'el-icon-loading':'el-icon-magic-stick'" :disabled="disabled">运行</el-button>
        <el-button type="success" @click="run(true)" :icon="disabled?'el-icon-loading':'el-icon-video-camera-solid'" :disabled="disabled">mock运行</el-button>
        <el-button type="success" @click="saveHistory" :icon="disabled?'el-icon-loading':'el-icon-video-camera-solid'" :disabled="disabled">保存执行结果</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getTestCaseDetailApi } from '@/config/api/inserv-api'

export default {
  data () {
    return {
      times: 1,
      width: 1000,
      height: 618,
      disabled: true,
      id: this.$route.params.id,
      name: null
    }
  },
  computed: {},
  methods: {
    init () {
      if (this.id) {
        getTestCaseDetailApi(this.id).then((res) => {
          this.name = res.name

          const data = { testCaseId: this.id, workflow: JSON.parse(res.workflow), presetParams: JSON.parse(res.presetParams) || [] }
          setTimeout(() => this.$refs.runner.setData(data), 800)
        })
      }
    },
    run (mock) {
      this.disabled = true
      // 最大1000次
      this.times = this.times > 1000 ? 1000 : this.times
      this.$refs.runner.run(this.times, mock)
    },
    saveHistory () {
      this.$refs.runner.saveHistory()
    },
    finished () {
      this.disabled = false
    }
  },
  components: {
    'v-runner': () => import('@/components/runner')
  },
  mounted () {
    this.width = this.$el.clientWidth - 100
    this.init()
  }
}
</script>

<style type="text/css" lang="scss" scoped>
  @import 'index.scss';
</style>
