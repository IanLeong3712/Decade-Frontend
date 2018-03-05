import Vue from 'vue'
import SvgIcon from '~/components/SvgIcon'

const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('~/assets/svg', false, /\.svg$/);
const iconMap = requireAll(req);

Vue.component('svg-icon', SvgIcon);
