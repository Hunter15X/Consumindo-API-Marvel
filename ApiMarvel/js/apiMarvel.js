$txtPersonagem = document.getElementById('txtBusca');
$btnPesquisa = document.querySelector('#btnPesquisa');
$nome = document.getElementById('nome_personagem');
$imagem = document.getElementById('imagem_personagem');
$descricao = document.getElementById('descricao_personagem');
$comics = document.getElementById('comics');
$caixa_personagem = document.getElementById('personagens');



const conexaoCmSite = () =>{
    const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${$txtPersonagem.value}&ts=436481&apikey=7ef24d4d46dada752f7ff657cc95db65&hash=f603b1a8dc2c91ea0094f701c70017c4&limit=100`;
    let x = fetch(url).then(res =>res.json()).then(res=>mostraPersonagens(res));
   console.log(x);
    return x;
}

$btnPesquisa.addEventListener("click", () => conexaoCmSite());
//////////// CONEXAO E DADOS/////////////////////

const mostraPersonagens = (x) =>{
    console.log(x.data.results[0]);
    mostraNome(x.data.results);
    mostraImagem(x.data.results);
    mostraDescric(x.data.results);
    pegaId(x.data.results);
    pegaComics(x.data.results);
    console.log(x.data.results)
    //MostraComics(x.data.results);
}

const mostraNome = (array) =>{ 
    // let nome = array.filter(array => array.name == $txtPersonagem.value);
    let nome = array[0].name;
    inserirNome(nome);
    console.log(nome);
}

const mostraImagem = (array) =>{
    //let nome = array.filter(array => array.name == $txtPersonagem.value);
    let soImagem = array[0].thumbnail.path;
    let soExtensao = array[0].thumbnail.extension;
    //console.log(soExtensao);
    inserirImagem(soImagem, soExtensao);
    //console.log(soImagem);
}

const mostraDescric = (array) =>{
    //let nome = array.filter(array => array.name == $txtPersonagem.value);
    let soDescric = array[0].description;
    if(soDescric == ""){
        let hq_not_hq = "Not Description";
        soDescric = hq_not_hq;
        inserirDescic(soDescric);
    } else{
        inserirDescic(soDescric);
        //console.log(soDescric); 
        }
}

const pegaId= (array) =>{
    let id = array[0].id;
    console.log(id);
    return id;
}

const pegaComics = (array) => {
    const url = `https://gateway.marvel.com/v1/public/characters/${pegaId(array)}/comics?&ts=436481&apikey=7ef24d4d46dada752f7ff657cc95db65&hash=f603b1a8dc2c91ea0094f701c70017c4&limit=100`;
    let y = fetch(url).then(res =>res.json()).then(res=>mostraComics(res));
   console.log(y);
    return y;
}

const mostraComics = (y) =>{
    let hqs = y.data.results;
    let hq1 = y.data.results[20];
    let hq2 = y.data.results[30];
    let hq3 = y.data.results[55];
    let hq4 = y.data.results[70];
    let hq5 = y.data.results[65];
    let hq6 = y.data.results[80];

    console.log(hq3,hq2,hq1);

    inserirComics(hq1,hq2,hq3,hq4,hq5,hq6);

}


// const MostraComics = (array) =>{
//     //let nome = array.filter(array => array.name == $txtPersonagem.value);
//     let soComics = array[0].comics.items.length;
//     for(i=0; i<soComics; i++){
//         console.log("teste");
//         let comics = array[0].comics.items[i];
//         console.log(comics);
//         inserirComics(comics);
//     }
//     console.log(soComics);
//     //console.log(array[0]['comics']);
// }    

//////////////////////////////////////////////

//////// Inserindo no HTML/////////////
const inserirNome = (res) =>{
    $nome.innerHTML = res;
}

const inserirImagem = (res, extension) =>{
    $imagem.innerHTML =`<img src="${res}.${extension}" width="500" height="500">`;
}

const inserirDescic = (res) =>{
    $descricao.innerHTML = res ;
}

