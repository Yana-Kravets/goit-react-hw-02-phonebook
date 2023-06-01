import propTypes from 'prop-types';
import { Container, Label, Input } from './Filter.styled';

export const Filter = ({ filter, handleChange }) => (
  <Container>
    <Label>Find contacts by Name </Label>
    <Input
      type="text"
      name="filter"
      placeholder="Enter filter"
      value={filter}
      onChange={handleChange}
    />
  </Container>
);

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};