import { u as useRouter, b as useRoute } from './index.2c51eab4.js';
import { h } from './element-plus.fa662df5.js';

const _sfc_main = {
  setup() {
    const router = useRouter();
    const route = useRoute();
    router.replace(route.fullPath.replace(/^\/redirect/, ''));
  },
  render() {
    return h('div')
  },
};

export { _sfc_main as default };
