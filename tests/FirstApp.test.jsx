import { getAllByText, render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
    
    // test('Debe hacer match con el snapshot', () => {

    //     const title = 'Prueba proptypes';                
    //     const { container } = render( <FirstApp title={title} /> )

    //     expect( container ).toMatchSnapshot();

    // });

    test('Debe mostrar el tiutlo en un h1', () => { 

        const title = 'Prueba proptypes';                
        const { container, getByText, getByTestId } = render( <FirstApp title={title} /> )
        expect( getByText( title ) ).toBeTruthy();

        // const h1 = container.querySelector( 'h1' );
        // expect(h1.innerHTML).toContain( title );
        
        expect( getByTestId('test-title').innerHTML ).toContain( title );
        
     });

     test('Debe mostrar el subtitulo enviado por props', () => { 

        render(<FirstApp title={title} subTitle='1234' /> );
        expect( getAllByText( subTitle ).length ).toBe(2);
      })

});