import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('Pruebas en <CounterApp />', () => {

    const initialValue = 0;
    
    
    test('Debe hacer match con el snapshot', () => { 
        const { container } = render( <CounterApp value={ initialValue } />);
        expect( container ).toMatchSnapshot();

     });

     test('Debe mostrar el valor inicial de 11 <CounterApp value={100}', () => { 

        render( <CounterApp value={0} /> );
        expect( screen.getByText(0) ).toBeTruthy();

      })

      test('Debe incrementar con el boton +1', () => { 
        
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('+1') );

        expect( screen.getByText('1') ).toBeTruthy();
    
       })

       test('Debe decrementar con el boton -1', () => { 
        
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('-1') );

        expect( screen.getByText('-1') ).toBeTruthy();
    
       })

       test('Debe funcionar el boton reset', () => { 

            render( <CounterApp value={ initialValue } /> );
            fireEvent.click( screen.getByText('+1') );
            fireEvent.click( screen.getByText('+1') );
            fireEvent.click( screen.getByText('+1') );
            // fireEvent.click( screen.getByText('Reset') );

            // expect( screen.getByText( initialValue )).toBeTruthy();

            screen.getByRole('button', { name: 'btn-reset' })

        })
     

});