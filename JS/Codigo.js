// AQUI A URL DA API QUE VAMOS CONSUMIR 
const url = 'https://economia.awesomeapi.com.br/last/'

// VARIAVEL COM O CODIGO DAS MOEDAS - COINS(MOEDAS)
const coins = 'USD-BRL,EUR-BRL,BTC-BRL'

fetch(url + coins)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
       const dolarReal = data.USDBRL
       const euroReal = data.EURBRL
       const bitcoinReal = data.BTCBRL
       
        if(dolarReal){
            let data_atual_dolar = new Date(dolarReal.create_date)

            document.getElementById('title').innerHTML = dolarReal.name
            document.getElementById('thisdate').innerHTML = data_atual_dolar.toLocaleString()

            document.getElementById('maxvalue_Dolar').innerHTML=parseFloat(dolarReal.high).toLocaleString('pt-br',{style:'currency', currency: 'BRL'})
            document.getElementById('minvalue_Dolar').innerHTML=parseFloat(dolarReal.low).toLocaleString('pt-br',{style:'currency', currency: 'BRL'})
        }

        if(euroReal){
        
            let data_atual_euro = new Date(euroReal.create_date)

            document.getElementById('title_euro').innerHTML = euroReal.name
            document.getElementById('thisdate_euro').innerHTML = data_atual_euro.toLocaleString()

            document.getElementById('maxvalue_Euro').innerHTML=parseFloat(euroReal.high).toLocaleString('pt-br',{style:'currency', currency: 'BRL'})
            document.getElementById('minvalue_Euro').innerHTML=parseFloat(euroReal.low).toLocaleString('pt-br',{style:'currency', currency: 'BRL'})
        
        
        }

        if(bitcoinReal){
        
            let data_atual_bitcoin = new Date(bitcoinReal.create_date)

            document.getElementById('title_bitcoin').innerHTML = bitcoinReal.name
            document.getElementById('thisdate_bitcoin').innerHTML = data_atual_bitcoin.toLocaleString()

            document.getElementById('maxvalue_Bitcoin').innerHTML=parseFloat(bitcoinReal.high).toLocaleString('pt-br',{style:'currency', currency: 'BRL'})
            document.getElementById('minvalue_Bitcoin').innerHTML=parseFloat(bitcoinReal.low).toLocaleString('pt-br',{style:'currency', currency: 'BRL'})
        
        
        }
    })
   

    
    
    
    
    
    
   