module.exports = {
  extends: ['alloy', 'alloy/vue'],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    browser: true,
    node: true,
    es6: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly'
  },
  rules: {
    // 自定义你的规则
  }
}
