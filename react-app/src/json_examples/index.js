/*
    /
    /home
 */

export const posts_json = [{
    "type": "post",
    "_id": 12342,
    "fname": "Me",
    "lname": "Smith",
    "username": "user",
    "user_id": 3434,
    "time": 1669582106,
    "music": {
        "type": "music",
        "_id": 8236,
        "music_type": "song",
        "song": "my really long song name that is a song",
        "album": "my really long album name that is a album",
        "artist": "my really long artist name that is a artist",
        "image": "album-cover1.jpeg",
        "music_link": "www.spotify.com",
        "music_id": 6666
    },
    "body": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
},{
    "type": "post",
    "_id": 123442,
    "fname": "Me",
    "lname": "Smith",
    "username": "user",
    "user_id": 3435,
    "time": 1669580000,
    "music": {
        "type": "music",
        "_id": 8237,
        "music_type": "artist",
        "artist": "my really long artist name that is a artist",
        "image": "album-cover2.jpeg",
        "music_link": "www.spotify.com",
        "music_id": 6666
    },
    "body": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
},{
    "type": "post",
    "_id": 123452,
    "fname": "Me",
    "lname": "Smith",
    "username": "user",
    "user_id": 3436,
    "time": 1669582000,
    "music": {
        "type": "music",
        "_id": 8238,
        "music_type": "album",
        "album": "my really long album name that is a album",
        "artist": "my really long artist name that is a artist",
        "image": "album-cover3.webp",
        "music_link": "www.spotify.com",
        "music_id": 6666
    },
    "body": "It is a long established fact"
}]

/*
    /search/*
    /profile/followers
    /profile/id/followers
    /profile/following
    /profile/id/following
 */

export const profile_items_json = [{
    "type": "profile_item",
    "_id": 42351,
    "fname": "Me",
    "lname": "Smith",
    "username": "user",
    "user_id": 3434
},{
    "type": "profile_item",
    "_id": 42361,
    "fname": "lady",
    "lname": "gaga",
    "username": "gaga",
    "user_id": 3435
},{
    "type": "profile_item",
    "_id": 42371,
    "fname": "the",
    "lname": "president",
    "username": "podus",
    "user_id": 3436
}]

let profiles_and_posts = profile_items_json.concat(posts_json)

/*
    /profile/*
 */

export const profile_json = {
    "type": "profile",
    "_id": 1235445,
    "fname": "Me",
    "lname": "Smith",
    "username": "user",
    "posts": 112,
    "followers": 3,
    "following": 2,
    "body": profiles_and_posts
}

/*
    /profile/*
 */

export const editable_profile_json = {
    "type": "edit_profile",
    "_id": 1235551,
    "fname": "Me",
    "lname": "Smith",
    "username": "user",
    "email": "myemail@email.com",
    "posts": 112,
    "followers": 3,
    "following": 2,
    "body": profiles_and_posts

}

/*
    /search/*
*/

export const musics_json = [{
    "type": "music",
    "_id": 2236,
    "music_type": "song",
    "song": "pink + white",
    "album": "blonde",
    "artist": "frank ocean",
    "image": "album-cover2.jpeg",
    "music_link": "www.spotify.com",
    "music_id": 6666
},{
    "type": "music",
    "_id": 2237,
    "music_type": "album",
    "album": "igor",
    "artist": "tyler, the creator",
    "image": "album-cover1.jpeg",
    "music_link": "www.spotify.com",
    "music_id": 6667
},{
    "type": "music",
    "_id": 2238,
    "music_type": "artist",
    "artist": "my really long artist name that is a artist. again my really long artist name that is a artist",
    "image": "album-cover3.webp",
    "music_link": "www.spotify.com",
    "music_id": 6668
}]

/*
    /details/*
*/

export const music_detailed_json = {
    "type": "music_detailed",
    "_id": 123336,
    "music_type": "song",
    "song": "my really long song name that is a song. again my really long song name that is a song",
    "album": "my really long album name that is a album. again my really long album name that is a album",
    "artist": "my really long artist name that is a artist. again my really long artist name that is a artist",
    "image": "album-cover1.jpeg",
    "music_link": "www.spotify.com",
    "posts": posts_json
}



