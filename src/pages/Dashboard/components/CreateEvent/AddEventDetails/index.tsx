const AddEventDetails = () => {
    return ( 
        <>
            <div className="w-full h-full flex gap-10">
                <div className="left-side w-full h-full">
                    <div className=" w-full h-20 flex flex-col">
                        <label className="font-bold">Event Title</label>
                        <input type="text" className="border p-3" placeholder="Input Title"/>
                    </div>
                    <div className=" w-full h-20 flex flex-col">
                        <label className="font-bold">Description</label>
                        <textarea className="border p-3" placeholder="Input Description"></textarea>
                    </div>
                    <div className=" w-full h-20 flex flex-col">
                        <label className="font-bold">Location</label>
                        <input className="border p-3" type="text" placeholder="Input Location" />
                    </div>
                </div>
                <div className="right-side w-full h-full">
                    <div className=" w-full flex gap-5">
                        <div className=" w-full h-20 flex flex-col">
                            <label className="font-bold">Start Date</label>
                            <input className="border p-3" type="date" />
                        </div>
                        <div className=" w-full h-20 flex flex-col">
                            <label className="font-bold">End Date</label>
                            <input className="border p-3" type="date" />
                        </div>
                    </div>
                    
                    <div className=" w-full h-20 flex flex-col">
                        <label className="font-bold">Event Banner</label>
                        <input className="border p-3" type="file" />
                    </div>
                    <div className=" w-full h-20 flex flex-col">
                        <label className="font-bold">Set Event Status</label>
                        <select className="border p-3" name="status" id="status">
                            <option value="upcoming">Upcoming</option>
                            <option value="ongoing">Ongoing</option>
                            <option value="past">Past</option>
                        </select>
                    </div>
                </div> 
            </div>
        </>
    );
}
 
export default AddEventDetails;