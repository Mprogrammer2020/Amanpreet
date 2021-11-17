import React from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'
import Config from '../../utils/Config'
import { normalize } from '../../utils/Helpers'


interface props {
    visible: boolean;
    onPress?: () => void;
    onCencel: () => void;
}


const PostUsageModal = ({ visible, onCencel, onPress }) => {
    return (
        <Modal
            visible={visible}
            animationType='fade'
            onRequestClose={onCencel}
            transparent
        >
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <Text style={styles.headingText}>Post Usage Statistics?</Text>
                    <Text style={[styles.InfoText, { marginTop: verticalScale(10) }]}>Are you willing to share your usage</Text>
                    <Text style={[styles.InfoText]}>statistics to help improve the app?</Text>
                    <View style={[styles.bottomLine, { marginTop: verticalScale(15), marginBottom: verticalScale(10) }]}></View>
                    <TouchableOpacity onPress={onCencel}>
                        <Text style={styles.headingText}>Yes</Text>
                    </TouchableOpacity>
                    <View style={[styles.bottomLine, { marginTop: verticalScale(10), marginBottom: verticalScale(10) }]}></View>
                    <TouchableOpacity onPress={onCencel}>
                        <Text style={styles.headingText}>Not at this time</Text>
                    </TouchableOpacity>
                    <View style={[styles.bottomLine, { marginTop: verticalScale(10), marginBottom: verticalScale(10) }]}></View>
                    <TouchableOpacity onPress={onCencel}>
                        <Text style={styles.btnText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(25,25,25,0.7)',
        paddingHorizontal: scale(15),
    },
    container: {
        backgroundColor: 'white',
        width: '100%',
        // alignItems: "center",
        paddingVertical: verticalScale(15),
        borderRadius: scale(5)
    },
    headingText: {
        color: Config.colors.appButton,
        fontSize: normalize(18),
        fontFamily: Config.fonts.BOLD,
        alignSelf: 'center'
    },
    InfoText: {
        fontFamily: Config.fonts.MEDIUM,
        fontSize: normalize(13),
        marginLeft: scale(10),
        alignSelf: 'center'
    },
    bottomLine: {
        width: '100%',
        backgroundColor: Config.colors.DarkGray,
        height: scale(1),
        alignSelf: 'flex-end',
        marginTop: scale(15),

    },
    text: {
        color: Config.colors.appButton,
        fontSize: normalize(17),
        fontFamily: Config.fonts.MEDIUM
    },
    btnText: {
        color: "#00378B",
        fontSize: normalize(17),
        fontFamily: Config.fonts.MEDIUM,
        alignSelf: 'center'
    },
    dotStyle: {
        color: Config.colors.appButton,
        fontSize: normalize(20),
    }
})


export default PostUsageModal