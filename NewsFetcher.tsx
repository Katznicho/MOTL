// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
const TweetCard = ({ tweet }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>{tweet.text}</Text>
            {tweet.entities.media && (
                <Image
                    source={{ uri: tweet.entities.media[0].media_url_https }}
                    style={{ width: '100%', height: 200 }}
                />
            )}
            <View style={styles.stats}>
                <Text style={styles.stat}>{tweet.favorite_count} Likes</Text>
                <Text style={styles.stat}>{tweet.retweet_count} Retweets</Text>



            </View>
        </View>
    );
};

const NewsFetcher = () => {
    const [tweets, setTweets] = useState([]);
    const username = 'MbalwaOld';
    const BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAHU2MAEAAAAAeiYhs%2BFfvojDnKQ72e9WV2Ygoj8%3DodMVjW8sRaPqGxVe9rRoP4eNeckaV4QfhUZ5EbzsKRGaG4sx6m'
    useEffect(() => {
        const fetchTweets = async () => {
            try {
                const response = await fetch(
                    `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${username}&count=10`,
                    {
                        headers: {
                            Authorization: `Bearer ${BEARER_TOKEN}`,
                        },
                    }
                );
                const data = await response.json();
                console.log(response)
                setTweets(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTweets();
    }, [username]);

    return (

        <ScrollView>
            {tweets.map((tweet) => (
                <TweetCard key={tweet.id} tweet={tweet} />
            ))}
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        fontSize: 16,
        marginBottom: 8,
    },
    stats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    stat: {
        fontSize: 14,
        color: '#666',
    },
});
export default NewsFetcher;