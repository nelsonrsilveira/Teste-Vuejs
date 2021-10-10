<template>
  <div id="app">
    <div id="formu">
      <h1>{{ titulo }}</h1>
    <form>
      <label>{{ label1 }}</label>
      <br>
      <p>{{ nome_completo }}</p>
      <br>
      <label>{{ label2 }}</label>
      <br>
      <p>{{ cpf }}</p>
      <br>
      <label>{{ label3 }}</label>
      <br>
      <p>{{ numero }}</p>
      <label>{{ label4 }}</label>
      <br>
      <p>{{ estado }} - {{ cidade }}</p>
      <label>{{ label5 }}</label>
      <br>
      <p>{{ especialidade_principal }}</p>
      <label>{{ label6 }}</label>
      <p>{{ preco_consulta }}</p>
      <br>
      <label>{{ label7 }}</label>
      
      <input type="button" value="CADASTRAR PROFISSIONAL" id="botao-cadastrar">
      
    </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      titulo: 'Revisão do cadastro',
      label1: 'Nome completo',
      label2: 'CPF',
      label3: 'Número de celular ou telefone',
      label4:'Estado/Cidade',
      label5: 'Especialidade principal',
      label6: 'Preço da consulta',
      label7: 'Formas de pagamento da consulta',
      p:''
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
#botao-cadastrar{
  background-color: #FBDE40;
  width: 100px;
  color: #282828;
  border-radius: 14px;
  
}

</style>
