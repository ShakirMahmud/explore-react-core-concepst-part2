import { useState } from "react"
import { BiBorderRadius } from "react-icons/bi"

export default function Team() {
    const [team, setTeam] = useState(11);
    const handleAdd = ()=>{
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const handleSubtract = ()=>{
        const newTeam = team - 1;
        setTeam(newTeam);
    }
    const teamStyle ={
        border: '2px solid purple',
        margin:'15px',
        padding:'15px',
        borderRadius: '16px'
    }
  return (
    <div style={teamStyle}>
      <h3>Team Members: {team}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Remove</button>
    </div>
  )
}
