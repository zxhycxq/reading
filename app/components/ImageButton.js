
import React, { PropTypes } from 'react';
import { ViewPropTypes, Image, TouchableOpacity } from 'react-native';
//图片类型按钮
const propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  source: PropTypes.object,
  style: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style
};

const ImageButton = ({ onPress, disabled, source, style, containerStyle }) =>
  (<TouchableOpacity
    style={containerStyle}
    onPress={onPress}
    disabled={disabled}
  >
    <Image style={style} source={source} />
  </TouchableOpacity>);

ImageButton.propTypes = propTypes;

ImageButton.defaultProps = {
  onPress() {},
  disabled: false
};

export default ImageButton;
