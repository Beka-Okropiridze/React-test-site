// //unit ტესტირება. describe შიგნით ორი იდენტური გამოყენების სიტყვაა(it, test) განსხვავდება შიგნით ჩაწერილი სინტაქსით რომელს აირჩევ 
// // შენი ნებაა.
// import { render, screen, fireEvent } from '@testing-library/react';
// import { Button } from './button';

// describe("<Button />", () =>  {
//     // it("should render correctly")
//     // test("button should render correctly")
//     //assertion
//     it("should render using default props", () => {
//         const defaultProps = {
//             className: 'default-class',
//             type: 'button',
//             text: 'text',
//             onClick: jest.fn()
//         }
//         //act
//          render (<Button {...defaultProps} />);
//          fireEvent.click(screen.getByTestId('buttonElement'))

//          //test
//          expect(defaultProps.onClick).toBeCalledTimes()
//     })
// })


// appendErrors.test.js ბრალია რო აერორებს წასაშლელია ეს ტესტირება რო გაკეთდეს