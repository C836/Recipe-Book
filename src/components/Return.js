import { StyleSheet, TouchableOpacity } from "react-native"
import { Arrow } from "./../assets/img"

export function Return({returnFunction}) {
  return(
  <TouchableOpacity onPressIn={returnFunction} style={styles.wrapper} >
    <Arrow style={styles.arrow} width={30} height={30} />
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 12,
    left: 8
  },
  arrow: {
    color: "white",
    fontSize: 35
  }
})