const inserirComics = (res1, res2, res3, res4, res5, res6) =>{
    console.log(res1);

    // HQ 1 //
    let hq_nome = res1.title;
    console.log(hq_nome);

    let hq_image = res1.thumbnail.path;
    console.log(hq_image);

    let hq_img_extension = res1.thumbnail.extension;
    console.log(hq_img_extension);

    // let hq_descric = res1.description;
    // console.log(hq_descric);

    let hq_descric = "";
        if(hq_descric == ""){
            let hq_not_hq = "not description";
            hq_descric = hq_not_hq;
            console.log(hq_descric);
        }

        else{
            hq_descric = res1.description;
        }
    
    ////////////////////////////////////

        // HQ 2 //
        let hq_nome2 = res2.title;
        //console.log(hq_nome);
    
        let hq_image2 = res2.thumbnail.path;
        //console.log(hq_image);
    
        let hq_img_extension2 = res2.thumbnail.extension;
        //console.log(hq_img_extension);

        let hq_descric2 = "";
        if(hq_descric2 == ""){
            let hq_not_hq = "not description";
            hq_descric2 = hq_not_hq;
            console.log(hq_descric2);
        }

        else{
            hq_descric2 = res2.description;
        }
        //console.log(hq_descric);
        ////////////////////////////////////


        
        // HQ 3 //
        let hq_nome3 = res3.title;
        //console.log(hq_nome);
    
        let hq_image3 = res3.thumbnail.path;
        //console.log(hq_image);
    
        let hq_img_extension3 = res3.thumbnail.extension;
        //console.log(hq_img_extension);
    
        let hq_descric3 = "";
        if(hq_descric3 == ""){
            let hq_not_hq = "not description";
            hq_descric3 = hq_not_hq;
            console.log(hq_descric3);
        }

        else{
            hq_descric3 = res3.description;
        }
        //console.log(hq_descric);
        ////////////////////////////////////


            // HQ 4//
    let hq_nome4 = res4.title;
    console.log(hq_nome);

    let hq_image4 = res4.thumbnail.path;
    console.log(hq_image);

    let hq_img_extension4 = res4.thumbnail.extension;
    console.log(hq_img_extension);

    // let hq_descric = res1.description;
    // console.log(hq_descric);

    let hq_descric4 = "";
        if(hq_descric4 == ""){
            let hq_not_hq = "not description";
            hq_descric4 = hq_not_hq;
            console.log(hq_descric4);
        }

        else{
            hq_descric4 = res4.description;
        }
    
    ////////////////////////////////////

    // HQ 5 //
    let hq_nome5 = res5.title;
    console.log(hq_nome5);

    let hq_image5 = res5.thumbnail.path;
    console.log(hq_image5);

    let hq_img_extension5 = res5.thumbnail.extension;
    console.log(hq_img_extension5);

    // let hq_descric = res1.description;
    // console.log(hq_descric);

    let hq_descric5 = "";
        if(hq_descric5 == ""){
            let hq_not_hq = "not description";
            hq_descric5 = hq_not_hq;
            console.log(hq_descric5);
        }

        else{
            hq_descric5= res5.description;
        }
    
    ////////////////////////////////////

    // HQ 6 //
    let hq_nome6 = res6.title;
    console.log(hq_nome6);

    let hq_image6 = res6.thumbnail.path;
    console.log(hq_image6);

    let hq_img_extension6 = res6.thumbnail.extension;
    console.log(hq_img_extension6);

    // let hq_descric = res1.description;
    // console.log(hq_descric);

    let hq_descric6 = "";
        if(hq_descric6 == ""){
            let hq_not_hq = "not description";
            hq_descric6 = hq_not_hq;
            console.log(hq_descric6);
        }

        else{
            hq_descric6 = res6.description;
        }
    
    ////////////////////////////////////

    let html = 
`<div class="item_comics">
<div class="img_comics">
    <img src="${hq_image}.${hq_img_extension}" width="350" height="400">
    </div>
    <div class="nome_comics">
        ${hq_nome}
    </div>
    <div class="descricao_comics">
        ${hq_descric}
    </div> 
</div>

<div class="item_comics">
<div class="img_comics">
    <img src="${hq_image2}.${hq_img_extension2}" width="350" height="400">
    </div>
    <div class="nome_comics">
        ${hq_nome2}
    </div>
    <div class="descricao_comics">
        ${hq_descric2}
    </div> 
</div>

<div class="item_comics">
<div class="img_comics">
    <img src="${hq_image3}.${hq_img_extension3}" width="350" height="400">
    </div>
    <div class="nome_comics">
        ${hq_nome3}
    </div>
    <div class="descricao_comics">
        ${hq_descric3}
    </div> 
</div>

<div class="item_comics">
<div class="img_comics">
    <img src="${hq_image4}.${hq_img_extension4}" width="350" height="400">
    </div>
    <div class="nome_comics">
        ${hq_nome4}
    </div>
    <div class="descricao_comics">
        ${hq_descric4}
    </div> 
</div>

<div class="item_comics">
<div class="img_comics">
    <img src="${hq_image5}.${hq_img_extension5}" width="350" height="400">
    </div>
    <div class="nome_comics">
        ${hq_nome5}
    </div>
    <div class="descricao_comics">
        ${hq_descric5}
    </div> 
</div>

<div class="item_comics">
<div class="img_comics">
    <img src="${hq_image6}.${hq_img_extension6}" width="350" height="400">
    </div>
    <div class="nome_comics">
        ${hq_nome6}
    </div>
    <div class="descricao_comics">
        ${hq_descric6}
    </div> 
</div>

`;


    $comics.innerHTML  = html;

}    
