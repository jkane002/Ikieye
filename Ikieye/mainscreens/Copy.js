<SafeAreaView style={styles.cardcontainer}>
    <HomeScreen_Stack />
    <TouchableOpacity
        style={styles.card}
        onPress={this.onPressGood}
    >
        <View style={styles.cardinner}>
            <Text style={styles.title_cards}>
                What you are good at
            </Text>
        </View>
    </TouchableOpacity>
    <TouchableOpacity
        style={styles.card}
        onPress={this.onPressWorld}
    >
        <View style={styles.cardinner}>
            <Text style={styles.title_cards}>
                What the world needs
            </Text>
        </View>
    </TouchableOpacity>
    <TouchableOpacity
        style={styles.card}
        onPress={this.onPressJobs}
    >
        <View style={styles.cardinner}>
            <Text style={styles.title_cards}>
                What you can be paid for
            </Text>
        </View>
    </TouchableOpacity>
</SafeAreaView >