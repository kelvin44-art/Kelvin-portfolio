import React from 'react'
import html_logo from '../assets/html.png'
import css_logo from '../assets/css.png'
import js_logo from '../assets/download.png'



function Skills({title, skill1, skill2, langauge1, langauge2, langauge3, langauge4}) {
  return (
    <div>
        <div className='table border w-98 mt-5 ml-3'>
                            <h1 className='text-center mt-2 font-bold'>{title}</h1>
                            <hr />
                            <p className='flex justify-between ml-5 mr-5 mt-5 '>
                                <span className='skills-list'>
                                    {skill1}
                                </span>
                                <span className='skills-list'>
                                    {skill2}
                                </span>
                            </p>
                            {/* Horizontal infinite marquee - duplicated track for seamless loop */}
                            <div className="marquee-viewport ml-10 mr-10 mt-5 mb-5">
                                <div className="marquee-track">
                                    <div className="marquee-group">
                                        <div className='skill-item flex items-center gap-4 mr-8'>
                                            <img className='logos' src={html_logo} alt="" />
                                            <span className='font-bold'>{langauge1}</span>
                                        </div>
                                        <div className='skill-item flex items-center gap-4 mr-8'>
                                            <img className='logos' src={css_logo} alt="" />
                                            <span className='font-bold'>{langauge2}</span>
                                        </div>
                                        <div className='skill-item flex items-center gap-4 mr-8'>
                                            <img className='logos' src={js_logo} alt="" />
                                            <span className='font-bold'>{langauge3}</span>
                                        </div>
                                    </div>
                                    {/* duplicate group for seamless looping */}
                                    <div className="marquee-group" aria-hidden="true">
                                        <div className='skill-item flex items-center gap-4 mr-8'>
                                            <img className='logos' src={html_logo} alt="" />
                                            <span className='font-bold'>{langauge1}</span>
                                        </div>
                                        <div className='skill-item flex items-center gap-4 mr-8'>
                                            <img className='logos' src={css_logo} alt="" />
                                            <span className='font-bold'>{langauge2}</span>
                                        </div>
                                        <div className='skill-item flex items-center gap-4 mr-8'>
                                            <img className='logos' src={js_logo} alt="" />
                                            <span className='font-bold'>{langauge3}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    </div>
  )
}

export default Skills