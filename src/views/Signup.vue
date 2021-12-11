<template>
    <form>
        <label >Username</label>
        <input v-model="korisnik" type="text" required>
        <span v-if="v$.korisnik.$error">{{v$.korisnik.$errors[0].$message}}</span><br>
        <label>Password (4 character minimum)</label>
        <input v-model="sifra" type="text" required >
        <span v-if="v$.sifra.$error">{{v$.sifra.$errors[0].$message}}</span><br>
        <label>Password confirm</label>
        <input v-model="sifraOpet" type="text" required>
        <span v-if="v$.sifraOpet.$error">{{v$.sifraOpet.$errors[0].$message}}</span><br>
        <label>Email</label>
        <input v-model="email" type="text" required>
        <span v-if="v$.email.$error">{{v$.email.$errors[0].$message}}</span><br>
        <button @click="submitForm">Register</button>
        
        
    </form>
    
</template>

<script>
import axios from 'axios';
import useValidate from '@vuelidate/core'
import {required, minLength,email,sameAs} from '@vuelidate/validators'

const baseURL = 'http://localhost:3000/users'

export default{
    data(){
        return{
            v$: useValidate(),
            korisnik:'',
            sifra:'',
            sifraOpet:'',
            email:''
        }
    },
    async created(){
        try{
            const res = await axios.get(baseURL);
            this.users = res.data;
        }catch(e){
            console.error(e);
        }
        },
    validations(){
        return{
        korisnik:{required},
        sifra:{required, minLength:minLength(6)},
        sifraOpet:{required, sameAs: sameAs(this.sifra)},
        email:{required,email}
        }
    },
    methods:{
        submitForm(){
            this.v$.$validate()
            if(!this.v$.$error){
                const res =axios.post(baseURL,{username: this.korisnik,password:this.sifra,email:this.email});
                this.users = [...this.users,res.data];
            alert('Submited')
            window.open('/')}
            else{
                alert('Form not subbmited')
            }
        }
    }
   

}
</script>

<style scoped>
form{
    max-width: 920px;
    margin: 30px auto;
    background: #01b4e4;
    padding: 40px;
    border-radius: 10px;
    font-weight: bold;
    text-transform: uppercase;
    
}
label{
    margin: 40px 0 10px;
    display: inline-block;
    color: white;
    
}
input{
display: block;
padding: 10px 6px;
width:100%;
border: none;
border-radius: 20px;
}
button{
    margin-top: 20px;
    padding: 20px;
    background:#90cea1 ;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 50px;
    text-transform: uppercase;
    cursor: pointer;
}
span{
 font-weight:normal;
text-transform:none;  
color:white;

}
</style>