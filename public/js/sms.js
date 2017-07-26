var client = require('twilio')(
    'ACca9625d5004aecd333d236abdf521852',
    'c4e7a3fb6a522a073e18423a04ac181c'
);

exports.sendSMS = function(to, body) {
    client.messages.create({
        from: '19713402317',
        to: to,
        body: body
    }, function(err, message) {
        if(err) {
            console.error(err.message);
        }
    });
    return null;
}