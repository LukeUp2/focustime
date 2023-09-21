import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { colors } from '../utils/color'
import { fontSizes, spacing } from '../utils/size'


export const FocusHistory = ({ history }) => {

  if(!history || !history.length) return <Text style={styles.title}>Não focamos em nada no momento!</Text>

  const renderItem = ({ item }) => {
    return (
      <Text style={styles.item}>- {item}</Text>
    )
  }

  return (
    <View style={styles.container }>
      <Text style={styles.title}>Tarefas finalizadas:</Text>
      <FlatList 
        data={history}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1
  },  
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm
  },  
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    marginLeft: spacing.sm
  }
})