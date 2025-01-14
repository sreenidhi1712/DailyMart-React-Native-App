import React from 'react'
import { Modal, View } from 'react-native'

const CustomModal = ({children,isOpen,setIsOpen}) => {

    const Innerlayout = () => {
        return (
            <View className="flex flex-1 justify-center items-center bg-zinc-900/40 bg-opacity-50">
                {children}
            </View>
        )
    }
  return (
   <Modal
   animationType="slide"
    transparent={true}
    visible={isOpen}
    statusBarTranslucent={true}
onRequestClose={()=>setIsOpen(false)}
   >
      <Innerlayout/>
   </Modal>
  )
}

export default CustomModal