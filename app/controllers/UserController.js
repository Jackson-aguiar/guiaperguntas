const { user } = require('../models');
const sha = require('sha256');

module.exports = class UserController {

    constructor(data){
        this.data = data;
        this.password = sha(data.password);
    }

    async create () {
        await user
        .create({
            name: this.data.name,
            email: this.data.email,
            password: this.password
        });
    }

    async update () {
        await user
        .update({
            name: this.data.name,
            email: this.data.email,
            password: this.password
        },
        {
            where: {
                id: this.data.id
            }
        });
    }

    async delete () {
        await user.destroy({
            where: {
                id: this.data.id
            }
        });
    }
}