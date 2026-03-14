import './App.css';
import Profile from './Profile.jpg';
import Ali from './Ali.jpg'
import In from './In.jpg'
import Insta from './Insta.jpg'
import Twitter from './Twitter.jpg'
import ALtobacco from './ALtobacco.jpg'
import Product from './Product.jpg'
import EDA from './EDA.jpg'
import EDA2 from './EDA2.jpg'



function App() {
  return (
    <div className='container'>
    <nav class = "nav">
      <img className='dp' src={Profile}/>
             <ul class="nav-links">
               <a className="nav-items" href = "#home">Home</a> 
               <a className="nav-items" href = "#about">About</a>
               <a className="nav-items" href = "#portfolio">Portfolio</a> 
                <a className="nav-items" href = "#contact">Contact Me</a>
             </ul>
             <a href="https://wa.me/923099091193?text=Hi%20Ali!%20I%20saw%20your%20portfolio.%20I%20have%20a%20problem%20that%20needs%20a%20smart%20solution.%20Can%20we%20talk?" 
   class="btn" target="_blank">
   Hire Me
</a>
           </nav> 
        
          <section id= "home" >
            
             
              <h2 className='name'>Ali Haidar</h2>
              <p className='name'>Full-Stack Developer <br/> Build high-performance web application with clean,<br></br>maintainable code.</p>     
             <div style= {{display: 'flex', width: '100%', justifyContent: 'center'}}><a className='btn' href = "#portfolio">View My Work</a></div>
             <h2 style={{fontSize: '40px', fontFamily:' Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>Featured Projects</h2>
             <h3 style={{fontSize: '30px', fontFamily:' Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>Global Population EDA</h3>
             <p className='eda-text'>This project is a comprehensive Exploratory Data Analysis (EDA) of Global population datasets. The primary objective was to uncover historical
                growth patterns and predict future demographic shifts using Python's powerfulldata science ecosystem. 
             </p>
             <h3  style={{fontSize: '30px', fontFamily:' Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>E-Commerce Store</h3>
             <p className='eda-text'>A responsive frontend application built with React.js focusing on components-based architecture. It 
              feature dynamic rendering via Hooks and mobile-first design using CSS Grid. This project highlights my skills in creating seamless user experiance.
             </p>
             <h3 style={{fontSize: '30px', fontFamily:' Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>Logic Driven App (Product Page)</h3>
             <p className='eda-text'> Developed a clean product showcase using Semantic HTML5 and CSS3 to master web structure and hierachy. This project 
              demonstrates a solid foundation in building organized and accessible web documents.
             </p>
            
          </section>
          
          <section id = "about"> 
            
             <h2 style={{display:'flex', width: '100%', justifyContent: 'center',fontSize: '45px', fontFamily:' Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>Who is Ali Haidar?</h2>
              
             <div className='about' style={{ gap:'40px'}}>
               <div className='left' style={{ gap:"40px"}}>
               
              <img className='profile-bio' src={Ali}/>
               <div className=' about-link ' style={{display:'grow' }}><a href = "http://www.instagram.com/ali_haidar360">
               <img className='link' src = {Insta}></img></a>
               <a href = "http://x.com/AliHaidar360"><img className='link' src = {Twitter}></img></a>
               <a href = "https://www.linkedin.com/in/alihaidar360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img className='link' src ={In}></img></a>
               </div >
              <div className='anchor-link'><a href="CV.pdf" className='btn'>Download My Story</a></div>
              
                 
              </div>
              <div className='right'><p style={{ width: '100%'}} className='eda-text'>I completed a 6-month Full-Stack Python course, mastering Core Python, OOP, and React.js. 
                  This training gave me a solid grip on building logical backend structures and modern, interactive frontend designs.</p>
                  <p  style={{ width: '100%'}} className='eda-text'> During my 3-month internship, I worked as a Frontend Developer building various e-commerce and messaging pages.
                     Due to privacy policies, I cannot showcase those specific projects, but the experience refined my professional workflow.</p>
                      <p  style={{ width: '100%'}} className='eda-text'>​I am a seasoned Opening Batsman with 8 years of tape-ball and 2 years of club-level hard-ball experience.
                         Leading my team to numerous tournament wins has taught me discipline, focus, and how to perform under pressure.</p>
                  </div>
             </div>
          </section>
              

          <section id = "portfolio">
          <div className='portfolio-nav'>
          
            <h2 className='heading'>Selected works & Data Insight</h2>
          </div>
          <div className='portfolio-1'><img className='altobacco-pic' src = {ALtobacco}></img>
              <h3 style = {{fontSize:'30px', fontFamily:' Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>Removing Hurdles from Online Shopping: <p className='eda-text'>Most online
                 stores feel heavy and cluttered. I made this platform Light and Natural to use. By clearing the path for the user, I ensured they can find any product without getting lost or frustrated.
                 It’s all about creating a Seamless Flow where the technology stays invisible, but the shopping experience feels perfect.<br></br>
                 </p><div className='anchor-link'><a href="https://github.com/alihaidar360/tobacco-project" className='btn'>View Full Code</a></div></h3>
             </div>
             <div className='portfolio-2'>
                <h3 style = {{fontSize:'30px', fontFamily:' Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>Giving Users a Clear View:<p className='eda-text'>People often hesitate to buy because 
                  they don’t understand the details. I changed that by showing Live Charts and simple visuals instead of boring lists. 
                  This gives users the Confidence to choose quickly. I turned a complicated page into a simple tool that answers every question before the user even asks it.</p>
                 <div className='anchor-link'> <a href="https://github.com/alihaidar360/Product-Page-Using-HTML" className='btn'>View Full Code</a></div></h3>
              <img className='altobacco-pic' src = {Product}></img>
             </div>
             <div className='portfolio-1'>
                 <img src = {EDA} className='altobacco-pic'></img>
                 <img src = {EDA2} className='altobacco-pic'></img>
             </div>
             <h2>Millions of Rows into Strategic Decisions:</h2>
             <p className='eda-text'>Data is useless if it’s just a mess of numbers, so I take that chaos and turn it into Crystal Clear Logic. By analyzing millions of global population records, 
              I identified the exact patterns that matter—growth shifts, regional density, and future trends—without losing the user in complicated spreadsheets.
I don’t just show graphs; I provide Answers.<br/> Whether it’s cleaning "Dirty Data," finding hidden links between numbers, or predicting what happens next,
 I ensure the final result is 100% accurate and easy to act upon. When you look at my analysis, you don’t need to check the code to see the truth; the results 
  for themselves. I solve the "Data Confusion" problem by making every insight feel obvious and every decision feel</p>
  <div className='anchor-link'><a href="https://github.com/alihaidar360/EDA-of-World-population" className='btn' >View Full Code</a></div>
          </section>
          <section id = "contact">
            <div className='contact'>
               <div className='contact-nav'><img className='contact-dp' src = {Profile}></img>
               <h2 style={{width:'15px', height:'15px', backgroundColor:'green',border:'2px solid white', borderRadius:'50px', position:'absolute' }}></h2></div>
               <h2 className='name'>Let's Talk Logic</h2>
            </div>
            <div><h3 className='name'>Right now, you probably have <br></br>a project that needs to move from 'Idea' to 'Logic'. Let's see how we <br></br>can make that happen</h3>
             <a href = ""></a>
            </div>
            <div className='anchor-link'><a href="mailto:alihaidar005911@gmail.com" className='btn'>Drop a Message</a></div>
            <div>
               <h2 class="point"> Read Points Very Carefully</h2>
               <h2 className='contact-point'>I Hear You:</h2>
               <h3 className='eda-text'>I don’t just take orders; I listen to the silence between your words. 
                  Your business isn't just a project to me—it’s a vision that deserves to be understood before a single line of code is written</h3>
            </div>
            <div>
               <h2 className='contact-point'>Honesty Over Profit:</h2>
               <h3 className='eda-text'>If your idea doesn't need a complex backend, I’ll tell you. I value your success more than a longer invoice.
                   My logic is built on honesty, ensuring we build only what adds real value to your life</h3>
            </div>
            <div>
               <h2 className='contact-point'>Simplicity:</h2>
               <h3 className='eda-text'>Complexity is easy, but simplicity is an art. I take your most confusing business hurdles and turn them into a clean,
                   smooth experience that feels like second nature to your users</h3>
            </div>
            <div className='anchor-link'><a className='btn' href = "https://wa.me/923099091193?text=Hi%20Ali!" >Solve My Problem</a></div>
            <h1 className='name'>Thanks For Seeing my Portfolio🤗</h1>
          </section>
   </div>
  )
}
export default App