jest.dontMock('../index');

const {renderIntoDocument, Simulate} = require('react-addons-test-utils');
const {findDOMNode} = require('react-dom');

const SearchBar = require('../index').default;

let element;
let onChange;
let onSubmit;
let searchTerm;

const renderSearchBar = (props) => {
  return findDOMNode(renderIntoDocument(SearchBar(props)));
};

describe('SearchBar', () => {
  it('render into document', () => {
    onChange = jest.genMockFunction();
    onSubmit = jest.genMockFunction();
    searchTerm = 'some text here';

    element = renderSearchBar({
      onChange,
      onSubmit,
      searchTerm
    });
  });

  it('should call onChange on input change', () => {
    const newSearchTerm = 'new text here';

    Simulate.change(element.querySelector('input'), {
      target: {value: newSearchTerm}
    });

    expect(onChange).toBeCalledWith(newSearchTerm);
  });

  it('should call onSubmit on button click', () => {
    Simulate.click(element.querySelector('button'));

    expect(onSubmit).toBeCalled();
  });
});
