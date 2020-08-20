var Gun = require("gun");

var gun = new Gun({
    peers: ["https://your-gun.herokuapp.com/gun"],
    radisk: false,
    localStorage: false,
});

exports.helloWorld = (req, res) => {
    gun.get("test").put({ cloud: "123123123" });
    let message = req.query.message || req.body.message || "Hello World!";
    res.status(200).send(message);
};
