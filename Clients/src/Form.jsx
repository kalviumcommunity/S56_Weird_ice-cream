import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Form.css';

function App() {
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();

  const [icecream,setIcecream] = useState({
    name : "",
    categories :"",
    type : "",
    description : "",
    organic : "",
    mainIngredients : "" ,
    img : " "
  })
  
  const onSubmit = async (data) => {
    console.log(data);

    try {
      await axios.post('http://localhost:3000/post', data)
      console.log("data posted successfully!")
      reset();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='contain'>
        <form className='form2' onSubmit={handleSubmit(onSubmit)}>
          <div className='app'>
            {Object.keys(errors).length > 0 && <p className='err'>Please fill out all required fields.</p>}

            <label>Ice Cream name :</label>
            <input
              className='inp'
              type='text'
              name='name'
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className='err'>{errors.name.message}</p>}

            <label>Categories:</label>
            <input
              className='inp'
              type='text'
              name='categories'
              {...register('categories', { required: 'Categories are required' })}
            />
            {errors.categories && <p className='err'>{errors.categories.message}</p>}

            <label>Type:</label>
            <input
              className='inp'
              type='text'
              name='type'
              {...register('type', { required: 'Type is required' })}
            />
            {errors.type && <p className='err'>{errors.type.message}</p>}

            <label>Description:</label>
            <textarea
              className='inp'
              name='description'
              {...register('description', { required: 'Description is required' })}
            />
            {errors.description && <p className='err'>{errors.description.message}</p>}

            <label>Organic:</label>
            <select
              className='inp'
              name='organic'
              {...register('organic', { required: 'Organic field is required' })}
            >
              <option value=''>Select</option>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
            {errors.organic && <p className='err'>{errors.organic.message}</p>}

            <label>Main Ingredients:</label>
            <input
              className='inp'
              type='text'
              name='mainIngredients'
              {...register('mainIngredients', { required: 'Main Ingredients are required' })}
            />
            {errors.mainIngredients && <p className='err'>{errors.mainIngredients.message}</p>}

            <label>Image</label>
            <input className='image' type='text'></input>

            <input type='submit' value='Submit' className='button' />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
