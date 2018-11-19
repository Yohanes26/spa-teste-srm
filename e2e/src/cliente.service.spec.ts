import { ClienteService } from './../../src/app/main/cliente/cliente.service';
import { TestBed, getTestBed } from '@angular/core/testing';
import { ClienteVO } from 'src/app/main/Model/clienteVO';

describe('Destinado ao Teste da Class Cliente Service', () => {

    describe('Cliente Service', () => {
        let injector: TestBed;
        let service: ClienteService;
        const cliente: ClienteVO = new ClienteVO();

        const uriGetListaJuros = 'https://java-teste-srm.herokuapp.com/juros';
        const uriSalvarCliente = 'https://java-teste-srm.herokuapp.com/cliente/salvar';

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [
                ],
                providers: [
                    service
                ]
            });

            injector = getTestBed();
            service = injector.get(ClienteService);

            cliente.nome = 'Yohanes';
            cliente.limiteCredito = '10000';
            cliente.risco = 'A';
            cliente.juros = '0';

        });

        describe('Verificando URL da Class', () => {
            it('Verifica se as URL´s estão com os valores corretos', () => {
                expect(service.uriGetListaJuros).toEqual(uriGetListaJuros);
                expect(service.uriSalvarCliente).toEqual(uriSalvarCliente);
            });
        });

        it('testa a chamada url de post', () => {
            service.salvarCliente(cliente).subscribe((res) => {
                expect(res).toBeTruthy();
                expect(res).toEqual(201);
            });
        });

        it('Testa a chamada url de Get', () => {
            service.getListaJuros().subscribe((res) => {
                expect(res).toBeTruthy();
            });
        });
    });
});
