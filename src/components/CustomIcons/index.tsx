import React, {FC} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const getIconName = (type: string) => {
  switch (type) {
    case 'AntDesign':
      return AntDesign;
    case 'FontAwesome5':
      return FontAwesome5;
    case 'Entypo':
      return Entypo;
    case 'EvilIcons':
      return EvilIcons;
    case 'FontAwesome':
      return FontAwesome;
    case 'Feather':
      return Feather;
    case 'Fontisto':
      return Fontisto;
    case 'Foundation':
      return Foundation;
    case 'Ionicons':
      return Ionicons;
    case 'MaterialCommunityIcons':
      return MaterialCommunityIcons;
    case 'MaterialIcons':
      return MaterialIcons;
    case 'Octicons':
      return Octicons;
    case 'Zocial':
      return Zocial;

    default:
      return AntDesign;
  }
};

interface iconProps {
  type: string;
  name: string;
  size?: number;
  color?: string;
  onPress?: () => void;
}

const CustomIcon: FC<iconProps> = ({type, ...props}: any) => {
  const FontIcon: any = getIconName(type);

  return <FontIcon type={type} {...props} />;
};

export default CustomIcon;
