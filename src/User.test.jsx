import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import User from "./User"


//let container = null


describe("The suite should test user name", ()=>{

    // beforeAll(()=> {

    //     container = document.createElement("div");
    //     document.body.appendChild(container);
    //   })
      
    //   afterEach(() => {
    //       //unmountComponentAtNode(container)
    //       container.remove();
    //       container = null
    //   })


    it("should return whatever stranger", () =>{
        //Arrange
        let container = document.createElement("div");
        document.body.appendChild(container);
        
        //Act
        act(() => {
            render(<User />, container)
        })
        
        //Assert
        expect(container.textContent).toBe("Whatever Stranger!")

        //Cleanup
        unmountComponentAtNode(container)
        container.remove();
        container = null

    })

    it("should return welcome to unit test", () =>{
       //Arrange
       let container = document.createElement("div");
       document.body.appendChild(container);

       act(() => {
           render(<User name="Dariye" />, container)
       })
       
       //Assert
       expect(container.textContent).toBe("Welcome to unit test, Dariye!")
        
    })
})