public class App {
    public static void main(String[] args) throws Exception {
        
        ContaBancaria instanciandoContaBancaria = new ContaBancaria(); // criando o objeto

        //instanciando a classe e ela virando objeto:
        instanciandoContaBancaria.titular = "(nome do titular)";
        instanciandoContaBancaria.numeroDaConta = "(numero da conta)";
        instanciandoContaBancaria.saldo = 1505.60;

        System.out.format("O titular: %s com numero da conta %s tem: %.2f de saldo", instanciandoContaBancaria.titular, instanciandoContaBancaria.numeroDaConta, instanciandoContaBancaria.saldo);

    }
}
