let {save} = require('./../db/index.js');
let {find} = require('./../db/index.js');

const postData = (data, callback) => {
    save(data, (err, res) => {
        if (err) {
            console.log('error in db.save')
        } else {
            console.log('successful save!');
            callback(null, res);
        }
    })

};

const getData = (callback) => {
    find((err, data) => {
        if (err) {
            callback(err)
        } else {
            callback(null, data)
        }
    });
};

module.exports = {
    postData,
    getData
};