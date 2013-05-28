function self_reg(user, pw) {
    var connection = new Strophe.Connection('/http-bind');
    var wait = null;
    var hold = null;
    var callback = function(status) {
        if (status === Strophe.Status.REGISTER) {
            connection.register.fields.username = user;
            connection.register.fields.password = pw;
            connection.register.submit();
        } else if (status === Strophe.Status.REGISTERED) {
            console.log("registered!");
            connection.authenticate();
        } else if (status === Strophe.Status.CONNECTED) {
            console.log("logged in!");
        } else {
            console.log("status: " + status);
        }
    };
    //connection.register.connect("peng@philip-pc", callback, wait, hold);
}