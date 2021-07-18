'use strict'

module.exports = {
    e: (str) => {
        let P = new String()

        str.split('').forEach(e => {
            e = e.charCodeAt(0)

            new String(e).length % 3 == 0 ? P += e :
            new String(e).length % 3 == 2 ? P += '0' + e :
            new String(e).length % 3 == 1 ? P += '00' + e : P = P
        })

        return P
    },

    d: (str) => {
        return str.match(/.{1,3}/g).map((v, _) => String.fromCharCode(parseInt(v))).join('')
    }
}