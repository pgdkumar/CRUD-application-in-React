import React, { useState } from 'react'

function Home() {
    // form data and list
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [items, setItems] = useState([]);
    const [isEditing, setIsEditing] = useState(false);

    // form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // inserting value
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email) return;

        if (isEditing) {
            // Update the item
            setItems(items.map(item => (item.id === formData.id ? formData : item)));
            setIsEditing(false); // Exit edit mode
        } else {
            // length of the current list
            const newId = items.length + 1;

            // Add new item with the sequential ID to the list
            setItems([...items, { ...formData, id: newId }]);

        }

        // Clear the form
        setFormData({ name: '', email: '' });
    };

    // clearing the form submitting
    const handleClear = (e) => {
        e.preventDefault();
        setFormData({ name: '', email: '' });
        setIsEditing(false);
    };
    // Handle editing an item
    const handleEdit = (id) => {
        const itemToEdit = items.find(item => item.id === id);
        setFormData(itemToEdit); // Populate form with selected item data
        setIsEditing(true); // Enable edit mode
    };
    // Handle deleting an item
    const handleDelete = (id) => {
        const filteredItems = items.filter(item => item.id !== id);
        setItems(filteredItems); // Update the state by filtering out the item
    };
    return (
        <div className="container mt-4">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-12 border p-4">
                    <form onSubmit={handleSubmit}>
                        <h1>{isEditing ? 'Edit' : 'Register'}Form</h1>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        {/* <div className="mb-3">
                            <input
                                type="date"
                                className="form-control"
                                placeholder="Enter DOB"
                                name="text"
                            />
                        </div> */}
                        {/* <div className="mb-3">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter Age"
                                name="value"
                            />
                        </div> */}
                        {/* <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Qualification"
                                name="value"
                            />
                        </div> */}

                        {/* <div className="mb-3">
                            <textarea
                                className="form-control"
                                placeholder="Enter Address"
                                name="area"></textarea>
                        </div> */}
                        <div className="mt-4 text-center d-flex justify-content-between align-items-center">
                            <button type="submit" className="btn btn-primary">Add Details</button>
                            <button type="button" onClick={handleClear} className="btn btn-danger">Clear</button>
                        </div>
                    </form>
                </div>
                <div className='col-lg-8 cl-md-6 col-sm-12 '>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <div className="text-center d-flex justify-content-between align-items-center">
                                            <button type="submit" className="btn btn-success" onClick={() => handleEdit(item.id)}>Edit</button>
                                            <button type="submit" className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>

                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home