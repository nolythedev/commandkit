import React from 'react';
import '../assets/styles/Grid.css';
import commands from '../utils/commands'

function Grid() {

  console.log(commands[0].commands[0]);
  return (
    <>
   
    <section className='grid-container'>
      {commands.map(command => (
        <div key={command.id} className="command-block">
          <div className="command-header">
            <div className="title-container">
              <h3>{command.title}</h3>
              <i className="fa-regular fa-copy"></i>
            </div>
            <p className="command-description">{command.description}</p>
          </div>
          <div className="code-block">
            <code>{command.commands[0].command}</code> <br />
            <code>{command.commands[0].example}</code>
          </div>
        </div>
        
      ))}
    </section>
    </>
  )
}

export default Grid;