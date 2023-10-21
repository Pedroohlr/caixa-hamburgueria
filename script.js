const btn = document.querySelector('button');
    btn.addEventListener('click', ()=>{
        let qtde = document.querySelector('input[type=number]').value
        //preço de cada protudo por KG
        var paoUnPrice = 3; //unidade 
        var queijoUnPrice = 22;
        var hamburguerUnPrice = 15;
        var presuntoUnPrice = 25;
            
        //o peso de cada item q vai em cada lanche para fazer a soma
        var paoQtdUn = 1;
        var queijoQtdUn = 0.080;
        var hamburguerQtdUn = 0.100;
        var presuntoQtdUn = 0.050;

        //valor de cada protuto por kilo
        var paoQTD = qtde*paoQtdUn;
        var queijoQTD = qtde*queijoQtdUn;
        var hamburguerQTD = qtde*hamburguerQtdUn;
        var presuntoQTD = qtde*presuntoQtdUn;

        //valor final de cada produto
        var paoValorTotal = paoQTD*paoUnPrice;
        var queijoValorTotal = queijoQTD*queijoUnPrice;
        var hamburguerValorTotal = hamburguerQTD*hamburguerUnPrice;
        var presuntoValorTotal = presuntoQTD*presuntoUnPrice;

        var precoFinal = paoValorTotal + queijoValorTotal + hamburguerValorTotal + presuntoValorTotal;

        //Mostrara o resultado
        document.querySelector('.resultado').
        innerHTML = `
        <table border="1" style="margin: 0 auto;">
        <tr>
            <td>Seq</td>
            <td>Descrição</td>
            <td>Quantidade</td>
            <td>valor KG/UN</td>
            <td>valor total</td>
        </tr>
        <tr>
            <td>1</td>
            <td>Pão</td>
            <td>${paoQTD} UN</td>
            <td>R$${paoUnPrice}</td>
            <td>R$${paoValorTotal.toFixed(2)}</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Queijo</td>
            <td>${queijoQTD.toFixed(3)} KG</td>
            <td>R$${(queijoUnPrice).toFixed(3)} </td>
            <td>R$${queijoValorTotal.toFixed(2)}</td>
        </tr>
            <td>3</td>
            <td>Hamburguer</td>
            <td>${hamburguerQTD.toFixed(3)} KG</td>
            <td>R$${(hamburguerUnPrice).toFixed(3)}</td>
            <td>R$${hamburguerValorTotal.toFixed(2)}</td>
        <tr>
            <td>4</td>
            <td>Presunto</td>
            <td>${presuntoQTD.toFixed(3)} KG</td>
            <td>R$${(presuntoUnPrice).toFixed(3)}</td>
            <td>R$${presuntoValorTotal.toFixed(2)}</td>
        </tr>
        </table>
        
        <p>Então, para <strong>${qtde}</strong> lanches, ficara em um valor de <strong>R$${precoFinal.toFixed(2)}</strong>.
        `
})