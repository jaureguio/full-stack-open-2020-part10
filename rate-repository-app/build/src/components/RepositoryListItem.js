"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Text_1 = require("./Text");
var theme_1 = require("../theme");
var styles = react_native_1.StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white'
    },
    sectionContainer: {
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageContainer: {
        flex: 3
    },
    imageStyles: {
        borderRadius: 4,
        height: 48,
        width: 48
    },
    repoInfo: {
        flex: 13,
        justifyContent: 'space-between'
    },
    language: {
        padding: 4,
        color: 'white',
        backgroundColor: theme_1["default"].colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 4
    },
    repoStats: {
        justifyContent: 'space-around'
    },
    subheading: {
        fontSize: theme_1["default"].fontSizes.subheading,
        fontWeight: theme_1["default"].fontWeights.bold
    },
    boldText: {
        textAlign: 'center',
        paddingVertical: 4,
        fontWeight: theme_1["default"].fontWeights.bold
    },
    bodyText: {
        paddingVertical: 4,
        color: theme_1["default"].colors.secondary
    }
});
var RepositoryListItem = function (_a) {
    var repo = _a.repo;
    return (<react_native_1.View style={styles.mainContainer}>
      <react_native_1.View style={styles.sectionContainer}>
        <react_native_1.View style={styles.imageContainer}>
          <react_native_1.Image style={styles.imageStyles} source={{
        uri: repo.ownerAvatarUrl
    }}/>
        </react_native_1.View>
        <react_native_1.View style={styles.repoInfo}>
          <Text_1.default style={styles.subheading}>{repo.fullName}</Text_1.default>
          <Text_1.default style={styles.bodyText}>{repo.description}</Text_1.default>
          <Text_1.default style={styles.language}>{repo.language}</Text_1.default>
        </react_native_1.View>
      </react_native_1.View>
      <RepositoryStats stars={repo.stargazersCount} forks={repo.forksCount} reviews={repo.reviewCount} ratingAvg={repo.ratingAverage}/>
    </react_native_1.View>);
};
var RepositoryStats = function (_a) {
    var stars = _a.stars, forks = _a.forks, reviews = _a.reviews, ratingAvg = _a.ratingAvg;
    var parseThousands = function (value) {
        return value >= 1000
            ? Math.round(value / 100) / 10 + "k"
            : value;
    };
    return (<react_native_1.View style={[styles.sectionContainer, styles.repoStats]}>
      <react_native_1.View>
        <Text_1.default style={styles.boldText}>{parseThousands(stars)}</Text_1.default>
        <Text_1.default style={styles.bodyText}>Stars</Text_1.default>
      </react_native_1.View>
      <react_native_1.View>
        <Text_1.default style={styles.boldText}>{parseThousands(forks)}</Text_1.default>
        <Text_1.default style={styles.bodyText}>Forks</Text_1.default>
      </react_native_1.View>
      <react_native_1.View>
        <Text_1.default style={styles.boldText}>{parseThousands(reviews)}</Text_1.default>
        <Text_1.default style={styles.bodyText}>Reviews</Text_1.default>
      </react_native_1.View>
      <react_native_1.View>
        <Text_1.default style={styles.boldText}>{parseThousands(ratingAvg)}</Text_1.default>
        <Text_1.default style={styles.bodyText}>Rating</Text_1.default>
      </react_native_1.View>
    </react_native_1.View>);
};
exports["default"] = RepositoryListItem;
