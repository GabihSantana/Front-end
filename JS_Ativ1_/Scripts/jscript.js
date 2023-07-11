/* Alterar Cor de Fundo */

/* 1º Criar os objetos para os elementos que serão manipulados: */
const obj_sel_fundo = document.querySelector('#sel_fundo')
const obj_div_cor_fundo = document.querySelector('#div_cor_fundo')

/* 2º Adicionar o evento para chamar a função: */
obj_sel_fundo.addEventListener('change', FunMudaCorFundo)

/* 3º Declarar a função para executar as ações: */
function FunMudaCorFundo() {
    obj_div_cor_fundo.setAttribute('class', obj_sel_fundo.value)
}


/* Alterar Cor da Fonte */

/* 1º Criar os objetos/arrays para os elementos que serão manipulados: */
const array_rb_fonte = document.querySelectorAll('[name="rb_fonte"]')
const obj_div_area_teste = document.querySelector('#div_area_teste')

/* 2º Adicionar os eventos para chamar a função: */
for ( obj_rb_fonte of array_rb_fonte ) {
    obj_rb_fonte.addEventListener('click', FunMudaCorFonte)
}

/* 3º Declarar a função para executar as ações: */
function FunMudaCorFonte() {
    for ( obj_rb_fonte of array_rb_fonte ) {
        if (obj_rb_fonte.checked) {
            obj_div_area_teste.classList.add(obj_rb_fonte.value)
        }
        else {
            obj_div_area_teste.classList.remove(obj_rb_fonte.value)
        }
    }
}

/* Decordar com Linha no Meio e Borda */
//1°: Objetos que serão manipulados: 
const obj_cb_linha_meio = document.querySelector('#cb_linha_meio')
const obj_cb_borda = document.querySelector('#cb_borda')

//2° Chamar as funções:
obj_cb_linha_meio.addEventListener('click', FunLinhaMeio)
obj_cb_borda.addEventListener('click', FunBorda)

//3° Declarar as funções: 
function FunLinhaMeio() {
    if ( obj_cb_linha_meio.checked ) {
        obj_div_area_teste.classList.add(obj_cb_linha_meio.value)
    }
    else {
        obj_div_area_teste.classList.remove(obj_cb_linha_meio.value)
    }
}
function FunBorda() {
    if (obj_cb_borda.checked) {
        obj_div_area_teste.classList.add(obj_cb_borda.value)
    }
    else {
        obj_div_area_teste.classList.remove(obj_cb_borda.value)
    }
}

/* Trocar o Texto */
//1° Criar os objetos para os elementos que serão manipulados:
const obj_txt_texto_novo = document.querySelector('#txt_texto_novo')
const obj_bt_troca_texto = document.querySelector('#bt_troca_texto')

//2° Chamar a função:
obj_bt_troca_texto.addEventListener('click', FunTrocaTexto)

//3° Declarar a função:
function FunTrocaTexto() {
    if(obj_txt_texto_novo.value != '') {
        obj_div_area_teste.innerHTML = 'Novo texto: ' + obj_txt_texto_novo. value
    }
    else {
        alert("Preencha algo no campo!")
    }
}

/* Alterar cor de fundo do cabeçalho */

//1°: Objetos que serão manipulados :
const obj_cor_fundo_cab = document.querySelector('#cor_fundo_cab')
const obj_header = document.querySelector('header')

//2°: Chamar a função

obj_cor_fundo_cab.addEventListener('change', FunMudaCorFundoCabec)

//3° Declarar a função:
function FunMudaCorFundoCabec() {
    obj_header.setAttribute('class', obj_cor_fundo_cab.value)
}

/* Alterar Imagem de Fundo */

//1° Objetos que serão manipulados
const obj_img_fundo = document.querySelector('#img_fundo')
const obj_fundo_teste = document.querySelector('#fundo_teste')

//2° chamar funções
obj_img_fundo.addEventListener('click', FunImagemFundo)

//3° Declarar funções
function FunImagemFundo() {
    if(obj_img_fundo.checked) {
        obj_fundo_teste.setAttribute('class', obj_img_fundo.value)
    }
    else {
        obj_fundo_teste.removeAttribute('class')
    }
}

/*Alterar a Opacidade de Imagem*/

//1° Objetos que serão manipulados: 
const obj_opacidade = document.querySelector('#opacidade')
const obj_opc_img_on = document.querySelector('#opc_img_on')

//2° Chamar funções:
obj_opacidade.addEventListener('click', FunOpacidade)

//3° Declarar as funções:
function FunOpacidade() {
    
    if(obj_opacidade.checked) {
        obj_opc_img_on.setAttribute('class', obj_opacidade.value)
    }
    else {
        obj_opc_img_on.removeAttribute('class')
    }
}

/*Trocar Fonte e Texto*/

//Objetos que serão manipulados 
const obj_font_1 = document.querySelector('#font_1')
const obj_font_2 = document.querySelector('#font_2')
const obj_fonte = document.querySelector('#fonte')

//Chamar as Funções: 
obj_font_1.addEventListener('click', FunTrocaFonteAudio)
obj_font_2.addEventListener('click', FunTrocaFonteMonoton)

//Declarar Funções:
function FunTrocaFonteAudio() {
    obj_fonte.setAttribute('class', obj_font_1.value)
    obj_fonte.innerText = 'Fonte: ' + obj_font_1.value;
}
function FunTrocaFonteMonoton() {
    obj_fonte.setAttribute('class', obj_font_2.value)
    obj_fonte.innerText = 'Fonte: ' + obj_font_2.value;
}