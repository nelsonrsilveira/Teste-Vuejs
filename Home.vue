<template>
  <div id="app">
    <div id="formu">
      <h1>{{ titulo }}</h1>
      <p>{{ subtitulo }}</p>
      <b-form-group>
      <b-form-group label="Nome Completo*">
      <b-form-input 
      type="text" 
      v-model="nome_completo" 
      placeholder="Digite o nome completo" 
      size="sm"
      minlength="3" 
      maxlength="48"
      required>
      </b-form-input>
      </b-form-group>
      
      
      <b-form-group label="CPF*">
      <b-form-input 
      type="text" 
      v-model="cpf" 
      placeholder="Digite um CPF" 
      required>
      </b-form-input>
      </b-form-group>

      <b-form-group label="Número de celular*">
      <b-form-input type="text" 
      v-model="numero" 
      placeholder="(00) 0 0000-0000" 
      required>
      </b-form-input>
      </b-form-group>
      
        <b-row>
           <b-col cols="12" md="6" sm="12">
      <b-form-group label="Estado*">
      <b-form-select
        id="estado"
        v-model="estado"
        :options="estados"
        size="sm"
        required>
        </b-form-select>
        </b-form-group>
           </b-col>
           <b-col cols="12" md="3" sm="12">
      <b-form-group label="Cidade*">
      <b-form-select 
      v-model="cidade" 
      :options="cidades"
      id="cidade"
      variant="outline-danger">
      </b-form-select>
      </b-form-group>
          </b-col>
      </b-row>
        <!-- (count=1;count<=2;count++) -->
      <div>
          <a href="/sec.vue">PRÓXIMO</a>
      </div>
      <router-view></router-view>
    </b-form-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      titulo: 'Sobre o profissional',
      subtitulo: 'Dados do profissional',
      estados: [
        "Paraná",
        "Rio Grande do Sul",
        "Santa Catarina"
      ],
      cidades: [
        "Londrina",
        "Maringá",
        "Pelotas",
        "Porto Alegre",
        "Florianópolis",
        "Joinville"
      ],
      
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
p, b-form-group{
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
}
h1, p, b-form-group{
  padding:45px 70px 10px ;
  
}
b-form-input{
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
formu{
  
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
