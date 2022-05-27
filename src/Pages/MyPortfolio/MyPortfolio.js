import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='bg-secondary'>
            <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img width={300} className='rounded-xl' src="https://i.ibb.co/d0bDwTd/IMG-20211217-021037-01-removebg-preview-2.jpg" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
        <h1 className='text-2xl font-mono text-[red]'>ASSALAMUOALAIKUM</h1>
      <h1 class="text-5xl mx-20 font-mono font-bold text-[blue]">I AM <br /> SOHANUR  RAHMAN</h1>
      <p class="py-6"></p>
    </div>
  </div>
</div>
 <h1 className='text-2xl bg-primary text-secondary p-2 font-bold'>SOME WORD’S ABUOT ME</h1>
 <h2 className='text-xl font-semibold'>Education:</h2>
 <p>BSC in Software Engineering at Daffodil International University</p>
 <h2 className='text-xl font-semibold'>Present Address:</h2>
 <p>Dhanmondi,Dhaka,Bangladesh</p>
 <h2 className='text-xl font-semibold'>Permanent Address:</h2>
 <p>Pigacha,Rangpur,Bangladesh</p>
 <h2 className='text-xl font-semibold'>Email:</h2>
 <p>srsohan284@gmail.com</p>

<h1 className='bg-primary font-bold text-white text-4xl'>SKILLS</h1>
<h1 className='mr-16 text-xl inline font-semibold'>HTML</h1>
<progress class="progress w-56" value="90" max="100"></progress>
<hr />
<h1 className='mr-16 text-xl inline font-semibold'>CSS(bootstrap,tailwind)</h1>
<progress class="progress w-56" value="80" max="100"></progress>
<hr />
<h1 className='mr-16 text-xl inline font-semibold'>React</h1>
<progress class="progress w-56" value="70" max="100"></progress>
<hr />
<h1 className='mr-16 text-xl inline font-semibold'>Firebase</h1>
<progress class="progress w-56" value="60" max="100"></progress>
<hr />
<h1 className='mr-16 text-xl inline font-semibold'>Node JS</h1>
<progress class="progress w-56" value="20" max="100"></progress>
<hr />
<h1 className='mr-16 text-xl inline font-semibold'>MongoDB</h1>
<progress class="progress w-56" value="40" max="100"></progress>
<hr />
<h1 className='text-2xl bg-primary text-secondary p-2 font-bold'>PROJECTS</h1>
 <h2 className='text-xl font-semibold'>Grocery Shop :</h2>
 <a href="https://grocery-shop-c9e00.web.app/">https://grocery-shop-c9e00.web.app/</a>
 <h2 className='text-xl font-semibold'>Perfect Couple :</h2>
 <a href="https://perfect-couple-90811.web.app/">https://perfect-couple-90811.web.app/</a>
 <h2 className='text-xl font-semibold'>Bike Review :</h2>
 <a href="https://bikereview.netlify.app/">https://bikereview.netlify.app/</a>

        </div>
    );
};

export default MyPortfolio;