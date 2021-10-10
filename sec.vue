<template>
  <div id="app">
    <div id="formu">
      <h1>{{ titulo }}</h1>
    <p>{{ subtitulo }}</p>
    <form>
      
      <label>{{ label1 }}</label>
      <br>
      <input type="" v-model="especialidade_principal" placeholder="Selecione a especialidade" id="nome">
      <br>
      <label>{{ label2 }}</label>
      <br>
      <input type="text" v-model="preco_consulta" placeholder="Valor" >
      <br>
      <label>{{ label3 }}</label>
      <br>
      <input type="radio" v-model="em_dinheiro" value="Em dinheiro">
      <br>
      <input type="radio" v-model="pix" value="Pix" >
      <br>
      <input type="radio" v-model="cartao_cre" value="Cartão de crédito" >
      <br>
      
      <input type="button" value="PRÓXIMO" id="botao-proximo">
      
    </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      titulo: 'Sobre o atendimento',
      subtitulo: 'Dados do atendimento',
      label1: 'Especialidade principal*',
      especialidade_principal: '',
      label2: 'Informe o preço da consulta*',
      preco_consulta:'',
      label3: 'Forma de pagamento da consulta*',
      em_dinheiro: '',
      label5: '',
      pix: '',
      cartao_cre:''
    }
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Comfortaa&family=Open+Sans&display=swap');
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, #botao-proximo{
  font-family: 'Comfortaa', cursive;
  color: #483698;
}
p, form{
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
}
h1, p, form{
  padding:45px 70px 10px ;
  
}
input{
  margin-bottom: 20px;
}
html{
  background: #FFE766;
  padding-right: 151px;
  padding-left: 150px; 
  padding-top: 56px;
}
p{
  color: #282828;
  font-weight: bold;
}

#formu{
  filter: drop-shadow(0px 0px 9px rgba(70, 70, 70, 0.5));
  z-index: 10;
  border-radius: 20px;
  background-color: #FFFFFF;
  text-align: left;
  min-width: 903px;
  min-height: 683px;
  
}
input{
  border-radius: 5px;
  border-color: #483698;
  min-height: 33px;
  min-width: 460px;
}
#nome{
  border-radius: 5px;
  border-color: #483698;
  min-height: 33px;
  min-width: 651px;
}
#local{
  border-radius: 5px;
  border-color: #483698;
  min-height: 33px;
  min-width: 325px;
  justify-content: space-between;
}
form{
  
  border-radius: 20px;
  
}
label, input{
  padding: 10px;
  
}
#botao-proximo{
  background-color: #483698;
  width: 100px;
  color: #FFFFFF;
  border-radius: 14px;
  
}

</style>
