function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'avatar_2.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'avatar_4.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'avatar_1.png')
            } else {
                //idoso
                img.setAttribute('src', 'avatar_3.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
             if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'mulher_crianca.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'mulher_jovem.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'mulher_adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'mulher_idoso.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}