let { createCipheriv, createDecipheriv } = require('crypto');

const Blowfish = {
    encipher: (key, data) => {
        let cipher = createCipheriv('bf-ecb', key, '').setAutoPadding(false);
        data = cipher.update(data.swap32());

        return data.swap32();
    },

    decipher: (key, data) => {
        let decipher = createDecipheriv('bf-ecb', key, '').setAutoPadding(false);
        data = Buffer.concat([
            decipher.update(data.swap32()), decipher.final()
        ]);

        return data.swap32();
    }
};

module.exports = Blowfish;
