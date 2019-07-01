
module.exports = {
  extends: ['airbnb-base'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
    },
    // 即使没有 babelrc 配置文件，也使用 babel-eslint 来解析
    requireConfigFile: false,
    // 仅允许 import export 语句出现在模块的顶层
    allowImportExportEverywhere: false,
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  rules: {
    // 打包时禁用
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-alert': process.env.NODE_ENV === 'production' ? 2 : 0,

    // 有时需要循环中重试请求，这种场景下可以使用await
    'no-await-in-loop': 'off',

    // 禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式或模版字符串中
    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: false,
        skipRegExps: true,
        skipTemplates: true,
      },
    ],

    // 在类的非静态方法中，需要对this引用: 不需要，太严格
    'class-methods-use-this': 'off',

    // 单个函数循环复杂度最高20
    complexity: ['error', { max: 20 }],

    // 链式调用的时候，点号必须放在第二行开头处，禁止放在第一行结尾处
    'dot-location': ['error', 'property'],

    // 有时一些列属性可以统一[""]书写
    'dot-notation': 'off',

    // 禁止使用 !! 、 ~ 、 ""+  等难以理解的运算符
    'no-implicit-coercion': ['error'],

    // 可以使用转义代码: 有时候更易读
    'no-useless-escape': 'off',

    // 注释里有TODO/FIXME 很常见
    'no-warning-comments': 'off',

    // 有时候会有条件加载情况
    'global-require': 'off',

    // 长数组书写习惯不强制,允许一行包含最多5个元素
    'array-element-newline': ['off', { multiline: true, minItems: 5 }],

    // api或文件名下划线很常见
    camelcase: 'off',

    // 注释首字母必须大写：没必要
    'capitalized-comments': 'off',

    // 函数必须有名字: 没必要
    'func-names': 'off',

    // jsx 中属性必须用双引号
    'jsx-quotes': ['error', 'prefer-double'],

    // 单行注释必须写在上一行：没必要, 可在行末尾
    'line-comment-position': 'off',

    // 限制单文件最大行数: 没必要
    'max-lines': 'off',

    // 回调函数嵌套禁止超过3层， 超过请用async await
    'max-nested-callbacks': ['error', 3],

    // new 后类名必须首字母大写， 首字母大写不必通过new声明
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
        properties: true,
      },
    ],

    // 链式调用必须换行： 没必要
    'newline-per-chained-call': 'off',

    // 禁止代码后添加内联注释： 没必要，不限制注释在哪写
    'no-inline-comments': 'off',

    // 使用 ... 而不是 Object.assign
    'prefer-object-spread': 'error',

    // 解构不换行的数量放宽到6个
    'object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 6, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 6, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 6, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 6, multiline: true, consistent: true },
    }],

    // 禁止使用 ++或 --，for循环最后的表达式内除外
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // 增加常见框架使用所需要的白名单
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'acc', // for reduce accumulators
        'accumulator', // for reduce accumulators
        'e', // for e.returnvalue
        'ctx', // for Koa routing
        'req', // for Express requests
        'request', // for Express requests
        'res', // for Express responses
        'response', // for Express responses
        '$scope', // for Angular 1 scopes
        'staticContext', // for ReactRouter context
        'Vue', // for Vue dev
        'state', // for vuex
      ],
    }],

    // parseInt() 默认基数10 非10才需要填写，10强制不需要填写
    radix: ['error', 'as-needed'],

    // 下划线命名关闭以适应一些特殊使用 如passport-sdk
    'no-underscore-dangle': 'off',
  },
};
