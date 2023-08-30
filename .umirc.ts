import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
  routes: [
    { exact: true, path: '/', component: './Users/index' },
    { exact: true, path: '/404', component: './Users/404' },
  ],
});
