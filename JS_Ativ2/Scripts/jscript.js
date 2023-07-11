/* Mudar a Figura (Redes Sociais) */

/* 1º Criar os objetos para os elementos que serão manipulados: */
const obj_sel_rede_social = document.querySelector('#sel_rede_social')
const obj_img_rede_social = document.querySelector('#img_rede_social')
const obj_p_rede_social = document.querySelector('#p_rede_social')

/* 2º Adicionar o evento para chamar a função: */
obj_sel_rede_social.addEventListener('change', FunMudaFigura)

/* 3º Declarar a função para executar as ações: */
function FunMudaFigura(){
    obj_img_rede_social.setAttribute('src', 'Imagens/' + 
                                obj_sel_rede_social.value + '.png')
    obj_img_rede_social.setAttribute('alt', obj_sel_rede_social.value)
    obj_img_rede_social.setAttribute('title', obj_sel_rede_social.value)
    obj_p_rede_social.innerHTML = 'Logo ' + obj_sel_rede_social.value
}


/*  Adicionar Figuras  */

/* 1º Criar os objetos/arrays para os elementos que serão manipulados: */
const array_img_figuras = document.querySelectorAll('.figuras')
const obj_div_adiciona_figura = document.querySelector('#div_adiciona_figura')

/* 2º Criar novos objetos para serem manipulados: */
const obj_img_nova = document.createElement('img')
const obj_input_novo = document.createElement('input')

/* 3º Adicionar os eventos para chamar a função: */
for ( obj_img of array_img_figuras ) {
    obj_img.addEventListener('click', 
        function() { FunAdicionaFigura(this.src, this.alt) })
}

/* 4º Declarar a função para executar as ações: */
function FunAdicionaFigura(par_src, par_alt) {
    obj_img_nova.setAttribute('src', par_src)
    obj_img_nova.setAttribute('alt', par_alt)
    obj_img_nova.setAttribute('title', par_alt)
    obj_div_adiciona_figura.appendChild(obj_img_nova)

    obj_input_novo.setAttribute('type', 'text')
    obj_input_novo.setAttribute('disabled', 'true')
    obj_input_novo.setAttribute('value', par_alt)
    obj_input_novo.setAttribute('class', 'novo_input')
    obj_div_adiciona_figura.appendChild(obj_input_novo)
}


/* Preencher Tabela */

/* 1º Criar os objetos/arrays para os elementos que serão manipulados: */

const array_td = document.querySelectorAll('#tab_principal td')
const obj_tab_vazia = document.querySelector('#tab_vazia')
const obj_caption_vazia = document.querySelector('#tab_vazia caption')
const obj_prog_tab_vazia = document.querySelector('#prog_tab_vazia')

/* 2º Declarar variável para controlar a quantidade de linhas na tabela nova. Iniciar com ZERO. */
let contador_linhas = 0

/* 3º Adicionar os eventos para chamar as funções: */
for ( obj_td of array_td ) {
    obj_td.addEventListener('click', 
                    function() { FunPreencheTabela(this.innerText) } )
}

/* 4º Declarar a função para executar as ações: */
function FunPreencheTabela(par_text) {
    if ( contador_linhas < 5) {
        const obj_tr_novo = document.createElement('tr')
        const obj_td_novo = document.createElement('td')
        obj_td_novo.innerText = par_text
        obj_tr_novo.appendChild(obj_td_novo)
        obj_tab_vazia.appendChild(obj_tr_novo)
        contador_linhas++
        obj_caption_vazia.innerText = 
            'Tabela com ' + contador_linhas + ' linha(s)'
        obj_prog_tab_vazia.value = contador_linhas 
    }
    else {
        alert('Tabela cheia!')
    }
}

/* Mudar a Figura (Linguagens de Programação) */

//1° Criar os objetos/arrays para os elementos que serão manipulados
const array_Ling_web = document.querySelectorAll('[name= "Ling_web"]')
const obj_img_ling = document.querySelector('#img_ling')
const obj_pre_prog = document.querySelector('#pre_prog')

//2° Chamar as funções 
for (obj_Ling_web of array_Ling_web){
    obj_Ling_web.addEventListener('click', FunMudaImgLingProg)
}

//3° Declarar as funções
function FunMudaImgLingProg() {
    for (obj_Ling_web of array_Ling_web){

        if (obj_Ling_web.checked) {
            obj_img_ling.setAttribute('src', 'Imagens/' + obj_Ling_web.value + '.png')
            
            obj_img_ling.setAttribute('alt', obj_Ling_web.value)
            obj_img_ling.setAttribute('title', obj_Ling_web.value)
        
            obj_pre_prog.innerText = 'Logo ' + obj_Ling_web.value
        }
    }
}

/* Preencher Lista */

//Objetos/arrays que serão manipulados:
const obj_array_lista_principal_li = document.querySelectorAll('#lista_principal li')
const obj_ul_lista_vazia = document.querySelector('#ul_lista_vazia')
const obj_p_lista_vazia = document.querySelector('#p_lista_vazia')
const obj_prog_lista = document.querySelector('#prog_lista')

//Declarar a variável para controlar a quantidade de itens na lista nova

let itens_lista = 0


//Adicionar eventos para chamar as funções
for (obj_lista_principal_li of obj_array_lista_principal_li) {
    obj_lista_principal_li.addEventListener('click', function() { FunPreencheLista(this.innerText) })
}

//Declarar Função 
function FunPreencheLista(par_text) {

    if(itens_lista < 6){
        const obj_lista_principal_li_novo = document.createElement('li')
        obj_lista_principal_li_novo.innerText = par_text
        obj_ul_lista_vazia.appendChild(obj_lista_principal_li_novo)
        itens_lista++
        obj_p_lista_vazia.innerText = 'Lista com ' + itens_lista + ' item(ns)' 
        obj_prog_lista.value = itens_lista
    }
    else{
        alert('Lista Cheia!')
    }
}