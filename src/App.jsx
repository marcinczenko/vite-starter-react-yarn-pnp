const App = () => (
  <div className='w-screen h-screen flex flex-col items-center justify-center bg-blue-700 text-white text-4xl'>
    <p>vite-tailwind-starter</p>
    <div className='bg-white p-1'>
      <p className='text-xl text-blue-700'>with yarn pnp</p>
    </div>
    <p className='text-base'>with eslint</p>
    <p className='text-xl'>with local <span className='font-roboto-mono text-3xl font-thin'>Roboto Mono</span> font</p>
    <p className='text-xl'>and <span className='font-roboto-mono italic text-3xl font-thin'>Roboto Mono Italic</span></p>
  </div>
)

export default App
