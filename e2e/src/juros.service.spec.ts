import { ListaClienteService } from './../../src/app/main/lista-cliente/lista-cliente.service';
import { TestBed, getTestBed } from '@angular/core/testing';

describe('Destinado ao Teste da Class listaCliente Service', () => {

    describe('Lista Service', () => {
        let injector: TestBed;
        let service: ListaClienteService;

        const uriGetListaClientes = 'https://java-teste-srm.herokuapp.com/cliente';

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [
                ],
                providers: [
                    service
                ]
            });

            injector = getTestBed();
            service = injector.get(ListaClienteService);

        });

        describe('Verificando URL da Class', () => {
            it('Verifica se as URL´s estão com os valores corretos', () => {
                expect(service.uriGetListaClientes).toEqual(uriGetListaClientes);
            });
        });

        it('Testa a chamada url de Get', () => {
            service.getListaClientes().subscribe((res) => {
                expect(res).toBeTruthy();
            });
        });
    });
});
