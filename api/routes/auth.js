
const express = require('express');
const router = express.Router();
const http = require('axios');
const github = require('../configs/github');

router.post('/accesstoken', (req, res, next) => {
    if (!req.body.code) return res.status(401).json({message:'code não fornecido'});

    const credentials = {
        client_id: github.client_id,
        client_secret: github.client_secret,
        code: req.body.code
    }

    const configs = {
        headers: {
            'Content-Type':'application/json',
            'Accept': 'application/json'
        }
    }

    http.post(github.token_url, credentials, configs)
        .then((response) => {
            if (response.data.error){
                switch (response.data.error) {
                    case 'bad_verification_code':
                        return res.status(401).json({message: 'o código enviado está errado ou inválido'})
                
                    default:
                        return res.status(401).json({message: 'ocorreu um erro na autenticação'})
                }
            } else {
                return res.status(response.status).json(response.data)
            }
        })
        .catch((error) => {
            return res.status(error.status).json(error)
        })
})

module.exports = router;
