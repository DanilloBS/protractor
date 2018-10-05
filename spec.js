browser.ignoreSynchronization = true;
const EC = protractor.ExpectedConditions; 
browser.driver.manage().window().maximize();
describe ("Fechando de pedido", function(){
    it ("Pagamento com boleto", function(){
        browser.driver.get("https://www.centauro.com.br/tenis-puma-hybrid-rocket-runner-masculino-924489.html?cor=19");
        var Tamanho = element(by.cssContainingText('.label', '40'));
        Tamanho.click();
        browser.wait(EC.elementToBeClickable(Tamanho), 60000);  
        var inserirCarrinho = element(by.css('.form-submitRed '));
        inserirCarrinho.click();
        var verificacao = element(by.css('.choose-more-bottom'));
        browser.wait(EC.elementToBeClickable(verificacao), 40000);
        expect($('.choose-more-bottom').getText()).toEqual("ESCOLHER MAIS PRODUTOS");
    })

});