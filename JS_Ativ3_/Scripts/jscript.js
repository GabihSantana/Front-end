/* Criar os objetos para os elementos que serão manipulados */
const obj_num_largura = document.querySelector('#num_largura')
const obj_num_altura = document.querySelector('#num_altura')
const obj_div_poligono = document.querySelector('#div_poligono')
const obj_p_perimetro = document.querySelector('#p_perimetro')
const obj_zoom_in = document.querySelector('#zoom_in')
const obj_zoom_out = document.querySelector('#zoom_out')
const obj_img_zoom = document.querySelector('#img_zoom')
const obj_num_valor1 = document.querySelector('#num_valor1')
const obj_num_valor2 = document.querySelector('#num_valor2')
const obj_txt_resultado = document.querySelector('#txt_resultado')
const obj_bt_soma = document.querySelector('#bt_soma')
const bt_multiplica = document.querySelector('#bt_multiplica')
const obj_link_aumentar = document.querySelector('#link_aumentar')
const obj_link_diminuir = document.querySelector('#link_diminuir')
const obj_img_redimensiona = document.querySelector('#img_redimensiona')

/* Declarar variáveis */
let tam
let tam_img

/* Adicionar os eventos para chamar as funções */
obj_num_largura.addEventListener('change', FunRedimensionaPoligono)
obj_num_altura.addEventListener('change', FunRedimensionaPoligono)
obj_zoom_in.addEventListener('click', FunZoomIn)
obj_zoom_out.addEventListener('click', FunZoomOut)
obj_bt_soma.addEventListener('click', FunSoma)
bt_multiplica.addEventListener('click', FunMultiplica)
obj_link_aumentar.addEventListener('click', FunAumenta)
obj_link_diminuir.addEventListener('click', FunDiminui)

/* Declarar as funções para executar as ações */
function FunRedimensionaPoligono() {
    if ( obj_num_largura.value < 50 || obj_num_largura.value > 100 ||
         obj_num_altura.value < 50 || obj_num_altura.value > 100 ) {
        alert('Valores inválidos!')
    }
    else {
        obj_div_poligono.style.width = obj_num_largura.value + 'px'
        obj_div_poligono.style.height = obj_num_altura.value + 'px'
        let area = obj_num_largura.value * obj_num_altura.value
        obj_div_poligono.innerHTML = 'Área: ' + area + 'px'
        let perim = parseInt(obj_num_largura.value) + 
                    parseInt(obj_num_altura.value) + 
                    parseInt(obj_num_largura.value) + 
                    parseInt(obj_num_altura.value)
        obj_p_perimetro.innerHTML = 'Perímetro: ' + perim + 'px'
    }
}

function FunZoomIn() {
    tam = obj_img_zoom.width
    tam = tam + 30
    if (tam <= 160) {
        obj_img_zoom.style.width = tam + 'px'
        obj_zoom_out.style.filter = 'none'
    }
    else {
        obj_zoom_in.style.filter = 'blur(5px)'
    }
}

function FunZoomOut() {
    tam = obj_img_zoom.width
    tam = tam - 30
    if (tam >= 60) {
        obj_img_zoom.style.width = tam + 'px'
        obj_zoom_in.style.filter = 'none'
    }
    else {
        obj_zoom_out.style.filter = 'blur(5px)'
    }
}

function FunSoma() {
    if(obj_num_valor1.value == '' || obj_num_valor2.value == ''){
        alert('Preencha os campos com os valores!')
    }
    else {
        if(obj_num_valor1.value < 1 || obj_num_valor1.value > 50 || obj_num_valor2.value < 1 || obj_num_valor2.value > 50){
            alert('Valores inválidos!')
        }
        else {
            let res = parseInt(obj_num_valor1.value) + parseInt(obj_num_valor2.value)
            obj_txt_resultado.setAttribute('value', res)
        }
    }
}

function FunMultiplica() {
    if(obj_num_valor1.value == '' || obj_num_valor2.value == ''){
        alert('Preencha os campos com os valores!')
    }
    else {
        if(obj_num_valor1.value < 1 || obj_num_valor1.value > 50 || obj_num_valor2.value < 1 || obj_num_valor2.value > 50){
            alert('Valores inválidos!')
        }
        else {
            let res = obj_num_valor1.value * obj_num_valor2.value
            obj_txt_resultado.setAttribute('value', res)
        }
    }
}

function FunAumenta() {
    tam_img = img_redimensiona.width
    tam_img += 10
    if(tam_img <= 150){
        img_redimensiona.style.width = tam_img + 'px'
    }
    else {
        alert('Tamanho Máximo!')
    }
}

function FunDiminui() {
    tam_img = img_redimensiona.width
    tam_img -= 10
    if(tam_img >= 50){
        img_redimensiona.style.width = tam_img + 'px'
    }
    else {
        alert('Tamanho Mínimo!')
    }
}
