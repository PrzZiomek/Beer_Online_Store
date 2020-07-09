import { createDiv } from "../toManipulateDOM/basisHandlersToManipulateDOM"



export const createAndAddSentinel = (area) => {

   const sentinel = createDiv("sentinel");
   area.appendChild(sentinel)
}