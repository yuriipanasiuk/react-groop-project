import { Formik } from 'formik';
import {
  StyledForm,
  StyledFiels,
  Button,
  ButtonIcon,
} from './SearchInput.styled';

const initialValue = {
  text: '',
};

const SearchInput = ({ onSubmit }) => {
  const handleSubmit = (data, { resetForm }) => {
    onSubmit(data);
    resetForm();
  };

  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      <StyledForm>
        <StyledFiels type="text" name="text" placeholder="Movie search" />
        <Button type="submit">
          <ButtonIcon size={20} />
        </Button>
      </StyledForm>
    </Formik>
  );
};

export default SearchInput;
