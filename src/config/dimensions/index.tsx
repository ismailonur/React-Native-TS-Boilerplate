import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-safearea-height';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const w = window.width;
const h = window.height;

const sbh = getStatusBarHeight();
const sbhi = getStatusBarHeight(true);

const W = (d: number) => w * d / 100;
const H = (d: number) => (h - sbhi) * d / 100;

export { window, screen, w, h, sbh, sbhi, W, H };