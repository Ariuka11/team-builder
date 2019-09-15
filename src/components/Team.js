import React from 'react'

function Team({newTeam, setNewTeam}){
    return(
        <div>
            {newTeam.map((newTeam, index) => (
                <div className = 'team' key = {index}>
                    <h3>{newTeam.name}</h3>
                    <h3>{newTeam.email}</h3>
                    <h3>{newTeam.position}</h3>
                </div>
            ))}
        </div>
    )
}

export default Team;