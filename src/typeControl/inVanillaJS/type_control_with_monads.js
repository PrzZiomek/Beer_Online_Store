import {Maybe} from '../../monads/Maybe/Maybe';
import {Identity} from '../../monads/Identity/Identity';
import { checkIfThisIsFunction, convertIfArgIsNotHtmlEl, convertIfArgIsNotText } from './helpersToTypeConverting';
import { createDivBefChecking, createImgElemBefChecking, createLinkToBefChecking, createTextBefChecking, createTitleBefChecking, createSpanElemFnBefChecking, createDivWithinElementBefChecking } from './functionsBeforeTypeChecking';



/*
    THIS IS AN ALTERNATIVE WAY TO TYPE CONTROL IN JAVASCRIPT WITH MONADS

    typeControl/inVanillaJS folder is detached from application flow.
*/



export const createSpanElem = (cl) => (txtContent) => (element) => 

        Maybe.of(createSpanElemFnBefChecking)
                      .map(checkIfThisIsFunction)        // if is true Maybe monad return Just functor, that return Maybe again. If is false monad return Nothing functor and this is where the whole operation is finished.
                      .chain(Identity)                   // after checking Maybe isn't longer needed, thus I change the category by chaining value (function in this case) with Identity monad.
                      .map(convertIfArgIsNotText(cl))    // then the value is mapped by conversions functions repeatedly, until each nested function will be called. 
                      .map(convertIfArgIsNotText(txtContent)) 
                      .map(convertIfArgIsNotHtmlEl(element))                                                                                                                       
                      .valueOf();                         // finally value is unwrapped from monad - value is 'flatten' - in other words, and createSpanElem function is called.

      
                        
                        
export const createDiv = (cl) => 

          Maybe.of(createDivBefChecking)
                      .map(checkIfThisIsFunction)
                      .chain(Identity)
                      .map(convertIfArgIsNotText(cl))  
                      .valueOf();




export const createTitle = (cl) => (txtContent) => (element) =>

        Maybe.of(createTitleBefChecking)
                  .map(checkIfThisIsFunction)
                  .chain(Identity)
                  .map(convertIfArgIsNotText(cl))  
                  .map(convertIfArgIsNotText(txtContent)) 
                  .map(convertIfArgIsNotHtmlEl(element))                                                                                                                       
                  .valueOf();

  
                  

export const createText = (cl) => (txtContent) => (element) =>

        Maybe.of(createTextBefChecking)
                  .map(checkIfThisIsFunction)
                  .chain(Identity)
                  .map(convertIfArgIsNotText(cl))  
                  .map(convertIfArgIsNotText(txtContent)) 
                  .map(convertIfArgIsNotHtmlEl(element))                                                                                                                       
                  .valueOf();




export const createDivWithinElement = (cl) => (txtContent) => (element) =>

        Maybe.of(createDivWithinElementBefChecking)
                  .map(checkIfThisIsFunction)
                  .chain(Identity)
                  .map(convertIfArgIsNotText(cl))  
                  .map(convertIfArgIsNotText(txtContent)) 
                  .map(convertIfArgIsNotHtmlEl(element))                                                                                                                       
                  .valueOf();




export const createImgElem = (cl) => (alt) => (src) => (element) => 

        Maybe.of(createImgElemBefChecking)
                  .map(checkIfThisIsFunction)
                  .chain(Identity)
                  .map(convertIfArgIsNotText(cl)) 
                  .map(convertIfArgIsNotText(alt)) 
                  .map(convertIfArgIsNotText(src)) 
                  .map(convertIfArgIsNotHtmlEl(element))                                                                                                                       
                  .valueOf();




export const createLinkTo = (cl) => (txtContent) => (path) => (element) => 

        Maybe.of(createLinkToBefChecking)
                  .map(checkIfThisIsFunction)
                  .chain(Identity)
                  .map(convertIfArgIsNotText(cl)) 
                  .map(convertIfArgIsNotText(txtContent)) 
                  .map(convertIfArgIsNotText(path)) 
                  .map(convertIfArgIsNotHtmlEl(element))                                                                                                                       
                  .valueOf();

                

