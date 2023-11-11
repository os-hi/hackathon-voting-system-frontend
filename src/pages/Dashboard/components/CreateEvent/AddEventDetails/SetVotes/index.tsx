import publicImg from '../../../../assets/public.svg';
import members from '../../../../assets/members.svg';
const SetVotes = () => {
    return ( 
        <div className="w-full h-full flex gap-10">
            <div className="left-side w-full h-full flex flex-col gap-5">
                <img src={publicImg} alt="members" className='w-1/2 h-1/2'/>
                <div className="w-full flex flex-col">
                    <span className="font-bold">Member can vote?</span>
                    <select className="w-1/2 border p-3" name="memberVote" id="memberVote">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="w-full flex flex-col">
                    <label className="font-bold">Judge vote percentage (%)</label>
                    <input className="w-1/2 border p-3" type="number" name="percentage" id="percentage" />
                </div>
                <div className="w-full flex flex-col">
                    <label className="font-bold">Members vote percentage (%)</label>
                    <input className="w-1/2 border p-3" type="number" name="percentage" id="percentage" />
                </div>
                <div className="w-full flex flex-col">
                    <span className="font-bold">Alowed number of votes per member (max 3)</span>
                    <input className="w-1/2 border p-3" type="number" name="number" id="nmber" max={3}/>
                </div>
            </div>
            <div className="left-side w-full h-full flex flex-col gap-5">
                <img src={members} alt="public" className='w-1/2 h-1/2'/>
                <div className="w-full flex flex-col">
                    <span className="font-bold">Public can vote?</span>
                    <select className="w-1/2 border p-3" name="publicVote" id="publicVote">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="w-full flex flex-col">
                    <label className="font-bold">Public vote percentage (%)</label>
                    <input className="w-1/2 border p-3" type="number" name="percentage" id="percentage" />
                </div>
                <div className="w-full flex flex-col">
                    <span className="font-bold">Alowed number of votes per member (max 3)</span>
                    <input className="w-1/2 border p-3" type="number" name="number" id="nmber" max={3}/>
                </div>
            </div>
        </div>
     );
}
 
export default SetVotes;