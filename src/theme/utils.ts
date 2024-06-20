import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {RFValue} from 'react-native-responsive-fontsize';
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');

export function responsiveSize(size: number) {
  return hp(size);
}

export function responsiveFont(size: number) {
  return RFValue(size);
}

export function sizeDimensions(size: number) {
  return Dimensions.get('window').height * (size / 1000);
}

export const widthWindow = width;
export const heightWindow = height;
