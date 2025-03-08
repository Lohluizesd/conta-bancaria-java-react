package contabancariajavareact.backend.src;

public class ContaBancaria {

    //Atributos da classe ContaBancaria
    private String titular = "(nome do titular)";
    private String numeroDaConta = "(nome do titular)";
    private double saldo = 1560.80;
    
    public ContaBancaria(double saldoInicial) {
        this.saldo = saldoInicial;
    }
    
    
    // Metodos da classe
    public String exibirSaldo() { // Saldo
        return String.format("Seu saldo é de: %.2f", saldo);
    }

        public String transferir(ContaBancaria destino, double valor) { // Transferir
            if (valor > 0 && this.sacar(valor).startsWith("Saque")) {
                destino.depositar(valor);
                return "Transferência realizada com sucesso.";
            } else {
                return "Transferência não realizada.";
            }
            
        }
            public String sacar(double valorQueQuerSacar) {  // Saque
                if (valorQueQuerSacar <= 0) {
                    return "Valor inválido pra saque.";
                } else if  (valorQueQuerSacar > saldo) {
                    return "Saldo insuficiente para o saque.";
                } else {
                    saldo -= valorQueQuerSacar;
                    return String.format("Saque de R$ %.2f realizado com sucesso. Novo saldo: R$ %.2f", valorQueQuerSacar, saldo);
                }
            }

            public void depositar(double valor) { // depositar
                if (valor > 0) {
                    saldo += valor;
                }
            }
        
        }

    