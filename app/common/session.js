const ls = require("~/common/ls");
exports.setConfig = function (platform) {
    ls.setString("version", "1.0.0");
    ls.setNumber("pag", 20);
    ls.setString("platform", platform);
    ls.setString("home", "viiaboard/viiaboard");
    ls.setString("noimg", "~/images/no_image");
    ls.setString("noavatar", "~/images/avatar");
    ls.setString("aws", "https://s3.amazonaws.com/");
    ls.setString("connection", "https://api.viiamonitoring.com/");
};
exports.deleteConfig = function () {
    if (ls.getBool("isRecord")) {
        const user = ls.getString("user");
        const pass = ls.getString("pass");
        ls.clear();
        ls.setBool("isRecord", true);
        ls.setString("user", user);
        ls.setString("pass", pass);
    } else {
        ls.clear();
    }
};
