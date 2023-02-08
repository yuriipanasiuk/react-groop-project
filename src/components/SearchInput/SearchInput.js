import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { getQuery } from 'redux/moviesSlice';
import {
  StyledForm,
  StyledFiels,
  Button,
  ButtonIcon,
} from './SearchInput.styled';

const initialValue = {
  text: '',
};

const SearchInput = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data, { resetForm }) => {
    dispatch(getQuery(data.text));
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
