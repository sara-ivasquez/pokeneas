const { Pokeneas } = require('../../database/Pokeneas');
const os = require('os');

class PokeneasApiController {
    static show(req, res) {
        const number = Math.floor(Math.random() * Pokeneas.length);
        const pokenea = Pokeneas[number];
        const { id, name, height, ability } = pokenea;

        let response = {
            id: id,
            name: name,
            height: height,
            ability: ability,
            hostName: os.hostname(),
            name: pokenea.name,
        };

        res.send(response);
    }
}

module.exports = PokeneasApiController;