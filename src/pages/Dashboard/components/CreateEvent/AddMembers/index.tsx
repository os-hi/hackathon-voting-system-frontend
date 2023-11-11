import { useState } from 'react';

const AddMembers = () => {
  const [squadLeaders, setSquadLeaders] = useState(['']); // Initial state with one empty input field
  const [panelists, setPanelists] = useState(['']);
  const handleAddLeader = (e) => {
    e.preventDefault()
    setSquadLeaders([...squadLeaders, '']); // Add a new empty input field
  };

  const handleLeaderChange = (index, value) => {
    const updatedLeaders = [...squadLeaders];
    updatedLeaders[index] = value;
    setSquadLeaders(updatedLeaders);
  };
  const handleAddPanelist = (e) => {
    e.preventDefault()
    setPanelists([...panelists, '']); // Add a new empty input field
  };

  const handlePanelChange = (index, value) => {
    const updatedPanelists = [...panelists];
    updatedPanelists[index] = value;
    setPanelists(updatedPanelists);
  };

  return (
    <div className='w-full h-full flex'>
        <div className='w-full h-full flex flex-col'>
            <div className='w-full h-full flex flex-col'>
                <label>Squad Leader</label>
                {squadLeaders.map((leader, index) => (
                    <div className='flex flex-col' key={index}>  
                    <input
                        className='border'
                        type="text"
                        id={`leader-${index + 1}`}
                        value={leader}
                        onChange={(e) => handleLeaderChange(index, e.target.value)}
                    />
                    </div>
                ))}
                <div>
                    <button className='bg-purple text-white' onClick={handleAddLeader}>Add new Squad Leader</button>
                </div>
            </div>
            <div className='w-full h-full flex flex-col'>
                <label>Add Panels/Judges</label>
                {panelists.map((panel, index) => (
                    <div className='flex flex-col' key={index}>
                    <input
                        className='border'
                        type="text"
                        id={`leader-${index + 1}`}
                        value={panel}
                        onChange={(e) => handlePanelChange(index, e.target.value)}
                    />
                    </div>
                ))}
                <div>
                    <button className='bg-purple text-white' onClick={handleAddPanelist}>Add new Squad Leader</button>
                </div>
            </div>
        </div>
        <div className='w-full h-full flex flex-col'>
            <label>Set number of Squad Members participants<span className='text-secondary'>*</span></label>
            <input className='border w-full px-5 py-3' type="number" placeholder='ex: 25'/>
        </div>
    </div>
    
  );
};

export default AddMembers;
