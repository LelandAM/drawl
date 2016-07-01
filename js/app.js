console.log("PUB NUB")

function publish() {

    pubnub = PUBNUB({
        publish_key : 'pub-c-2f04c2d4-2648-4b13-8024-4f59d7a95833',
        subscribe_key : 'sub-c-f6fd6dd4-3f01-11e6-9236-02ee2ddab7fe'
    })

    console.log("Subscribing..");
    pubnub.subscribe({
        channel : "hello_world",
        message : function (message, envelope, channelOrGroup, time, channel) {
            console.log(
                "Message Received." + "\n" +
                "Channel or Group : " + JSON.stringify(channelOrGroup) + "\n" +
                "Channel : " + JSON.stringify(channel) + "\n" +
                "Message : " + JSON.stringify(message) + "\n" +
                "Time : " + time + "\n" +
                "Raw Envelope : " + JSON.stringify(envelope)
            )
        },
        connect : pub
    })

    function pub() {
        console.log("Since we're publishing on subscribe connectEvent, we're sure we'll receive the following publish.");
        pubnub.publish({
            channel : "hello_world",
            message : "Hello from PubNub Docs!",
            callback : function(m){
                console.log(m)
            }
        })
    }
};
