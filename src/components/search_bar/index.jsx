import React, {PropTypes} from 'react';

import {Input} from 'bluecore-ui-kit/lib/form/Input/Input';
import {Button} from 'bluecore-ui-kit/lib/form/Button/Button';
import {InputGroup} from 'bluecore-ui-kit/lib/form/Input/InputGroup';
import {ButtonGroup} from 'bluecore-ui-kit/lib/form/Button/ButtonGroup';

const SearchBar = (props) => {

  const {
    searchTerm,
    onChange,
    onSubmit
  } = props;

  return (
    <InputGroup>
      <Input
        value={searchTerm}
        onChange={onChange} />
      <ButtonGroup>
        <Button
          onClick={onSubmit}>
          Load Image
        </Button>
      </ButtonGroup>
    </InputGroup>
  );
};
SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SearchBar;
