import React from 'react';
import {View, StyleSheet} from 'react-native';

interface CenterProps {
  children: React.ReactNode;
}

export const Center: React.FC<CenterProps> = ({children}) => {
  return <View style={styles.views}>{children}</View>;
};

const styles = StyleSheet.create({
  views: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
