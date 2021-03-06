import React from 'react';

import './Project.css';

function Project(props) {
  return (
    <div>
      <div className='row mt-4 projects bg-secondary pb-3'>
        <div className='col-md-4 col-sm'>
          <a href={props.link} target='_blank' rel='noreferrer'>
            <img
              src={props.image}
              className='img-fluid portfolio-img'
              alt={`Demo of Tom's ${props.title} application`}
            />
          </a>
        </div>
        <div className='col-md-8 col-sm'>
          <h3 className='font-weight-bold'>{props.title}</h3>
          <p className='white'>{props.description}</p>
          <a
            type='button'
            className='btn btn-danger'
            href={props.github}
            target='_blank'
            rel='noreferrer'
          >
            GitHub Repository
          </a>
          <a
            type='button'
            className='btn btn-danger mx-2'
            href={props.link}
            target='_blank'
            rel='noreferrer'
          >
            Live Site
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Project;
