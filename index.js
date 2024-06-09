const express = require('express');

const server = express();

class aluno {
    constructor(ra, nome, email) {
        this.ra = ra;
        this.nome = nome;
        this.email = email;
    }
}

var aln1 = new aluno(202401, "Arthur", "arthur@fatec.sp.gov.br");
var aln2 = new aluno(202402, "Lucas", "lucas@fatec.sp.gov.br");
var aln3 = new aluno(202403, "Filipe", "filipe@fatec.sp.gov.br");

server.get('/alunos', (req,res) => {
    res.status(200).json({
        aln1,
        aln2,
        aln3,
    });
})

server.listen(80);