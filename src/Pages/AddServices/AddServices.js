import { useState } from 'react';
import Swal from 'sweetalert2';
import useDynamicTitle from '../../hooks/useDynamicTitle';

const AddServices = () => {
    useDynamicTitle('Add Service');
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const price = form.price.value;
        const description = form.description.value;

        const service = {
            title,
            img,
            price,
            description
        }
        fetch('http://localhost:5000/home/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire(
                        'Great Job!',
                        'You added a service successfully',
                    )
                    form.reset();
                }

            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className='mb-10'>
            <form onSubmit={handleAddService}>
                <input className='input input-bordered w-full max-w-xs mt-4' type="text" name="title" id="" placeholder='Name of the Service' required />     <br />
                <input className='input input-bordered w-full max-w-xs mt-4' type="text" name="img" id="" placeholder='provide service photo url' required /> <br />
                <input className='input input-bordered w-full max-w-xs mt-4' type="text" name="price" id="" placeholder='service price' required /> <br />
                <textarea className='input input-bordered w-full max-w-xs mt-4' name="description" id="" placeholder='provide service description' required></textarea> <br />
                <input className='btn btn-primary mt-6 mb-10 max-w-xs' type="submit" value="Add a service" /> <br />
            </form>
        </div>
    );
};

export default AddServices;