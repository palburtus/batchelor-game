import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import SinglePickDrag from '../components/singlePickDrag';

let container = null;
beforeEach(() => {
  
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})


it("renders with no selection", () => {

    act(() => {
        render(
            <DragDropContext droppableId="droppable">
                <SinglePickDrag />
            </DragDropContext>, container);
    });
    
    expect(container.textContent).toBe("No Selection Made");
    

});

it("renders with a selection", () => {

    act(() => {
        render(
            <DragDropContext droppableId="droppable">
                <SinglePickDrag pick="1"/>
            </DragDropContext>, container);
    });
    
    expect(container.textContent).toBe("No Selection Made");
    

});