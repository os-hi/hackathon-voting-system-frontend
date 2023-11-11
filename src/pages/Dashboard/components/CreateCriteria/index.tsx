import { useState } from 'react';
import Criterion from '../Criterion';

const CreateCriteria = () => {
  const [showModal, setShowModal] = useState(false);
  const [newCriterion, setNewCriterion] = useState({
    name: '',
    description: '',
    guidelines: [],
  });

  const handleAddCriteria = (e) => {
    e.preventDefault()
    setShowModal(true);
  };

  const handleModalClose = (e) => {
    e.preventDefault()
    setShowModal(false);
  };

  const handleSaveCriterion = (e) => {
    e.preventDefault()
    // Perform any necessary validation before saving
    // For simplicity, let's assume the data is always valid
    // You can add more validation logic as needed

    // Save the new criterion to your state or perform any action you need
    console.log('Saving criterion:', newCriterion);

    // Close the modal and reset the newCriterion state
    setShowModal(false);
    setNewCriterion({ name: '', description: '', guidelines: [] });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCriterion((prevCriterion) => ({
      ...prevCriterion,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className='w-full flex flex-col'>
        <label htmlFor="">Create another criterion</label>
        <button onClick={handleAddCriteria}>Add new criterion</button>
      </div>

      {showModal && (
        <div className="modal w-full h-full flex flex-col z-10">
          <div className="modal-content">
            <span className="close w-full text-right" onClick={handleModalClose}>
              &times;
            </span>
            <h2>Create New Criterion</h2>
            <form className='w-full h-full flex flex-col'>
              <label htmlFor="name">Criterion Name:</label>
              <input
                className='border p-3'
                type="text"
                id="name"
                name="name"
                value={newCriterion.name}
                onChange={handleInputChange}
              />

              <label htmlFor="description">Description:</label>
              <textarea
                className='border p-3'
                id="description"
                name="description"
                value={newCriterion.description}
                onChange={handleInputChange}
              ></textarea>
              <button className='bg-purple text-white' type="button" onClick={handleSaveCriterion}>
                Save Criterion
              </button>
            </form>
          </div>
        </div>
      )}
      <Criterion />
    </div>
  );
};

export default CreateCriteria;
