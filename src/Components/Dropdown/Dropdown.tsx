import {
  Image,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import RenderHtml from 'react-native-render-html';
import {mockedData} from '../../api';
import {screenWidth} from '../../utils/commonStyles';
import {styles} from './styles';

interface Props {
    title: string;
    customStyles: StyleProp<ViewStyle>;
}
export const Dropdown = ({title, customStyles}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const tagsStyles = {
    p: {
      marginTop: 14,
      lineHeight: 30,
      fontSize: 16,
    },
  };

  const handlePress = () => setIsOpen((prevState) => !prevState);

  return (
    <>
      <TouchableOpacity
        style={[styles.container, customStyles]}
        onPress={handlePress}
      >
        <Text>
          {title}
        </Text>
        <Image
          style={isOpen ? styles.arrowUp : {}}
          source={require('../../assets/arrow.png')}
          resizeMode={'cover'}
        />
      </TouchableOpacity>
      {isOpen &&
          <RenderHtml
            source={{html: `${mockedData.utilisation}`}}
            tagsStyles={tagsStyles}
            contentWidth={screenWidth}
          />
      }
    </>
  );
};
